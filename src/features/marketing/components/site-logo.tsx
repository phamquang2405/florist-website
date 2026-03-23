export function SiteLogo({
  className = '',
  href
}: {
  className?: string;
  href: string;
}) {
  return (
    <a href={href} className={`flex items-center gap-2 ${className}`}>
      <span className="flex size-10 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-200">
        <span className="font-heading text-xl">B</span>
      </span>
      <span className="font-heading text-2xl font-bold tracking-tight text-slate-900">Bloom</span>
    </a>
  );
}
