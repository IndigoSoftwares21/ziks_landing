import Image from "next/image";

type ZiksLogoProps = {
  /** Height of the mark in px; the wordmark scales with it. */
  size?: number;
  preload?: boolean;
  className?: string;
};

/**
 * Ziks lockup: the folded-"Z" app-icon mark plus the "Ziks" wordmark.
 * Mirrors the mobile app (ZiksLogo widget + medium-weight brand text).
 */
const ZiksLogo = ({ size = 32, preload, className = "" }: ZiksLogoProps) => (
  <span
    className={`flex items-center text-white ${className}`}
    style={{ gap: size * 0.3 }}
  >
    {/* Faint ring keeps the maroon tile visible on the maroon hero/footer */}
    <Image
      alt=""
      className="rounded-[22.5%] ring-1 ring-white/30"
      height={size}
      preload={preload}
      src="/images/brand/ziks-mark.svg"
      width={size}
    />
    <span
      className="font-medium leading-none tracking-[-0.02em]"
      style={{ fontSize: size * 0.75 }}
    >
      Ziks
    </span>
  </span>
);

export default ZiksLogo;
