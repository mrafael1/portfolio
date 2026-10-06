export function initMotion(): void {
  if (!('IntersectionObserver' in window) || !('animate' in Element.prototype))
    return;

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const revealed = new WeakSet<HTMLElement>();
  const running = new Map<HTMLElement, Animation>();
  let observer: IntersectionObserver | undefined;

  function stop(): void {
    observer?.disconnect();
    observer = undefined;
    for (const animation of running.values()) animation.cancel();
    running.clear();
  }

  function start(): void {
    stop();
    if (preference.matches) return;

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (!entry.isIntersecting || revealed.has(element)) continue;
          observer?.unobserve(element);
          revealed.add(element);
          if (element.contains(document.activeElement)) continue;

          const delay = Number(element.dataset.revealDelay ?? 0);
          const animation = element.animate(
            [
              { opacity: 0, transform: 'translateY(14px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 560,
              delay: Number.isFinite(delay)
                ? Math.min(160, Math.max(0, delay))
                : 0,
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
              fill: 'backwards',
            },
          );
          running.set(element, animation);
          const clear = () => running.delete(element);
          animation.addEventListener('finish', clear, { once: true });
          animation.addEventListener('cancel', clear, { once: true });
        }
      },
      { rootMargin: '0px 0px 40px 0px', threshold: 0 },
    );

    for (const target of targets) {
      if (!revealed.has(target)) observer.observe(target);
    }
  }

  document.addEventListener('focusin', (event) => {
    if (!(event.target instanceof Node)) return;
    for (const [element, animation] of running) {
      if (element.contains(event.target)) animation.cancel();
    }
  });
  preference.addEventListener('change', start);
  start();
}
