"use client";

import React, { useRef, useState } from "react";

/* =========================================================
   BRAND COLORS

   Primary:   #142249
   Secondary: #F26922
========================================================= */

/* =========================================================
   DATA
========================================================= */

const items = [
  {
    title: "Lớp ít học sinh",
    desc: "Giáo viên có nhiều thời gian theo sát và hỗ trợ từng bé.",
    icon: "class",
  },
  {
    title: "Lộ trình phù hợp",
    desc: "Xây dựng theo độ tuổi, năng lực đầu vào và mục tiêu từng giai đoạn.",
    icon: "route",
  },
  {
    title: "GV Việt Nam + GV nước ngoài",
    desc: "Kết hợp nền tảng kiến thức vững chắc và môi trường giao tiếp tự nhiên.",
    icon: "teacher",
  },
  {
    title: "Theo dõi tiến độ",
    desc: "Phụ huynh nắm rõ quá trình học và sự tiến bộ của con.",
    icon: "progress",
  },
  {
    title: "Đánh giá theo chuẩn",
    desc: "Định hướng đánh giá năng lực theo Cambridge và CEFR.",
    icon: "assessment",
  },
  {
    title: "Định hướng đầu ra",
    desc: "Mục tiêu học tập được xác định rõ ràng theo từng giai đoạn.",
    icon: "target",
  },
];
/* =========================================================
   ICONS
========================================================= */

const ClassIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="h-[64px] w-[64px] md:h-[72px] md:w-[72px]"
  >
    <circle cx="40" cy="40" r="31" fill="#FDE8DD" />

    <circle
      cx="40"
      cy="28"
      r="9"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M25 60v-6c0-9 7-16 15-16s15 7 15 16v6"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <circle
      cx="20"
      cy="35"
      r="6"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <circle
      cx="60"
      cy="35"
      r="6"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M10 57v-4c0-7 4-12 10-12M70 57v-4c0-7-4-12-10-12"
      stroke="#F26922"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const RouteIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="h-[64px] w-[64px] md:h-[72px] md:w-[72px]"
  >
    <circle cx="40" cy="40" r="31" fill="#FDE8DD" />

    <circle
      cx="21"
      cy="55"
      r="6"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <circle
      cx="59"
      cy="23"
      r="6"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M26 52c8-3 7-11 15-14 7-3 11-1 15-10"
      stroke="#142249"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="5 5"
    />

    <path
      d="m54 18 5 5-5 5"
      stroke="#F26922"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TeacherIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="h-[64px] w-[64px] md:h-[72px] md:w-[72px]"
  >
    <circle cx="40" cy="40" r="31" fill="#FDE8DD" />

    <rect
      x="31"
      y="17"
      width="37"
      height="27"
      rx="3"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M39 25h21M39 32h14"
      stroke="#F26922"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <circle
      cx="23"
      cy="32"
      r="8"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M10 61v-8c0-8 6-14 13-14s13 6 13 14v8"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M35 46l11-8"
      stroke="#F26922"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const ProgressIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="h-[64px] w-[64px] md:h-[72px] md:w-[72px]"
  >
    <circle cx="40" cy="40" r="31" fill="#FDE8DD" />

    <rect
      x="18"
      y="15"
      width="44"
      height="50"
      rx="4"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M27 53V42M40 53V33M53 53V24"
      stroke="#F26922"
      strokeWidth="5"
      strokeLinecap="round"
    />

    <path
      d="M26 25h12"
      stroke="#142249"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const AssessmentIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="h-[64px] w-[64px] md:h-[72px] md:w-[72px]"
  >
    <circle cx="40" cy="40" r="31" fill="#FDE8DD" />

    <rect
      x="22"
      y="17"
      width="36"
      height="48"
      rx="3"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <path
      d="M31 17v-4h18v4"
      stroke="#142249"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="m29 34 4 4 7-8M29 49l4 4 7-8"
      stroke="#F26922"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M44 34h8M44 49h8"
      stroke="#142249"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="h-[64px] w-[64px] md:h-[72px] md:w-[72px]"
  >
    <circle cx="40" cy="40" r="31" fill="#FDE8DD" />

    <circle
      cx="38"
      cy="42"
      r="20"
      fill="white"
      stroke="#142249"
      strokeWidth="2.5"
    />

    <circle
      cx="38"
      cy="42"
      r="11"
      stroke="#F26922"
      strokeWidth="2.5"
    />

    <circle cx="38" cy="42" r="4" fill="#F26922" />

    <path
      d="M41 39 62 18"
      stroke="#142249"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M55 18h7v7"
      stroke="#F26922"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PrevIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="m15 6-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon = ({ type }: { type: string }) => {
  switch (type) {
    case "class":
      return <ClassIcon />;
    case "route":
      return <RouteIcon />;
    case "teacher":
      return <TeacherIcon />;
    case "progress":
      return <ProgressIcon />;
    case "assessment":
      return <AssessmentIcon />;
    case "target":
      return <TargetIcon />;
    default:
      return <ClassIcon />;
  }
};

