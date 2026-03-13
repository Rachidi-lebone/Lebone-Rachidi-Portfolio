import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection({ featuredProjects, allProjects, content, prefersReducedMotion }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-project-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-project-reveal]', {
        y: 32,
        opacity: 0,
        duration: 0.95,
        stagger: 0.1,
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
        <div data-project-reveal>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.featuredDescription}
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              data-project-reveal
              className="rounded-[2rem] border border-moss/10 bg-white/75 p-6 shadow-soft backdrop-blur-sm sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-moss/60">
                  Featured 0{index + 1}
                </span>
                <span className="rounded-full border border-moss/10 bg-moss/5 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-moss/60">
                  Featured project
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-charcoal">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-charcoal/70">
                {project.summary}
              </p>

              <div className="mt-8">
                <MagneticButton href={project.href} external variant="ghost">
                  <span className="inline-flex items-center gap-2">
                    View More
                    <ArrowUpRight size={16} />
                  </span>
                </MagneticButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20" data-project-reveal>
          <SectionHeader
            eyebrow="All Projects"
            title="Complete project archive"
            description={content.allProjectsDescription}
          />
        </div>

        <div className="mt-10 space-y-4">
          {allProjects.map((project, index) => (
            <article
              key={project.title}
              data-project-reveal
              className="grid gap-5 rounded-[2rem] border border-moss/10 bg-white/70 p-5 shadow-soft backdrop-blur-sm sm:grid-cols-[80px_minmax(0,1fr)_auto] sm:items-center sm:p-6"
            >
              <div className="font-mono text-sm uppercase tracking-[0.28em] text-moss/50">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-charcoal">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/70 sm:text-base">
                  {project.summary}
                </p>
              </div>
              <div className="sm:justify-self-end">
                <MagneticButton href={project.href} external variant="tertiary">
                  <span className="inline-flex items-center gap-2">
                    View More
                    <ArrowUpRight size={16} />
                  </span>
                </MagneticButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
