import Image from 'next/image';

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? 'Bloom Flower Shop';

export function SiteLogo({
  className = '',
  href
}: {
  className?: string;
  href: string;
}) {
  return (
    <a href={href} className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt={`${appName} logo`}
        width={80}
        height={80}
        priority
        className="size-20 rounded-full object-cover"
      />
      <span className="font-heading text-2xl font-bold tracking-tight text-slate-900">
        {appName}
      </span>
    </a>
  );
}
