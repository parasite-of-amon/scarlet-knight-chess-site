import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export const GalleryCarousel = ({
  images,
  autoPlay = true,
  interval = 4000
}: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, images.length, interval]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-secondary/20 rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground text-sm">No images available</span>
      </div>
    );
  }

  const goToPrevious = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-full h-[500px] group rounded-lg overflow-hidden shadow-xl">
      <img
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-10 h-10"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </Button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? "bg-white w-8 h-3"
                    : "bg-white/60 hover:bg-white/80 w-3 h-3"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};
