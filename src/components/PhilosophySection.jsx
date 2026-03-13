import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PhilosophySection({ content, prefersReducedMotion }) {
  const sectionRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('[data-philosophy-word]');

      if (prefersReducedMotion) {
        gsap.set(words, { opacity: 1, y: 0 });
        return;
      }

      if (textureRef.current) {
        gsap.to(textureRef.current, {
          yPercent: 16,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.from(words, {
        y: 32,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const statementWords = ['systems', 'that', 'make', 'execution', 'clear,', 'trackable,', 'and', 'repeatable.'];

  return (
    <section
      id={content.id}
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal px-4 py-24 text-cream sm:px-6 lg:px-10 lg:py-28"
    >
      <div
        ref={textureRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.72), rgba(26,26,26,0.88)), url(${content.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,88,51,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(46,64,54,0.36),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-cream/60">
          {content.eyebrow}
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="text-base leading-8 text-cream/60 sm:text-lg">
              {content.title}
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-cream/60">
              {content.description}
            </p>
          </div>

          <div>
            <p className="text-lg leading-8 text-cream/60 sm:text-xl">
              {content.statementOne}
            </p>

            <div className="mt-8">
              <p className="font-display text-[2.2rem] font-semibold tracking-[-0.05em] text-cream sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
                <span className="block text-cream/90">I focus on:</span>
                <span className="mt-3 block">
                  {statementWords.map((word) => (
                    <span
                      key={word}
                      data-philosophy-word
                      className={`mr-3 inline-block ${
                        ['clear,', 'trackable,', 'repeatable.'].includes(word)
                          ? 'font-serif text-[1.08em] italic text-clay'
                          : ''
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
