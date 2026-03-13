import { Activity, ArrowUpRight } from 'lucide-react';

function Footer({ content }) {
  return (
    <footer className="rounded-t-[4rem] bg-charcoal px-4 pb-10 pt-14 text-cream sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-3xl font-semibold tracking-[-0.05em]">
              {content.brand}
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-cream/70">
              {content.tagline}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.24em] text-emerald-300">
              <Activity size={15} />
              System operational
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">
              Navigation
            </p>
            <div className="mt-5 space-y-3">
              {content.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-cream/75 transition hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">
              Connect
            </p>
            <div className="mt-5 space-y-3">
              {content.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between text-sm text-cream/75 transition hover:text-cream"
                >
                  {link.label}
                  <ArrowUpRight size={14} className="transition group-hover:-translate-y-px" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
