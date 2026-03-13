function MagneticButton({
  href,
  variant = 'primary',
  children,
  className = '',
  download = false,
  disabled = false,
  external = false,
  onClick,
}) {
  const baseClasses =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.08em] transition duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-px hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay';

  const variants = {
    primary:
      'border-clay bg-clay text-cream shadow-soft hover:border-charcoal/20',
    secondary:
      'border-cream/30 bg-cream/10 text-cream backdrop-blur-sm hover:border-cream/60',
    tertiary:
      'border-moss/20 bg-cream text-charcoal hover:border-moss/30',
    ghost:
      'border-moss/20 bg-white/40 text-charcoal hover:border-moss/30 hover:bg-white/70',
  };

  const overlayVariants = {
    primary: 'bg-charcoal/10',
    secondary: 'bg-cream/10',
    tertiary: 'bg-clay/10',
    ghost: 'bg-clay/10',
  };

  const classes = `${baseClasses} ${variants[variant]} ${disabled ? 'cursor-not-allowed opacity-60 hover:translate-y-0 hover:scale-100' : ''} ${className}`.trim();

  const content = (
    <>
      <span
        className={`absolute inset-0 -translate-x-full transition duration-300 group-hover:translate-x-0 ${overlayVariants[variant]}`}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default MagneticButton;
