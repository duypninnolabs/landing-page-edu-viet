"use client";

import React, { useRef, useState } from "react";
import {
  HiUserGroup,
  HiMap,
  HiAcademicCap,
  HiChartBar,
  HiClipboardDocumentCheck,
  HiFlag,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

/* =========================================================
   BRAND COLORS
   Primary:   #142249
   Secondary: #F26922
========================================================= */

/* =========================================================
   DATA VỚI REACT ICONS SOLID CAO CẤP
========================================================= */

const items = [
  {
    number: "01",
    title: "Lớp ít học sinh",
    desc: "Sĩ số giới hạn giúp giáo viên có nhiều thời gian theo sát, sửa lỗi phát âm và hỗ trợ từng bé.",
    icon: HiUserGroup,
  },
  {
    number: "02",
    title: "Lộ trình phù hợp",
    desc: "Xây dựng theo độ tuổi, năng lực tiếp thu đầu vào và mục tiêu chứng chỉ của từng giai đoạn.",
    icon: HiMap,
  },
  {
    number: "03",
    title: "GV Việt Nam + GV Nước Ngoài",
    desc: "Kết hợp nền tảng kiến thức vững chắc và môi trường giao tiếp phản xạ tự nhiên chuẩn bản xứ.",
    icon: HiAcademicCap,
  },
  {
    number: "04",
    title: "Theo dõi tiến độ",
    desc: "Báo cáo học tập minh bạch gửi về liên tục giúp phụ huynh nắm rõ quá trình học và sự tiến bộ của con.",
    icon: HiChartBar,
  },
  {
    number: "05",
    title: "Đánh giá theo chuẩn",
    desc: "Định hướng kiểm tra và đánh giá năng lực theo chuẩn khảo thí quốc tế Cambridge và CEFR.",
    icon: HiClipboardDocumentCheck,
  },
  {
    number: "06",
    title: "Định hướng đầu ra",
    desc: "Mục tiêu học tập và cam kết kết quả được xác định rõ ràng, đo lường minh bạch theo từng giai đoạn.",
    icon: HiFlag,
  },
];

/* =========================================================
   CARD COMPONENT
========================================================= */

type CardProps = {
  item: (typeof items)[0];
  mobile?: boolean;
};

const Card = ({ item, mobile = false }: CardProps) => {
  const IconComponent = item.icon;

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
        hover:bg-[#FFF9F5]

        ${mobile
          ? `
              min-h-[290px]
              w-full
              shrink-0
              snap-center
              rounded-[22px]
              border
              border-[#142249]/10
              px-6
              py-7
              shadow-[0_8px_30px_rgba(20,34,73,0.06)]
            `
          : `
              min-h-[285px]
              px-8
              py-9
            `
        }
      `}
    >
      {/* KHUNG ICON 3D SOFT GLOW ĐA TẦNG - CỰC ĐẸP & NỔI BẬT */}
      <div className="relative mb-5 flex items-center justify-center">
        {/* Lớp hào quang mờ phía sau */}
        <div className="absolute h-14 w-14 rounded-2xl bg-[#F26922]/15 blur-lg transition-all duration-300 group-hover:scale-125 group-hover:bg-[#F26922]/30" />

        {/* Khung Icon chính viền nổi gradient */}
        <div
          className={`
            relative
            flex
            items-center
            justify-center
            rounded-[20px]
            border border-[#F26922]/20
            bg-gradient-to-br from-[#FFF5F0] to-[#FFE7DC]
            text-[#F26922]
            shadow-[0_8px_20px_rgba(242,105,34,0.12)]
            transition-all
            duration-300

            group-hover:scale-110
            group-hover:rotate-3
            group-hover:bg-gradient-to-br
            group-hover:from-[#F26922]
            group-hover:to-[#D9530D]
            group-hover:text-white
            group-hover:shadow-[0_12px_28px_rgba(242,105,34,0.35)]

            ${mobile ? "h-[62px] w-[62px]" : "h-[70px] w-[70px]"}
          `}
        >
          <IconComponent
            className={`transition-transform duration-300 ${mobile ? "h-7 w-7" : "h-8 w-8"
              }`}
          />
        </div>
      </div>

      {/* TIÊU ĐỀ */}
      <h3
        className={`
          max-w-[320px]
          font-bold
          capitalize
          text-[#142249]
          transition-colors
          duration-300
          group-hover:text-[#F26922]

          ${mobile
            ? `
                text-[18px]
                leading-[1.35]
                tracking-[-0.2px]
              `
            : `
                text-[18px]
                leading-[1.4]
              `
          }
        `}
      >
        {item.title}
      </h3>

      {/* MÔ TẢ */}
      <p
        className={`
          mx-auto
          mt-3
          max-w-[330px]
          text-[#5B6278]

          ${mobile
            ? "text-[13px] leading-[1.6]"
            : "text-[14px] leading-[1.65]"
          }
        `}
      >
        {item.desc}
      </p>
    </article>
  );
};

/* =========================================================
   SECTION CHÍNH
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

    const newIndex = Math.max(0, Math.min(index, items.length - 1));
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

    const cards = Array.from(slider.children) as HTMLElement[];
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(slider.scrollLeft - card.offsetLeft);
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
          container
          mx-auto
          py-8
          md:px-4
          md:py-16
        "
      >
        {/* =================================================
            TIÊU ĐỀ SECTION
        ================================================= */}
        <div
          className="
            mx-auto
            mb-6
            max-w-[760px]
            px-5
            text-center
            md:mb-10
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
            <span className="inline text-[#F26922] sm:block">
              {" "}
              Tại EDU Việt
            </span>
          </h2>
        </div>

        {/* =================================================
            MOBILE SLIDER (< 768PX)
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
                <Card key={index} item={item} mobile />
              ))}
            </div>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="mt-5 flex items-center justify-center gap-3">
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
              <HiChevronLeft className="h-5 w-5" />
            </button>

            <span className="min-w-[52px] text-center text-[13px] font-bold text-[#142249]">
              <span className="text-[#F26922]">{currentIndex + 1}</span>
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
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* =================================================
            TABLET + DESKTOP (GRID CÓ VIỀN NGĂN CÁCH ĐẸP MẮT)
        ================================================= */}
        <div
          className="
            hidden
            overflow-hidden
            rounded-[24px]
            md:grid
            md:grid-cols-2
            md:gap-[1px]
            md:bg-[#EAEFF7]
            lg:grid-cols-3
          "
        >
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}