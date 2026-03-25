import { useEffect, useRef, useState } from 'react';
import { CalendarDays, Layers3, Radio } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

function DiagnosticShuffler({ item, prefersReducedMotion }) {
  const [stack, setStack] = useState(item.stackLabels);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setStack((current) => {
        const next = [...current];
        const last = next.pop();

        if (last) {
          next.unshift(last);
        }

        return next;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <article className="feature-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="feature-card__label">Diagnostic Shuffler</p>
          <h3 className="feature-card__title">{item.title}</h3>
        </div>
        <span className="feature-card__icon">
          <Layers3 size={16} />
        </span>
      </div>

      <p className="feature-card__description">{item.descriptor}</p>

      <div className="mt-8 flex flex-1 items-end">
        <div className="relative h-full min-h-[21rem] w-full">
          {stack.map((card, index) => (
            <div
              key={card.title}
              className="absolute inset-x-0 rounded-[1.75rem] border border-moss/10 bg-gradient-to-br from-white to-cream p-5 shadow-soft transition-all duration-700"
              style={{
                zIndex: stack.length - index,
                transform: `translateY(${index * 18}px) scale(${1 - index * 0.05})`,
                opacity: 1 - index * 0.16,
              }}
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-moss/60">
                Layer 0{index + 1}
              </p>
              <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.05em] text-charcoal">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function TelemetryTypewriter({ item, prefersReducedMotion }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(prefersReducedMotion ? item.feedMessages[0].length : 0);
  const [history, setHistory] = useState(prefersReducedMotion ? item.feedMessages.slice(0, 2) : []);
  const currentMessage = item.feedMessages[messageIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      setCharIndex(item.feedMessages[0].length);
      setHistory(item.feedMessages.slice(0, 2));
      return undefined;
    }

    if (charIndex < currentMessage.length) {
      const typingTimeout = window.setTimeout(() => {
        setCharIndex((value) => value + 1);
      }, 34);

      return () => window.clearTimeout(typingTimeout);
    }

    const cycleTimeout = window.setTimeout(() => {
      setHistory((current) => [...current.slice(-1), currentMessage]);
      setMessageIndex((value) => (value + 1) % item.feedMessages.length);
      setCharIndex(0);
    }, 1400);

    return () => window.clearTimeout(cycleTimeout);
  }, [charIndex, currentMessage, item.feedMessages, prefersReducedMotion]);

  const displayMessages = prefersReducedMotion
    ? item.feedMessages
    : [...history, currentMessage.slice(0, charIndex)];

  return (
    <article className="feature-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="feature-card__label">Telemetry Typewriter</p>
          <h3 className="feature-card__title">{item.title}</h3>
        </div>
        <span className="feature-card__icon">
          <Radio size={16} />
        </span>
      </div>

      <p className="feature-card__description">{item.descriptor}</p>

      <div className="mt-8 flex flex-1">
        <div className="flex h-full min-h-[21rem] w-full flex-col rounded-[1.75rem] border border-moss/10 bg-charcoal p-5 text-cream shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cream/70">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-clay" />
              Live Feed
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cream/50">
              sync active
            </span>
          </div>

          <div className="mt-5 h-[12rem] overflow-hidden space-y-3 font-mono text-sm leading-7">
            {displayMessages.map((message, index) => {
              const isCurrent = index === displayMessages.length - 1 && !prefersReducedMotion;
              return (
                <p
                  key={`${message}-${index}`}
                  className={isCurrent ? 'text-cream' : 'text-cream/50'}
                >
                  <span className="text-clay">$</span> {message}
                  {isCurrent ? <span className="animate-caret text-clay">|</span> : null}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

function CursorProtocolScheduler({ item, prefersReducedMotion }) {
  const [activeDay, setActiveDay] = useState(1);
  const [saved, setSaved] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(!prefersReducedMotion);
  const [cursorStyle, setCursorStyle] = useState({ x: 20, y: 20 });
  const [stepIndex, setStepIndex] = useState(0);
  const containerRef = useRef(null);
  const saveButtonRef = useRef(null);
  const dayRefs = useRef([]);
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveDay(1);
      setSaved(true);
      setCursorVisible(false);
      return undefined;
    }

    const slotByDay = { M: 1, W: 3, F: 5 };
    const timeouts = [];

    const moveCursorToElement = (element) => {
      if (!containerRef.current || !element) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      setCursorStyle({
        x: elementRect.left - containerRect.left + elementRect.width / 2,
        y: elementRect.top - containerRect.top + elementRect.height / 2,
      });
      setCursorVisible(true);
    };

    const currentStep = item.scheduleSteps[stepIndex];
    const dayIndex = slotByDay[currentStep.day];
    const dayElement = dayRefs.current[dayIndex];

    setSaved(false);
    setPressed(false);
    setActiveDay(null);
    moveCursorToElement(dayElement);

    timeouts.push(window.setTimeout(() => setPressed(true), 650));
    timeouts.push(
      window.setTimeout(() => {
        setPressed(false);
        setActiveDay(dayIndex);
      }, 980),
    );
    timeouts.push(window.setTimeout(() => moveCursorToElement(saveButtonRef.current), 1650));
    timeouts.push(window.setTimeout(() => setSaved(true), 2100));
    timeouts.push(window.setTimeout(() => setCursorVisible(false), 2700));
    timeouts.push(
      window.setTimeout(() => {
        setStepIndex((value) => (value + 1) % item.scheduleSteps.length);
      }, 3200),
    );

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, [item.scheduleSteps, prefersReducedMotion, stepIndex]);

  const currentLabel = item.scheduleSteps[stepIndex]?.label ?? item.scheduleSteps[0].label;

  return (
    <article className="feature-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="feature-card__label">Cursor Protocol Scheduler</p>
          <h3 className="feature-card__title">{item.title}</h3>
        </div>
        <span className="feature-card__icon">
          <CalendarDays size={16} />
        </span>
      </div>

      <p className="feature-card__description">{item.descriptor}</p>

      <div className="mt-8 flex flex-1">
        <div
          ref={containerRef}
          className="relative flex h-full min-h-[21rem] w-full flex-col overflow-hidden rounded-[1.75rem] border border-moss/10 bg-gradient-to-br from-white to-mist p-5 shadow-soft"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-moss/60">
                Weekly rhythm
              </p>
              <p className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-charcoal">
                {currentLabel}
              </p>
            </div>
            <div
              className={`rounded-full px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] transition ${
                saved ? 'bg-moss text-cream' : 'bg-white/70 text-moss/60'
              }`}
            >
              {saved ? 'saved' : 'pending'}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2">
            {dayLabels.map((day, index) => (
              <button
                key={`${day}-${index}`}
                type="button"
                ref={(element) => {
                  dayRefs.current[index] = element;
                }}
                className={`rounded-2xl border px-0 py-4 text-center font-mono text-sm transition ${
                  activeDay === index
                    ? 'scale-[0.95] border-clay bg-clay text-cream'
                    : 'border-moss/10 bg-white/70 text-charcoal/70'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <button
            ref={saveButtonRef}
            type="button"
            className={`mt-6 w-full rounded-full border px-4 py-3 font-semibold tracking-[0.08em] transition ${
              saved
                ? 'border-moss bg-moss text-cream'
                : 'border-moss/10 bg-white/70 text-charcoal'
            }`}
          >
            Save protocol
          </button>

          <div className="mt-auto pt-4 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-moss/60">
            Scheduler labels derived from practical execution cadence.
          </div>

          {cursorVisible ? (
            <div
              className="pointer-events-none absolute transition-[transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                transform: `translate(${cursorStyle.x - 14}px, ${cursorStyle.y - 18}px) scale(${pressed ? 0.95 : 1})`,
              }}
            >
              <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L22 18H13L17 30L12 31L8 20L2 24L4 2Z" fill="#1A1A1A" />
                <path d="M4 2L22 18H13L17 30L12 31L8 20L2 24L4 2Z" stroke="#F2F0E9" strokeWidth="1.4" />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ValuePropsSection({ content, items, prefersReducedMotion }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-value-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-value-reveal]', {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 76%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id={content.id} ref={sectionRef} className="px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div data-value-reveal>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="mt-12 grid gap-6 xl:auto-rows-fr xl:grid-cols-3">
          <div data-value-reveal className="h-full">
            <DiagnosticShuffler item={items[0]} prefersReducedMotion={prefersReducedMotion} />
          </div>
          <div data-value-reveal className="h-full">
            <TelemetryTypewriter item={items[1]} prefersReducedMotion={prefersReducedMotion} />
          </div>
          <div data-value-reveal className="h-full">
            <CursorProtocolScheduler item={items[2]} prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuePropsSection;
