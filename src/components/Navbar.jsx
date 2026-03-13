import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton';

function Navbar({ links, cta }) {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');

    if (!heroSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const shellClasses = scrolled || menuOpen
    ? 'border border-moss/10 bg-cream/75 text-charcoal shadow-panel backdrop-blur-xl'
    : 'border border-white/10 bg-white/5 text-cream backdrop-blur-sm';

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <div
        ref={navRef}
        className={`pointer-events-auto w-full max-w-6xl rounded-full px-4 py-3 transition-all duration-500 ${shellClasses}`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="min-w-0">
            <span className="block font-display text-base font-semibold tracking-[-0.05em] sm:text-lg">
              Lebone Rachidi
            </span>
            <span className={`mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.3em] ${scrolled ? 'text-moss/70' : 'text-cream/70'}`}>
              Operations systems portfolio
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition duration-300 hover:-translate-y-px ${
                  scrolled ? 'text-charcoal/80 hover:text-charcoal' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              href={cta.href}
              download={cta.download}
              disabled={!cta.available}
              variant={scrolled ? 'primary' : 'secondary'}
              className="px-4 py-2 text-xs"
            >
              {cta.available ? cta.label : 'CV upload pending'}
            </MagneticButton>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
              scrolled || menuOpen
                ? 'border-moss/20 bg-white/60 text-charcoal'
                : 'border-white/20 bg-white/5 text-cream'
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-4 rounded-[2rem] border border-moss/10 bg-white/70 p-4 shadow-soft backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-3 py-3 text-sm font-medium text-charcoal/80 transition hover:bg-moss/5 hover:text-charcoal"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <MagneticButton
              href={cta.href}
              download={cta.download}
              disabled={!cta.available}
              variant="primary"
              className="mt-4 w-full justify-center"
            >
              {cta.available ? cta.label : 'CV upload pending'}
            </MagneticButton>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
