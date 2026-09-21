"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    src: "/images/feedback/feedback-1.jpg",
    alt: "Feedback học viên 1",
  },
  {
    id: 2,
    src: "/images/feedback/feedback-2.jpg",
    alt: "Feedback học viên 2",
  },
  {
    id: 3,
    src: "/images/feedback/feedback-3.jpg",
    alt: "Feedback học viên 3",
  },
  {
    id: 4,
    src: "/images/feedback/feedback-4.jpg",
    alt: "Feedback học viên 4",
  },
  {
    id: 5,
    src: "/images/feedback/feedback-5.jpg",
    alt: "Feedback học viên 5",
  },
  {
    id: 6,
    src: "/images/feedback/feedback-6.jpg",
    alt: "Feedback học viên 6",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(images.length - itemsPerView, 0);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex]);

  const maxIndex = Math.max(images.length - itemsPerView, 0);

  const handlePrevious = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? maxIndex : previous - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((previous) =>
      previous >= maxIndex ? 0 : previous + 1
    );
  };

  return (
    <section className="">
      <div className="mx-auto">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {images.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 px-2"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Hình trước"
            className="absolute left-0 top-1/2 z-10 flex size-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow-md transition hover:bg-orange-500 hover:text-white sm:-translate-x-4"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Hình tiếp theo"
            className="absolute right-0 top-1/2 z-10 flex size-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow-md transition hover:bg-orange-500 hover:text-white sm:translate-x-4"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Chuyển đến vị trí ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-7 bg-orange-500"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}