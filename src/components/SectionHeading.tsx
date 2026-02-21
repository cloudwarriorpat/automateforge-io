interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-steel-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
