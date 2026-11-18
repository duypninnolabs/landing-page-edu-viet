"use client";

import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineFlag,
  HiOutlineChartBar,
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const highlights = [
  {
    title: "Đánh giá đầu vào",
    desc: "Xác định năng lực trước khi xếp lớp.",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "Mục tiêu rõ ràng",
    desc: "Xác định mục tiêu theo từng giai đoạn học.",
    icon: HiOutlineFlag,
  },
  {
    title: "Theo dõi tiến bộ",
    desc: "Theo dõi và điều chỉnh lộ trình khi cần.",
    icon: HiOutlineChartBar,
  },
  {
    title: "Định hướng chuẩn",
    desc: "Định hướng phát triển theo Cambridge / CEFR.",
    icon: HiOutlineAcademicCap,
  },
];

export default function LearningOutcomeSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="learning-outcome"
      className="relative overflow-hidden bg-white py-14 md:py-20"
    >
      {/* DECOR */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#F26922]/[0.05] blur-3xl" />

      <div className="container relative z-10 mx-auto md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div className="relative pb-10 lg:pb-12">
            <div className="relative overflow-hidden rounded-[28px] bg-[#F8F9FC]">
              <img
                src="/2.png"
                alt="Học viên EDU Việt"
                className="
                  h-[400px]
                  w-full
                  object-cover
                  sm:h-[480px]
                  lg:h-[540px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#142249]/40 via-transparent to-transparent" />

              {/* TOP LABEL */}
              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 backdrop-blur">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#142249]">
                  EDU Việt
                </span>
              </div>
            </div>

            {/* FLOATING PROGRESS CARD */}
            <div
              className="
                absolute
                bottom-0
                left-4
                right-4
                rounded-[20px]
                border border-[#142249]/[0.08]
                bg-white
                p-5
                shadow-[0_18px_50px_rgba(20,34,73,0.14)]

                sm:left-8
                sm:right-auto
                sm:w-[370px]

                lg:left-8
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#F26922]">
                    Tiến trình học tập
                  </p>

                  <p className="mt-1 text-[17px] font-bold text-[#142249]">
                    Theo dõi theo từng giai đoạn
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#142249] text-white">
                  <HiOutlineChartBar className="text-[22px]" />
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#697086]">
                    Năng lực hiện tại
                  </span>

                  <span className="text-[11px] font-bold text-[#F26922]">
                    68%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#E9ECF2]">
                  <div className="h-full w-[68%] rounded-full bg-[#F26922]" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <span className="mb-1 block text-[12px] text-center sm:text-left font-bold uppercase tracking-[0.14em] text-[#F26922] md:text-[13px]">
              Lộ trình & định hướng
            </span>

            <h2
              className="
               text-[26px]
                text-center sm:text-left
              font-bold
              leading-[1.25]
              tracking-[-0.6px]
              text-[#142249]
    capitalize
              sm:text-[30px]

              md:text-[34px]
              md:leading-[1.25]

         
              "
            >
              Học có lộ trình {" "}
              <span className=" text-[#F26922]">
                đầu ra có định hướng
              </span>
            </h2>

            <p className="mt-1 max-w-[620px] text-center sm:text-left text-[14px] leading-[1.8] text-[#697086] md:text-[16px]">
              EDU Việt xác định mục tiêu học tập theo từng giai đoạn và theo
              dõi tiến bộ dựa trên năng lực thực tế của học viên.
            </p>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="mt-2 flex flex-col">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-b
                      border-[#142249]/10
                      py-5

                      transition-all
                      duration-300

                      hover:pl-2
                    "
                  >
                    {/* NUMBER */}
                    <span className="hidden w-7 shrink-0 text-[12px] font-bold text-[#142249]/25 sm:block">
                      0{index + 1}
                    </span>

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-[15px]
                        bg-[#FFF2EB]
                        text-[#F26922]

                        transition-all
                        duration-300

                        group-hover:bg-[#F26922]
                        group-hover:text-white
                      "
                    >
                      <Icon className="text-[23px]" />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <h3 className="text-[16px] capitalize font-bold text-[#142249] md:text-[17px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[13px] leading-[1.6] text-[#697086] md:text-[14px]">
                        {item.desc}
                      </p>
                    </div>

                    <HiOutlineArrowRight className="hidden text-[20px] text-[#142249]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F26922] sm:block" />
                  </article>
                );
              })}
            </div>

            {/* ================= CTA ================= */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToSection("consult")}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-[14px]
                  bg-[#F26922]
                  px-6
                  py-4
                  text-[13px]
                  font-bold
                  uppercase
                  text-white
                  shadow-[0_12px_30px_rgba(242,105,34,0.22)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#142249]

                  md:text-[14px]
                "
              >
                Nhận tư vấn lộ trình cho con

                <HiOutlineArrowRight className="text-[18px]" />
              </button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}