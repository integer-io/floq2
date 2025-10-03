import { FC } from "react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  actionText?: string;
  onAction?: () => void;
  bgImage?: string;
  overlay?: boolean;
}

const PageBanner: FC<PageBannerProps> = ({
  title,
  subtitle,
  actionText,
  onAction,
  bgImage,
  overlay = true,
}) => {
  const bgStyle = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <section
      className="relative py-[4rem] px-[1rem]"
      style={bgStyle}
    >
      {/* Overlay */}
      {overlay && bgImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/80 via-orange-500/70 to-orange-400/60" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full mb-[1.5rem] shadow-lg">
          <div className="w-[2rem] h-[2rem] bg-white rounded-full flex items-center justify-center">
            <div className="w-[1rem] h-[1rem] bg-orange-500 rounded-full"></div>
          </div>
          <span className="font-bold text-[1.125rem]">2 YEARS WARRANTY ON ALL PRODUCTS</span>
        </div>

        <h1 className={`text-[2.5rem] md:text-[3.5rem] font-bold mb-[1.5rem] ${bgImage ? 'text-white drop-shadow-lg' : 'text-gray-800'}`}>
          {title}
        </h1>

        <p className={`text-[1.25rem] ${bgImage ? 'text-white drop-shadow-md' : 'text-gray-600'} max-w-[48rem] mx-auto mb-[2rem]`}>
          {subtitle}
        </p>

        {actionText && onAction && (
          <button
            onClick={onAction}
            className="bg-orange-500 hover:bg-orange-600 text-white px-[2rem] py-[0.75rem] rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {actionText}
          </button>
        )}
      </div>
    </section>
  );
};

export default PageBanner;