import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

function HelixGraphic({ orbitRef }) {
  return (
    <svg viewBox="0 0 280 280" className="h-52 w-52 text-clay/80 sm:h-60 sm:w-60">
      <g ref={orbitRef}>
        <circle cx="140" cy="140" r="88" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <circle cx="140" cy="140" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path
          d="M92 76C135 104 145 176 188 204"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M188 76C145 104 135 176 92 204"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.68"
        />
        <circle cx="92" cy="76" r="6" fill="currentColor" />
        <circle cx="188" cy="76" r="6" fill="currentColor" opacity="0.72" />
        <circle cx="92" cy="204" r="6" fill="currentColor" opacity="0.72" />
        <circle cx="188" cy="204" r="6" fill="currentColor" />
      </g>
    </svg>
  );
}

function ScanGraphic({ scanLineRef }) {
  return (
    <svg viewBox="0 0 280 280" className="h-52 w-52 text-clay/90 sm:h-60 sm:w-60">
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.2" fill="currentColor" opacity="0.28" />
        </pattern>
      </defs>
      <rect x="28" y="28" width="224" height="224" rx="32" fill="url(#dot-grid)" />
      <rect x="28" y="28" width="224" height="224" rx="32" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
      <rect ref={scanLineRef} x="36" y="64" width="208" height="10" rx="5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function WaveGraphic({ wavePathRef }) {
  return (
    <svg viewBox="0 0 320 240" className="h-52 w-60 text-clay/90 sm:h-60 sm:w-72">
      <rect x="18" y="34" width="284" height="172" rx="28" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
      <path
        ref={wavePathRef}
        d="M34 143H82L102 96L128 173L154 78L180 155L208 119L228 143H286"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="82" cy="143" r="4" fill="currentColor" />
      <circle cx="154" cy="78" r="4" fill="currentColor" />
      <circle cx="228" cy="143" r="4" fill="currentColor" />
    </svg>
  );
}

function ProtocolGraphic({ type, orbitRef, scanLineRef, wavePathRef }) {
  if (type === 'helix') {
    return <HelixGraphic orbitRef={orbitRef} />;
  }

  if (type === 'scan') {
    return <ScanGraphic scanLineRef={scanLineRef} />;
  }

  return <WaveGraphic wavePathRef={wavePathRef} />;
}

function ProtocolSection({ content, steps, prefersReducedMotion }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const helixRef = useRef(null);
  const scanLineRef = useRef(null);
  const wavePathRef = useRef(null);
  const [stackEnabled, setStackEnabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setStackEnabled(window.innerWidth >= 1024 && !prefersReducedMotion);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);

      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      if (helixRef.current) {
        gsap.to(helixRef.current, {
          rotation: 360,
          transformOrigin: '50% 50%',
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
      }

      if (scanLineRef.current) {
        gsap.to(scanLineRef.current, {
          y: 116,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
        });
      }

      if (wavePathRef.current) {
        const pathLength = wavePathRef.current.getTotalLength();
        gsap.set(wavePathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength / 2,
        });
        gsap.to(wavePathRef.current, {
          strokeDashoffset: 0,
          duration: 2.6,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      if (stackEnabled && cards.length > 1) {
        cards.forEach((card, index) => {
          gsap.set(card, {
            position: 'absolute',
            inset: 0,
            height: '100%',
            zIndex: index + 1,
          });
        });

        gsap.set(cards[0], { yPercent: 0, opacity: 1 });
        gsap.set(cards.slice(1), { yPercent: 18, opacity: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top+=32',
            end: `+=${cards.length * window.innerHeight * 1.05}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        for (let index = 1; index < cards.length; index += 1) {
          timeline
            .to(
              cards[index - 1],
              {
                scale: 0.9,
                opacity: 0.5,
                filter: 'blur(20px)',
                duration: 1,
                ease: 'power2.inOut',
              },
              index - 0.2,
            )
            .to(
              cards[index],
              {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
              },
              '<',
            );
        }
      } else {
        gsap.set(cards, { clearProps: 'all' });
        gsap.from(cards, {
          y: 36,
          opacity: 0,
          duration: 0.95,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, stackEnabled]);

  return (
    <section
      id={content.id}
      ref={sectionRef}
      className="overflow-hidden px-4 py-20 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className={`mt-12 ${stackEnabled ? 'relative h-[82vh]' : 'space-y-6'}`}>
          {steps.map((step, index) => (
            <article
              key={step.step}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={`relative overflow-hidden rounded-[2.2rem] border border-moss/10 bg-gradient-to-br from-moss to-charcoal p-6 text-cream shadow-panel sm:p-8 ${
                stackEnabled ? 'h-full' : 'min-h-[30rem] lg:min-h-[34rem]'
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,88,51,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(242,240,233,0.08),transparent_30%)]" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_minmax(260px,360px)] lg:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-cream/60">
                    Step {step.step}
                  </p>
                  <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-cream/70 sm:text-lg">
                    {step.description}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-cream/70">
                    Operating method
                    <ArrowRight size={15} />
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <ProtocolGraphic
                    type={step.type}
                    orbitRef={step.type === 'helix' ? helixRef : undefined}
                    scanLineRef={step.type === 'scan' ? scanLineRef : undefined}
                    wavePathRef={step.type === 'wave' ? wavePathRef : undefined}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProtocolSection;
