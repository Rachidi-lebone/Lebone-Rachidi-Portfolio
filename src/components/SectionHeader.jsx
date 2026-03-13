function SectionHeader({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-moss/70">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
