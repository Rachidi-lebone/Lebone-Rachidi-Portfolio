import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

function AboutSection({ content, prefersReducedMotion }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-about-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-about-reveal]', {
        y: 34,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id={content.id} ref={sectionRef} className="px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1.05fr)_0.95fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-8">
        <div data-about-reveal className="lg:col-start-1 lg:row-start-1">
          <SectionHeader eyebrow={content.eyebrow} title={content.title} />
        </div>

        <div className="space-y-6 lg:col-start-2 lg:row-start-1">
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              data-about-reveal
              className="text-base leading-8 text-charcoal/70 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div data-about-reveal className="hidden lg:col-start-1 lg:row-start-2 lg:block">
          <div className="relative min-h-[37.5rem] overflow-hidden rounded-[2.4rem] border border-moss/10 bg-[linear-gradient(145deg,#111816_0%,#1B2922_48%,#202722_100%)] shadow-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,240,233,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(204,88,51,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(46,64,54,0.4),transparent_42%)]" />
            <div className="absolute inset-4 rounded-[2rem] border border-white/6 bg-white/[0.02]" />
            <div className="absolute inset-4 flex items-end justify-center overflow-hidden rounded-[2rem] px-6 pb-0 pt-8">
              <img
                src={content.portrait.src}
                alt={content.portrait.alt}
                className="max-h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.28)]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-white/10 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-cream">
              Lebone Rachidi
            </div>
            <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-white/10 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-cream/80">
              Operations systems
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-2 lg:col-start-2 lg:row-start-2 lg:pt-0">
          {content.pillars.map((pillar) => (
            <article
              key={pillar.title}
              data-about-reveal
              className="rounded-[2rem] border border-moss/10 bg-white/70 p-6 shadow-soft backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/70">
                    {pillar.description}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-moss/10 text-moss">
                  <ArrowRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
