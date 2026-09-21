"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

/* =========================================================
   DATA
========================================================= */

const programs = [
  {
    title: "Tiếng Anh Mầm Non",
    desc: "Làm quen ngôn ngữ qua hoạt động, hình thành phản xạ nghe – nói.",
    tag: "3 - 5 TUỔI",
    img: "/mam-non.png",
  },
  {
    title: "Tiếng Anh Tiểu Học",
    desc: "Xây nền từ vựng, phát âm, giao tiếp và kỹ năng học tập.",
    tag: "TIỂU HỌC",
    img: "/tieu-hoc.png",
  },
  {
    title: "Tiếng Anh THCS",
    desc: "Củng cố kiến thức, phát triển kỹ năng và định hướng chuẩn đầu ra.",
    tag: "THCS",
    img: "/thcs.png",
  },
  {
    title: "Lộ Trình Cambridge",
    desc: "Học và đánh giá theo lộ trình phù hợp với năng lực thực tế của học viên.",
    tag: "CAMBRIDGE",
    img: "/cam.png",
  },
];

/* =========================================================
   COURSE CARD
========================================================= */

function CourseCard({
  img,
  title,
  desc,
  tag,
}: {
  img: string;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <article
      className="
        group
        h-full
        min-w-0
        cursor-pointer
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          mb-5
          sm:h-[280px]
          overflow-hidden
          rounded-[20px]
          bg-[#F4F5F8]

          sm:h-[300px]
          lg:h-[320px]
        "
      >
        <img
          src={img}
          alt={title}
          className="
            h-full
            w-full
            sm:object-cover
            transition-transform
            duration-500

            group-hover:scale-[1.04]
          "
        />

        {/* OVERLAY */}

        {/* <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#142249]/55
            via-[#142249]/5
            to-transparent
          "
        /> */}

        {/* TAG */}

        {/* <div className="absolute bottom-4 left-4">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#F26922]
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.05em]
              text-white

              md:text-[11px]
            "
          >
            {tag}
          </span>
        </div> */}
      </div>

      {/* CONTENT */}

      <div>
        <h3
          className="
            text-[20px]
            font-bold
            leading-[1.35]
            text-[#142249]

            lg:text-[22px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[14px]
            leading-[1.65]
            text-[#697086]
          "
        >
          {desc}
        </p>

        <a
          href="#consult"
          className="
            mt-4
            inline-flex
            items-center
            gap-1
            text-[13px]
            font-bold
            text-[#F26922]
            transition-all
            duration-200

            hover:gap-2
            hover:text-[#142249]

            md:text-[14px]
          "
        >
          Xem chương trình
          <span>→</span>
        </a>
      </div>
    </article>
  );
}

/* =========================================================
   SECTION
========================================================= */

export default function CourseSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      id="courses"
      className="
        w-full
        overflow-hidden
        bg-white
        py-8

        md:py-16
        
      "
    >
      <div
        className="
          container
          mx-auto
          min-w-0
         

          md:px-4
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mx-auto
            mb-4
            max-w-[820px]
            text-center

            md:mb-12
          "
        >
          <span
            className="
              inline-block
              text-[12px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#F26922]

              md:text-[13px]
            "
          >
            Chương trình học
          </span>
<h2
  className="
    text-[26px]
    font-bold
    leading-[1.25]
    tracking-[-0.6px]
    text-[#142249]
    sm:text-[30px]
    md:text-[34px]
    
    capitalize
  "
>
  Chương trình học phù hợp {" "}
  <span className=" text-[#F26922]">
    Với từng độ tuổi và năng lực
  </span>
</h2>
          <p
            className="
              mx-auto
              mt-1
              text-[14px]
              leading-[1.7]
              text-[#697086]

              md:text-[15px]
            "
          >
            Lựa chọn chương trình phù hợp với độ tuổi, năng lực đầu vào và
            mục tiêu phát triển của từng học viên.
          </p>
        </div>

        {/* =================================================
            SLIDER AREA
        ================================================= */}

     <div
  className="
    relative
    w-full
    min-w-0

    [--image-height:280px]
    sm:[--image-height:300px]
    lg:[--image-height:320px]
  "
>
  {/* PREV BUTTON */}

  <button
    ref={prevRef}
    type="button"
    aria-label="Chương trình trước"
    className="
      absolute
      left-2
      top-[calc(var(--image-height)/2)]
      z-30

      flex
      h-11
      w-11
      -translate-y-1/2
      cursor-pointer
      items-center
      justify-center

      rounded-full
      border
      border-[#142249]/10
      bg-white
      text-[#142249]

      shadow-[0_6px_20px_rgba(20,34,73,0.15)]

      transition-all
      duration-200

      hover:border-[#142249]
      hover:bg-[#142249]
      hover:text-white

      lg:left-3
    "
  >
    <MdNavigateBefore className="text-[27px]" />
  </button>

  {/* NEXT BUTTON */}

  <button
    ref={nextRef}
    type="button"
    aria-label="Chương trình tiếp theo"
    className="
      absolute
      right-2
      top-[calc(var(--image-height)/2)]
      z-30

      flex
      h-11
      w-11
      -translate-y-1/2
      cursor-pointer
      items-center
      justify-center

      rounded-full
      border
      border-[#F26922]/20
      bg-white
      text-[#F26922]

      shadow-[0_6px_20px_rgba(20,34,73,0.15)]

      transition-all
      duration-200

      hover:border-[#F26922]
      hover:bg-[#F26922]
      hover:text-white

      lg:right-3
    "
  >
    <MdNavigateNext className="text-[27px]" />
  </button>

  {/* SWIPER WRAPPER */}

  <div
    className="
      w-full
      min-w-0
      overflow-hidden
    "
  >
    <Swiper
      modules={[Navigation]}
      loop={true}
      slidesPerView={1}
      spaceBetween={16}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (
          typeof swiper.params.navigation !== "boolean" &&
          swiper.params.navigation
        ) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      className="
        !w-full
        !max-w-full
        !overflow-hidden

        [&_.swiper-wrapper]:!items-stretch

        [&_.swiper-slide]:!h-auto
        [&_.swiper-slide]:!min-w-0
        [&_.swiper-slide]:!max-w-full
      "
    >
      {programs.map((program, index) => (
        <SwiperSlide
          key={`${program.title}-${index}`}
          className="
            !h-auto
            !min-w-0
          "
        >
          <CourseCard {...program} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
      </div>
    </section>
  );
}