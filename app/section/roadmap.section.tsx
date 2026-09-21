"use client";

import {
  HiOutlinePuzzlePiece,
  HiOutlineBookOpen,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentCheck,
  HiOutlineMap,
  HiOutlinePresentationChartLine,
  HiOutlineArrowPath,
} from "react-icons/hi2";

/* =========================================================
   DATA
========================================================= */

const roadmap = [
  {
    stage: "GIAI ĐOẠN 3-5 TUỔI",
    title: "Làm Quen & Tạo Phản Xạ",
    desc: "Làm quen tiếng Anh tự nhiên, tăng phản xạ nghe - nói và hứng thú học.",
    icon: HiOutlinePuzzlePiece,
    number: "01",
  },
  {
    stage: "GIAI ĐOẠN TIỂU HỌC",
    title: "Xây Nền Tảng",
    desc: "Phát triển từ vựng, phát âm, giao tiếp và kỹ năng học tiếng Anh.",
    icon: HiOutlineBookOpen,
    number: "02",
  },
  {
    stage: "GIAI ĐOẠN THCS",
    title: "Phát Triển Toàn Diện",
    desc: "Củng cố ngữ pháp, phát triển kỹ năng và hướng tới chuẩn đầu ra cao hơn.",
    icon: HiOutlineAcademicCap,
    number: "03",
  },
];

const process = [
  {
    title: "Đánh giá đầu vào",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "Xếp lộ trình",
    icon: HiOutlineMap,
  },
  {
    title: "Theo dõi tiến bộ",
    icon: HiOutlinePresentationChartLine,
  },
  {
    title: "Điều chỉnh khi cần",
    icon: HiOutlineArrowPath,
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="
        w-full
        overflow-hidden
        bg-[#F8F9FC]
        py-8
        md:py-16
      "
    >
      <div className="container mx-auto md:px-6">
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mx-auto
            mb-10
            max-w-[850px]
            text-center
            md:mb-14
          "
        >
          <span
            className="
              mb-1
              inline-block
              text-[12px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#F26922]
              md:text-[13px]
            "
          >
            Lộ trình học tập
          </span>

   <h2
  className="
    text-[26px]
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
  Lộ trình tiếng Anh xuyên suốt{" "}
  <span className="text-[#F26922] sm:block">
    từ 3 tuổi đến lớp 9
  </span>
</h2>

          <p
            className="
              mx-auto
              mt-1
              max-w-[650px]
              text-[14px]
              leading-[1.7]
              text-[#697086]
              md:text-[15px]
            "
          >
            Mỗi giai đoạn được xây dựng theo độ tuổi, năng lực và mục tiêu
            phát triển phù hợp của học viên.
          </p>
        </div>

        {/* =================================================
            DESKTOP ROADMAP
        ================================================= */}

        <div className="relative hidden md:block">
          {/* CONNECT LINE */}

          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[46px]
              h-[2px]
              bg-[#DDE2EA]
            "
          />

          <div className="relative grid grid-cols-3 gap-5 lg:gap-7">
            {roadmap.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  {/* TIMELINE POINT */}

                  <div
                    className="
                      relative
                      z-10
                      mb-6
                      flex
                      h-[92px]
                      w-[92px]
                      items-center
                      justify-center
                      rounded-full
                      border-[6px]
                      border-[#F8F9FC]
                      bg-[#142249]
                      text-white
                      shadow-[0_8px_25px_rgba(20,34,73,0.16)]
                      transition-all
                      duration-300

                      group-hover:bg-[#F26922]
                      group-hover:scale-105
                    "
                  >
                    <Icon className="text-[34px]" />

                    <span
                      className="
                        absolute
                        -right-2
                        -top-2
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F26922]
                        text-[10px]
                        font-bold
                        text-white
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* CARD */}

                  <article
                    className="
                      flex
                      min-h-[]
                      w-full
                      flex-col
                      items-center
                      rounded-[22px]
                      border
                      border-[#142249]/[0.08]
                      bg-white
                      px-6
                      py-7
                      shadow-[0_8px_30px_rgba(20,34,73,0.05)]
                      transition-all
                      duration-300

                      group-hover:-translate-y-1
                      group-hover:shadow-[0_14px_40px_rgba(20,34,73,0.10)]
                    "
                  >
                    <span
                      className="
                        mb-3
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#F26922]
                        lg:text-[12px]
                      "
                    >
                      {item.stage}
                    </span>

                    <h3
                      className="
                        text-[20px]
                        font-bold
                        leading-[1.35]
                        text-[#142249]
                        lg:text-[22px]
                        capitalize
                      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                        my-4
                        h-[3px]
                        w-8
                        rounded-full
                        bg-[#F26922]
                      "
                    />

                    <p
                      className="
                        max-w-[330px]
                        text-[14px]
                        leading-[1.65]
                        text-[#697086]
                      "
                    >
                      {item.desc}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MOBILE ROADMAP
        ================================================= */}

        <div className="relative md:hidden">
          {/* VERTICAL LINE */}

          <div
            className="
              absolute
              bottom-[35px]
              left-[25px]
              top-[30px]
              w-[2px]
              bg-[#DDE2EA]
            "
          />

          <div className="flex flex-col gap-5">
            {roadmap.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    relative
                    flex
                    items-stretch
                    gap-4
                  "
                >
                  {/* MOBILE POINT */}

                  <div
                    className="
                      relative
                      z-10
                      mt-5
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-[5px]
                      border-[#F8F9FC]
                      bg-[#142249]
                      text-white
                    "
                  >
                    <Icon className="text-[21px]" />
                  </div>

                  {/* MOBILE CARD */}

                  <article
                    className="
                      w-full
                      rounded-[18px]
                      border
                      border-[#142249]/[0.08]
                      bg-white
                      px-5
                      py-5
                      shadow-[0_6px_22px_rgba(20,34,73,0.05)]
                    "
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.06em]
                          text-[#F26922]
                        "
                      >
                        {item.stage}
                      </span>

                      <span
                        className="
                          text-[12px]
                          font-bold
                          text-[#142249]/30
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    <h3
                      className="
                        text-[19px]
                        font-bold
                        leading-[1.35]
                        text-[#142249]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[14px]
                        leading-[1.6]
                        text-[#697086]
                      "
                    >
                      {item.desc}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            PROCESS
        ================================================= */}

        {/* <div
          className="
            mt-10
            rounded-[22px]
            bg-[#142249]
            px-5
            py-6

            md:mt-14
            md:px-8
            md:py-7

            lg:px-10
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-x-3
              gap-y-5

              md:grid-cols-4
              md:gap-0
            "
          >
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-2
                    text-center

                    md:px-5
                  "
                >

                  {index !== process.length - 1 && (
                    <div
                      className="
                        absolute
                        right-0
                        top-1/2
                        hidden
                        h-10
                        w-[1px]
                        -translate-y-1/2
                        bg-white/15

                        md:block
                      "
                    />
                  )}

                  <div
                    className="
                      mb-2.5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F26922]
                      text-white
                    "
                  >
                    <Icon className="text-[20px]" />
                  </div>

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      leading-[1.4]
                      tracking-[0.04em]
                      text-white

                      sm:text-[12px]
                      lg:text-[13px]
                    "
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
