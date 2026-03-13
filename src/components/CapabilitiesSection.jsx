import { useEffect, useRef } from 'react';
import { Check, Wrench } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

function CapabilitiesSection({ content, skills, tools, prefersReducedMotion }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-capability-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-capability-reveal]', {
        y: 30,
        opacity: 0,
        duration: 0.95,
        stagger: 0.08,
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
      <div className="mx-auto max-w-6xl">
        <div data-capability-reveal>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <article
                key={skill}
                data-capability-reveal
                className="rounded-[2rem] border border-moss/10 bg-white/75 p-5 shadow-soft backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
                    <Check size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-moss/50">
                      Capability {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-charcoal">
                      {skill}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside
            data-capability-reveal
            className="rounded-[2rem] border border-moss/10 bg-moss p-6 text-cream shadow-panel sm:p-8"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream">
              <Wrench size={18} />
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em]">
              {content.toolsTitle}
            </h3>
            <p className="mt-4 text-base leading-8 text-cream/70">
              {content.toolsDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-cream/90"
                >
                  {tool}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
