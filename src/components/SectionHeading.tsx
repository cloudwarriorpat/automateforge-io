interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ badge, title, subtitle, align = 'center', className = '' }: Props) {
  const centered = align === 'center';

  return (
    <div className={`mb-14 reveal ${centered ? 'text-center' : 'text-left'} ${className}`.trim()}>
      {badge && (
        <span className="pill-badge mb-4">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl font-bold text-steel-50 md:text-4xl ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      <div
        className={`mt-4 h-[2px] w-20 bg-gradient-to-r from-brand-400 via-brand-500 to-spark-400 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className={`mt-5 text-lg text-steel-300 ${centered ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
