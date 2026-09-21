"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

/* =========================================================
   FEEDBACK
========================================================= */

const feedbacks = [
  {
    name: "Phụ huynh bé Minh Anh",
    role: "Học viên Tiếng Anh Tiểu học",
    content:
      "Sau một thời gian học, con chủ động nói tiếng Anh hơn và không còn ngại khi giao tiếp. Giáo viên cũng thường xuyên cập nhật tiến độ để gia đình dễ theo dõi.",
    avatar: "/feedback-1.jpg",
  },
  {
    name: "Phụ huynh bé Gia Hân",
    role: "Học viên Tiếng Anh Mầm non",
    content:
      "Điều mình thích nhất là lớp không quá đông. Con được giáo viên tương tác nhiều và mỗi buổi học đều khá hào hứng.",
    avatar: "/feedback-2.jpg",
  },
  {
    name: "Phụ huynh bé Hoàng Nam",
    role: "Học viên Tiếng Anh THCS",
    content:
      "Trước khi học, con được test đầu vào và tư vấn lộ trình khá rõ. Gia đình biết con đang ở đâu và cần cải thiện kỹ năng nào.",
    avatar: "/feedback-3.jpg",
  },
  {
    name: "Phụ huynh bé Khánh Linh",
    role: "Lộ trình Cambridge",
    content:
      "Mình đánh giá cao việc giáo viên theo sát từng giai đoạn. Khi con có phần kiến thức chưa chắc, lộ trình được điều chỉnh khá kịp thời.",
    avatar: "/feedback-4.jpg",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FeedbackAchievementSection() {
  return (
    <section
      id="feedback"
      className="w-full overflow-hidden bg-white py-8 md:py-16"
    >
      <div className="container mx-auto sm:px-4 md:px-6">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-4 max-w-[760px] text-center md:mb-8">
          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#F26922]
            mb-2
              md:text-[12px]
            "
          >
            Chia sẻ thực tế
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
            Phụ huynh nói gì {" "}
            <span className=" text-[#F26922]">
              Về EDU Việt?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-[620px]
              text-[14px]
              leading-[1.75]
              text-[#697086]

              md:text-[14px]
            "
          >
            Những chia sẻ thực tế từ phụ huynh trong quá trình đồng hành cùng
            con tại EDU Việt.
          </p>
        </div>

        {/* =================================================
            SLIDER WRAPPER
        ================================================= */}

        <div className="relative">
          {/* PREV */}
          <button
            type="button"
            aria-label="Feedback trước"
            className="
              feedback-prev

              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#142249]/10
              bg-white
              text-[#142249]

              shadow-[0_8px_25px_rgba(20,34,73,0.12)]

              transition-all
              duration-300

              hover:bg-[#142249]
              hover:text-white

              md:flex
            "
          >
            <GrFormPrevious className="text-[25px]" />
          </button>

          {/* NEXT */}
          <button
            type="button"
            aria-label="Feedback tiếp theo"
            className="
              feedback-next

              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#F26922]/15
              bg-white
              text-[#F26922]

              shadow-[0_8px_25px_rgba(20,34,73,0.12)]

              transition-all
              duration-300

              hover:bg-[#F26922]
              hover:text-white

              md:flex
            "
          >
            <MdOutlineNavigateNext className="text-[25px]" />
          </button>

          {/* SLIDER */}
          <div className="w-full min-w-0 overflow-hidden md:px-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".feedback-prev",
                nextEl: ".feedback-next",
              }}
              pagination={{
                clickable: true,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = ".feedback-prev";

                // @ts-ignore
                swiper.params.navigation.nextEl = ".feedback-next";
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1200: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="
                !overflow-hidden
                !pb-12

                [&_.swiper-slide]:!h-auto
                [&_.swiper-slide]:!min-w-0

                [&_.swiper-pagination-bullet]:!h-[7px]
                [&_.swiper-pagination-bullet]:!w-[7px]
                [&_.swiper-pagination-bullet]:!bg-[#142249]
                [&_.swiper-pagination-bullet]:!opacity-20

                [&_.swiper-pagination-bullet-active]:!w-[24px]
                [&_.swiper-pagination-bullet-active]:!rounded-full
                [&_.swiper-pagination-bullet-active]:!bg-[#F26922]
                [&_.swiper-pagination-bullet-active]:!opacity-100
              "
            >
              {feedbacks.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto !min-w-0"
                >
                  <article
                    className="
                      flex
                      h-full
                      min-h-[200px]
                      flex-col
                      rounded-[20px]
                      border
                      border-[#142249]/[0.08]
                      bg-white
                      p-5

                      shadow-[0_8px_30px_rgba(20,34,73,0.05)]

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-[0_14px_35px_rgba(20,34,73,0.08)]

                      md:p-6
                    "
                  >
                    {/* QUOTE */}
                    <div
                      className="
                        mb-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F26922]/10
                        text-[22px]
                        font-bold
                        text-[#F26922]
                      "
                    >
                      “
                    </div>

                    {/* CONTENT */}
                    <p
                      className="
                        flex-1
                        text-[14px]
                        leading-[1.75]
                        text-[#697086]
                      "
                    >
                      {item.content}
                    </p>

                    {/* USER */}
                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        gap-3
                        border-t
                        border-[#142249]/[0.07]
                        pt-4
                      "
                    >
                      <img
                        // src={item.avatar}
                        src="./dangcapnhan.png"
                        alt={item.name}
                        className="
                          h-11
                          w-11
                          shrink-0
                          rounded-full
                          object-cover
                        "
                      />

                      <div className="min-w-0">
                        <h3
                          className="
                            truncate
                            text-[14px]
                            font-bold
                            text-[#142249]
                          "
                        >
                          {item.name}
                        </h3>

                        <p
                          className="
                            mt-0.5
                            text-[12px]
                            text-[#8A90A1]
                          "
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}