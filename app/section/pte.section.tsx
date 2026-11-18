"use client";

import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineLanguage,
} from "react-icons/hi2";

const features = [
  {
    title: "Tương tác nhiều hơn",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    title: "Được sửa lỗi trực tiếp",
    icon: HiOutlineCheckCircle,
  },
  {
    title: "Giáo viên dễ theo sát",
    icon: HiOutlineEye,
  },
  {
    title: "Tăng cơ hội sử dụng tiếng Anh",
    icon: HiOutlineLanguage,
  },
];

export default function PteBanner() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="methodology"
      className="relative overflow-hidden bg-[#F8F9FC] py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto md:px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center lg:pr-5 text-center sm:text-left m-auto">
            {/* LABEL */}
            <span className="mb-1 sm:inline-block w-fit text-[12px] m-auto sm:m-0 text-center sm:text-left font-bold uppercase tracking-[0.14em] text-[#F26922] md:text-[13px]">
              Điểm khác biệt trong lớp học
            </span>

            {/* TITLE */}
            <h2 className="text-[26px] mt-2 font-bold leading-[1.25] tracking-[-0.6px] text-[#142249] capitalize sm:text-[30px] md:text-[34px]">
              Lớp học ít học sinh{" "}
              <span className="text-[#F26922]">
                tăng tương tác cho từng bé
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-1 max-w-[620px] text-[14px] leading-[1.75] text-[#697086] md:text-[15px]">
              Thay vì chỉ nghe giảng, học viên được tham gia, thực hành và nhận
              phản hồi trực tiếp trong quá trình học.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[16px]
                      border
                      border-[#142249]/[0.08]
                      bg-[#F8F9FC]
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:border-[#F26922]/30
                      hover:bg-[#FFF8F4]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F26922]/10
                        text-[#F26922]
                        transition-all
                        duration-300
                        group-hover:bg-[#F26922]
                        group-hover:text-white
                      "
                    >
                      <Icon className="text-[20px]" />
                    </div>

                    <span className="text-[13px] font-bold leading-[1.4] text-[#142249] md:text-[14px]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ================= CTA ================= */}
            <button
              type="button"
              onClick={() => scrollToSection("consult")}
              className="
                mt-7
                inline-flex
                w-full
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                bg-[#F26922]
                px-6
                py-4
                text-[13px]
                font-bold
                uppercase
                text-white
                shadow-[0_12px_30px_rgba(242,105,34,0.2)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#142249]
                sm:w-fit
                md:text-[14px]
              "
            >
              ĐĂNG KÝ HỌC THỬ / TEST MIỄN PHÍ
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-[26px]">




              {/* 
                TABLET + DESKTOP
                >= 640px
              */}
              <img
                src="/1.png"
                alt="Lớp học EDU Việt"
                className="
                  absolute
                  inset-0
                  
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#142249]/65
                  via-transparent
                  to-transparent
                "
              />

              {/* ================= IMAGE CONTENT ================= */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7">
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
                    tracking-[0.06em]
                    text-white
                    md:text-[11px]
                  "
                >
                  Lớp học tương tác
                </span>

                <p
                  className="
                    mt-3
                    max-w-[500px]
                    text-[20px]
                    font-bold
                    leading-[1.4]
                    text-white
                    md:text-[26px]
                  "
                >
                  Mỗi học viên đều có cơ hội được quan sát, hướng dẫn và phản
                  hồi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}