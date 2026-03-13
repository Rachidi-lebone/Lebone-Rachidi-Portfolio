import { useEffect, useRef } from 'react';
import { ArrowDownRight, Download, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton';

function HeroSection({ content, prefersReducedMotion }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-hero-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-hero-reveal]', {
        opacity: 0,
        y: 40,
        duration: 1.1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id={content.id}
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-end overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pb-10 lg:px-10"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.4) 48%, rgba(26,26,26,0.85) 100%), url(${content.image})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,88,51,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(46,64,54,0.35),transparent_42%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-moss/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="max-w-4xl">
          <div data-hero-reveal>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-cream/70">
              {content.eyebrow}
            </p>
          </div>

          <div className="mt-5" data-hero-reveal>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] text-cream sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              <span className="block font-display">{content.titleTop}</span>
              <span className="block font-serif text-[1.55em] font-semibold italic text-cream">
                {content.titleBottom}
              </span>
            </h1>
          </div>

          <div data-hero-reveal className="mt-6 max-w-2xl">
            <p className="text-lg font-medium leading-8 text-cream/90 sm:text-xl">
              {content.purpose}
            </p>
            <p className="mt-4 text-base leading-7 text-cream/70 sm:text-lg">
              {content.intro}
            </p>
          </div>

          <div data-hero-reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton href={content.actions[0].href} variant="primary">
              <span className="inline-flex items-center gap-2">
                {content.actions[0].label}
                <ArrowDownRight size={16} />
              </span>
            </MagneticButton>

            <MagneticButton
              href={content.actions[1].href}
              download={content.actions[1].download}
              disabled={!content.actions[1].available}
              variant="secondary"
            >
              <span className="inline-flex items-center gap-2">
                {content.actions[1].available ? content.actions[1].label : 'CV upload pending'}
                <Download size={16} />
              </span>
            </MagneticButton>

            <MagneticButton href={content.actions[2].href} variant="secondary">
              <span className="inline-flex items-center gap-2">
                {content.actions[2].label}
                <Mail size={16} />
              </span>
            </MagneticButton>
          </div>
        </div>

        <aside
          data-hero-reveal
          className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-cream shadow-panel backdrop-blur-xl sm:p-8"
        >
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.32em] text-cream/60">
            Focus Areas
          </p>
          <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.05em]">
            Practical infrastructure for the work behind the work.
          </p>
          <p className="mt-4 text-sm leading-7 text-cream/70">
            Systems do their best work when they remove friction without adding noise.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {content.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cream/80"
              >
                {highlight}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