/* =========================================================
   CARD
========================================================= */

type CardProps = {
  item: {
    title: string;
    desc: string;
    icon: string;
  };
  mobile?: boolean;
};

const Card = ({ item, mobile = false }: CardProps) => {
  return (
    <article
      className={`
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        bg-white
        text-center
        transition-all
        duration-300

        hover:bg-[#FFF8F4]

        ${
          mobile
            ? `
              min-h-[280px]
              w-full
              shrink-0
              snap-center

              rounded-[20px]
              border
              border-[#142249]/10

              px-6
              py-7

              shadow-[0_8px_30px_rgba(20,34,73,0.06)]
            `
            : `
              min-h-[275px]
              px-8
              py-8
            `
        }
      `}
    >
      {/* ICON */}

      <div
        className={`
          flex
          items-center
          justify-center
          transition-transform
          duration-300

          group-hover:-translate-y-1

          ${mobile ? "mb-5 h-[70px]" : "mb-5 h-[78px]"}
        `}
      >
        <Icon type={item.icon} />
      </div>

      {/* TITLE */}

      <h3
        className={`
          max-w-[320px]
          font-bold
          capitalize

          text-[#142249]

          ${
            mobile
              ? `
                text-[18px]
                leading-[1.35]
                tracking-[-0.2px]
              `
              : `
                text-[17px]
                leading-[1.4]
              `
          }
        `}
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className={`
          mx-auto
          mt-3
          max-w-[330px]
          text-[#5B6278]

          ${
            mobile
              ? "text-[13px] leading-[1.6]"
              : "text-[15px] leading-[1.65]"
          }
        `}
      >
        {item.desc}
      </p>
    </article>
  );
};

/* =========================================================
   SECTION
========================================================= */

export default function WhySection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  /* =======================================================
     GO TO SLIDE
  ======================================================= */

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const newIndex = Math.max(
      0,
      Math.min(index, items.length - 1)
    );

    const cards = slider.children;

    const target = cards[newIndex] as HTMLElement;

    if (!target) return;

    slider.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  /* =======================================================
     PREV / NEXT
  ======================================================= */

  const handlePrev = () => {
    goToSlide(currentIndex - 1);
  };

  const handleNext = () => {
    goToSlide(currentIndex + 1);
  };

  /* =======================================================
     DETECT CURRENT SLIDE
  ======================================================= */

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = Array.from(
      slider.children
    ) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        slider.scrollLeft - card.offsetLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  return (
    <section
      id="differences"
      className="
        w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          mx-auto
          container

       

          md:px-4
           py-8
        md:py-16
        "
      >
        {/* =================================================
            SECTION TITLE
        ================================================= */}

        <div
          className="
            mx-auto
            mb-5
            max-w-[760px]
            px-5
            text-center

            md:mb-8
            md:px-0
          "
        >
          <span
            className="
              mb-1
              inline-block
              text-[12px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#F26922]

              md:text-[13px]
            "
          >
            Điểm khác biệt
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
              md:leading-[1.3]

              
            "
          >
            6 Điểm Khác Biệt Trong Mỗi Lớp Học 
            <span className="text-[#F26922] inline sm:block">
              {" "}
              Tại EDU Việt
            </span>
          </h2>
        </div>

        {/* =================================================
            MOBILE < 768PX
        ================================================= */}

        <div className="md:hidden">
          <div className="px-4">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex
                w-full
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                scroll-smooth

                [scrollbar-width:none]
                [-ms-overflow-style:none]

                [&::-webkit-scrollbar]:hidden
              "
            >
              {items.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                  mobile
                />
              ))}
            </div>
          </div>

          {/* MOBILE CONTROLS */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Slide trước"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full
                border
                border-[#142249]

                text-[#142249]

                transition-all
                duration-200

                hover:border-[#F26922]
                hover:bg-[#F26922]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30

                disabled:hover:border-[#142249]
                disabled:hover:bg-transparent
                disabled:hover:text-[#142249]
              "
            >
              <PrevIcon />
            </button>

            <span
              className="
                min-w-[52px]
                text-center
                text-[13px]
                font-bold
                text-[#142249]
              "
            >
              <span className="text-[#F26922]">
                {currentIndex + 1}
              </span>
              {" / "}
              {items.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === items.length - 1}
              aria-label="Slide tiếp theo"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full
                border
                border-[#142249]

                text-[#142249]

                transition-all
                duration-200

                hover:border-[#F26922]
                hover:bg-[#F26922]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30

                disabled:hover:border-[#142249]
                disabled:hover:bg-transparent
                disabled:hover:text-[#142249]
              "
            >
              <NextIcon />
            </button>
          </div>
        </div>

        {/* =================================================
            TABLET + DESKTOP
        ================================================= */}

        <div
          className="
            hidden
            overflow-hidden
            rounded-[24px]

            md:grid
            md:grid-cols-2
            md:gap-[1px]
            md:bg-[#DDE1EA]

            lg:grid-cols-3
          "
        >
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}