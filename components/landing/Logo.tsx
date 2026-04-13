import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center ${className}`}
      aria-label="Satrn — Home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={997}
        height={330}
        priority
        unoptimized
        className="block h-8 w-auto shrink-0 sm:h-9 md:h-10"
      />
    </Link>
  );
}
