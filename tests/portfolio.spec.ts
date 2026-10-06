import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const home = '/portfolio/';

test('French and English content, metadata and project links agree', async ({
  page,
}) => {
  await page.goto(home);
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Des interfaces claires.',
  );
  await page.getByRole('link', { name: 'View this page in English' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Clear interfaces.',
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://mrafael1.github.io/portfolio/en/',
  );
  await page.getByRole('link', { name: 'AloneLab', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('AloneLab');
  await expect(
    page.getByRole('link', { name: 'Visit the website' }),
  ).toHaveAttribute('href', 'https://alonelab.com/');
  await page.getByRole('link', { name: 'Voir cette page en français' }).click();
  await expect(page).toHaveURL(/\/projets\/alonelab\/$/);
});

test('all case studies and the CV are available', async ({ page, request }) => {
  for (const route of [
    'projets/alonelab/',
    'projets/textile/',
    'projets/sondages/',
    'en/projects/alonelab/',
    'en/projects/textile/',
    'en/projects/sondages/',
  ]) {
    const response = await page.goto(`${home}${route}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
  const pdf = await request.get(`${home}documents/rafael-marques-cv.pdf`);
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()['content-type']).toContain('application/pdf');
  expect((await pdf.body()).subarray(0, 4).toString()).toBe('%PDF');
});

test('navigation works with a keyboard and at narrow widths', async ({
  page,
  isMobile,
}) => {
  await page.goto(home);
  if (isMobile) {
    const menu = page.getByRole('button', { name: 'Menu de navigation' });
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
    await menu.click();
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Parcours' })
      .click();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
  } else {
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Parcours' })
      .click();
  }
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator('#experience')).toBeInViewport();
  const dimensions = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.width);
});

test('copying an email gives feedback and contact is a working link', async ({
  page,
}) => {
  await page.goto(home);
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: async () => undefined },
      configurable: true,
    });
  });
  await page.getByRole('button', { name: 'Copier l’adresse e-mail' }).click();
  await expect(page.getByRole('status')).toHaveText('Adresse e-mail copiée.');
  await expect(
    page.getByRole('link', { name: 'M’écrire', exact: true }),
  ).toHaveAttribute('href', 'mailto:marquesrafael112@gmail.com');
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async () => {
          throw new Error('Permission denied');
        },
      },
      configurable: true,
    });
  });
  await page.getByRole('button', { name: 'Copier l’adresse e-mail' }).click();
  await expect(page.getByRole('status')).toContainText(
    'La copie est indisponible.',
  );
});

test('main pages have no automated accessibility violations', async ({
  page,
}) => {
  for (const route of ['', 'en/', 'projets/alonelab/', 'projets/textile/']) {
    await page.goto(`${home}${route}`);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  }
});
