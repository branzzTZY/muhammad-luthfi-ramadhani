import { useState } from 'react';
import { Zap } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 p-6 text-center ${className}`}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-[#1D4ED8]">
          <Zap className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-slate-800">{fallbackTitle}</p>
        {fallbackSubtitle && (
          <p className="mt-1 text-xs text-slate-500">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
