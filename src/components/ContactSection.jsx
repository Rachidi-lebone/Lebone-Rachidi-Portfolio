import { useEffect, useRef } from 'react';
import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

function ContactSection({ content, prefersReducedMotion }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-contact-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-contact-reveal]', {
        y: 32,
        opacity: 0,
        duration: 0.95,
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
      <div className="mx-auto max-w-6xl">
        <div data-contact-reveal>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_1.08fr]">
          <article
            data-contact-reveal
            className="rounded-[2.2rem] border border-moss/10 bg-moss p-6 text-cream shadow-panel sm:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cream/60">
              CV Access
            </p>
            <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em]">
              Keep the review simple.
            </h3>
            <p className="mt-5 text-base leading-8 text-cream/70">
              Use the project links for proof of work, and the CV for a concise summary of experience and responsibilities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MagneticButton
                href={content.cv.href}
                download
                disabled={!content.cv.available}
                variant="secondary"
              >
                <span className="inline-flex items-center gap-2">
                  {content.cv.available ? content.cv.label : content.cv.unavailableLabel}
                  <Download size={16} />
                </span>
              </MagneticButton>

              <MagneticButton href="#projects" variant="primary">
                View Projects
              </MagneticButton>
            </div>

            <p className="mt-5 text-sm leading-7 text-cream/60">{content.cv.note}</p>
          </article>

          <article
            data-contact-reveal
            className="rounded-[2.2rem] border border-moss/10 bg-white/80 p-6 shadow-soft backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {content.directLinks.map((item) => {
                const icon = item.label === 'Email'
                  ? <Mail size={18} />
                  : item.label === 'Phone'
                    ? <Phone size={18} />
                    : <MapPin size={18} />;

                const inner = (
                  <div className="rounded-[1.6rem] border border-moss/10 bg-cream/60 p-5 transition hover:-translate-y-px">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-moss/10 text-moss">
                      {icon}
                    </div>
                    <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.26em] text-moss/50">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-charcoal/80">{item.value}</p>
                  </div>
                );

                if (!item.href) {
                  return <div key={item.label}>{inner}</div>;
                }

                return (
                  <a key={item.label} href={item.href}>
                    {inner}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-moss/10 bg-white p-5">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-moss/50">
                Social Profiles
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {content.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-moss/10 bg-cream/60 px-4 py-4 text-sm font-medium text-charcoal transition hover:border-clay/40 hover:bg-cream"
                  >
                    {social.label}
                    <ArrowUpRight size={16} className="transition group-hover:-translate-y-px" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
