"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

/* =========================================================
   DATA
========================================================= */

const teachers = [
  {
    name: "Ms. Nhi Trương",
    region: "Academic Director",
    desc: [
      "Thạc sĩ Giáo dục - Đại học Glasgow, UK",
      "English Proficiency Level: CEFR C1",
    ],
    img: "/Profile-Picture-15-x-20-cm-1.png",
  },
  {
    name: "Ms. Tú Quỳnh",
    region: "Head Teacher",
    desc: [
      "Thạc sĩ Giáo dục - Arizona State University, USA",
      "Thủ khoa ngành Ngôn ngữ Anh 2021 - ĐH Sư Phạm TP.HCM",
      "CEFR C1 - IELTS 8.0",
    ],
    img: "/Profile-Picture-15-x-20-cm-2.png",
  },
  {
    name: "Ms. Bảo Châu",
    region: "Teacher",
    desc: [
      "Cử nhân Sư phạm Anh - ĐH Sư Phạm",
      "CEFR C1 - IELTS 7.5",
      "Reading 8.5",
    ],
    img: "/Profile-Picture-15-x-20-cm-4.png",
  },
  {
    name: "Nguyễn Khánh Linh",
    region: "Teacher",
    desc: [
      "Cử nhân Đại học Ngoại Thương TP.HCM",
      "IELTS 7.5",
      "Reading 8.5",
    ],
    img: "/Screen-Shot-2026-01-20-at-10.38.48.png",
  },
  {
    name: "Mr. Hoàng Quân",
    region: "Teacher",
    desc: [
      "Cử nhân Biên Phiên Dịch - Đại học RMIT",
      "IELTS 8.0",
    ],
    img: "/Screen-Shot-2026-01-20-at-15.30.09.png",
  },
];

/* =========================================================
   CARD
========================================================= */

function TeacherCard({
  teacher,
}: {
  teacher: (typeof teachers)[number];
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[#142249]/10
        bg-white
        shadow-[0_8px_30px_rgba(20,34,73,0.06)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_14px_40px_rgba(20,34,73,0.10)]
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          h-[260px]
          shrink-0
          overflow-hidden
          bg-[#F3F5F8]

          sm:h-[280px]
          lg:h-[300px]
        "
      >
        <img
          // src={teacher.img}
          src="./dangcapnhan.png"
          alt={teacher.name}
          className="
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-500

            group-hover:scale-[1.03]
          "
        />

        {/* OVERLAY */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#142249]/65
            via-[#142249]/5
            to-transparent
          "
        />

        {/* ROLE */}
        <div className="absolute bottom-4 left-4 right-4">
          <span
            className="
              inline-flex
              max-w-full
              items-center
              gap-1.5
              rounded-full
              bg-[#F26922]
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.04em]
              text-white
            "
          >
            <HiOutlineAcademicCap className="shrink-0 text-[14px]" />
            <span className="truncate">{teacher.region}</span>
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="
            break-words
            text-[19px]
            font-bold
            leading-[1.35]
            text-[#142249]
          "
        >
          {teacher.name}
        </h3>

        <div className="my-3 h-[3px] w-8 rounded-full bg-[#F26922]" />

        <ul className="space-y-2.5">
          {teacher.desc.map((item, index) => (
            <li
              key={index}
              className="
                flex
                min-w-0
                items-start
                gap-2.5
                text-[13px]
                leading-[1.6]
                text-[#697086]
              "
            >
              <span
                className="
                  mt-[7px]
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-[#F26922]
                "
              />

              <span className="min-w-0 break-words">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* =========================================================
   SECTION
========================================================= */

export default function TeamSection() {
  return (
    <section
      id="teachers"
      className="
        w-full
        scroll-mt-24
        overflow-hidden
        bg-[#F8F9FC]
        py-12

        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          container
          mx-auto
          min-w-0
          overflow-hidden

          md:px-6
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-4
            flex
            flex-col
            gap-2

            md:mb-8
            md:flex-row
            md:items-end
            md:justify-between

          "
        >
          <div className="min-w-0 max-w-[760px] text-center sm:text-left ">
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
              Đội ngũ giáo viên
            </span>

          <h2
  className="
    text-[26px]
    font-bold
    leading-[1.25]
    tracking-[-0.6px]
    text-[#142249]
    sm:text-[30px]
    capitalize
    md:text-[34px]
  "
>
  Đồng hành cùng con là
  <span className="block text-[#F26922]">
    đội ngũ giáo viên tâm huyết
  </span>
</h2>

            <p
              className="
                mt-1
                sm:max-w-[750px]
                text-[14px]
                leading-[1.7]
                text-[#697086]

                md:text-[15px]
                
              "
            >
              Đội ngũ giáo viên có chuyên môn, kinh nghiệm và luôn theo sát
              quá trình học tập của từng học viên.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex shrink-0 items-center gap-3 justify-center">
            <button
              type="button"
              aria-label="Giáo viên trước"
              className="
                teacher-prev
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-[#142249]/20
                text-[#142249]
                transition-all
                duration-200

                hover:border-[#142249]
                hover:bg-[#142249]
                hover:text-white
              "
            >
              <GrFormPrevious className="text-[24px]" />
            </button>

            <button
              type="button"
              aria-label="Giáo viên tiếp theo"
              className="
                teacher-next
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-[#F26922]/30
                text-[#F26922]
                transition-all
                duration-200

                hover:border-[#F26922]
                hover:bg-[#F26922]
                hover:text-white
              "
            >
              <MdOutlineNavigateNext className="text-[24px]" />
            </button>
          </div>
        </div>

        {/* =================================================
            SWIPER WRAPPER
        ================================================= */}

        <div className="w-full min-w-0 overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            watchOverflow={true}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".teacher-prev",
              nextEl: ".teacher-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = ".teacher-prev";

              // @ts-ignore
              swiper.params.navigation.nextEl = ".teacher-next";
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
              !pb-12

              [&_.swiper-wrapper]:!items-stretch

              [&_.swiper-slide]:!h-auto
              [&_.swiper-slide]:!min-w-0
              [&_.swiper-slide]:!max-w-full

              [&_.swiper-pagination-bullet]:!h-[7px]
              [&_.swiper-pagination-bullet]:!w-[7px]
              [&_.swiper-pagination-bullet]:!bg-[#142249]
              [&_.swiper-pagination-bullet]:!opacity-20

              [&_.swiper-pagination-bullet-active]:!w-[22px]
              [&_.swiper-pagination-bullet-active]:!rounded-full
              [&_.swiper-pagination-bullet-active]:!bg-[#F26922]
              [&_.swiper-pagination-bullet-active]:!opacity-100
            "
          >
            {teachers.map((teacher, index) => (
              <SwiperSlide
                key={`${teacher.name}-${index}`}
                className="!h-auto !min-w-0 !max-w-full"
              >
                <TeacherCard teacher={teacher} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}