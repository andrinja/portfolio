// src/components/ImageSlider.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type React from "react";

interface Props {
  images: string[];
}

export default function ImageSlider({ images }: Props) {
  const hasMultiple = images && images.length > 1;
  const extendedImages = useMemo(() => {
    if (!hasMultiple) return images ?? [];
    return [images[images.length - 1], ...images, images[0]];
  }, [images, hasMultiple]);

  const [currentIndex, setCurrentIndex] = useState(hasMultiple ? 1 : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Move to a specific logical slide (wrap handled by clones when multiple)
  const goTo = (nextIndex: number) => {
    if (!hasMultiple) return;
    setIsAnimating(true);
    setCurrentIndex(nextIndex);
  };

  const next = () => {
    if (!hasMultiple) return;
    goTo(currentIndex + 1);
  };

  const prev = () => {
    if (!hasMultiple) return;
    goTo(currentIndex - 1);
  };

  // Handle seamless looping using clones
  useEffect(() => {
    if (!hasMultiple) return;
    if (!isAnimating) return;

    const handle = () => {
      setIsAnimating(false);
      if (currentIndex === 0) {
        // Jump to last real slide
        setCurrentIndex(images.length);
      } else if (currentIndex === images.length + 1) {
        // Jump to first real slide
        setCurrentIndex(1);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("transitionend", handle);
    return () => container?.removeEventListener("transitionend", handle);
  }, [currentIndex, hasMultiple, images.length, isAnimating]);

  // Autoplay disabled

  // Drag / swipe gestures via pointer events
  const onPointerDown = (e: React.PointerEvent) => {
    if (!hasMultiple) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startXRef.current;
    deltaXRef.current = delta;
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    const delta = deltaXRef.current;
    setIsDragging(false);
    const threshold = 48; // px
    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    } else {
      // Snap back (trigger any minimal transition for feedback)
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 150);
    }
    deltaXRef.current = 0;
  };

  if (!images || images.length === 0) {
    return null;
  }

  const renderImages = hasMultiple ? extendedImages : images;
  const baseIndex = hasMultiple ? currentIndex : 0;
  const translatePercent = hasMultiple ? -baseIndex * 100 : 0;

  // Add drag offset in pixels, converted to percent of width
  const dragOffsetPercent = (() => {
    if (!isDragging || !containerRef.current) return 0;
    const width = containerRef.current.clientWidth || 1;
    return (deltaXRef.current / width) * 100;
  })();

  // No dots UI, keep internal index only

  return (
    <div className="relative mt-5 select-none">
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-sm"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className={[
            "flex w-full",
            isAnimating && !isDragging
              ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "",
          ].join(" ")}
          style={{
            transform: `translateX(calc(${translatePercent}% + ${dragOffsetPercent}%))`,
          }}
        >
          {renderImages.map((rawSrc, i) => {
            const src = rawSrc.startsWith("/") ? rawSrc : `/${rawSrc}`;
            return (
              <div key={`${src}-${i}`} className="w-full shrink-0">
                <div className="relative h-64 w-full bg-neutral-800 md:h-96">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="group absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur shadow ring-1 ring-white/10 hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              className="h-5 w-5 text-white"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="group absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur shadow ring-1 ring-white/10 hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              className="h-5 w-5 text-white"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
