"use client";

import { useState } from "react";

type FAQItem = {
  title: string;
  content: string;
};

const faqs: FAQItem[] = [
  {
    title: "Bé chưa từng học tiếng Anh có thể bắt đầu tại EDU Việt không?",
    content:
      "Có. Bé sẽ được đánh giá đầu vào để tư vấn chương trình phù hợp với độ tuổi và năng lực hiện tại.",
  },
  {
    title: "Làm sao biết con phù hợp với lớp nào?",
    content:
      "EDU Việt thực hiện đánh giá đầu vào và dựa trên kết quả để tư vấn lộ trình phù hợp với năng lực của từng bé.",
  },
  {
    title: "Test đầu vào có mất phí không?",
    content:
      "Hiện EDU Việt có chương trình test tiếng Anh đầu vào miễn phí để phụ huynh hiểu rõ năng lực hiện tại của con trước khi lựa chọn chương trình.",
  },
  {
    title: "Bé có được học thử trước khi đăng ký không?",
    content:
      "Chương trình học thử được áp dụng theo chương trình và ưu đãi hiện hành của EDU Việt. Phụ huynh có thể liên hệ để được tư vấn cụ thể.",
  },
  {
    title: "Chương trình có giáo viên nước ngoài không?",
    content:
      "Có. EDU Việt triển khai mô hình kết hợp giáo viên Việt Nam và giáo viên nước ngoài theo từng chương trình phù hợp.",
  },
  {
    title: "Phụ huynh có được cập nhật tiến độ học của con không?",
    content:
      "Có. Quá trình học tập của học viên được theo dõi để phụ huynh nắm được tiến độ và sự phát triển của con.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-white
        py-12
        md:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#142249]/[0.04]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#F26922]/[0.06]
          blur-3xl
        "
      />

      <div className="container relative z-10 mx-auto sm:px-4">
        <div
          className="
            grid
            items-start
            gap-9

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="lg:sticky lg:top-28">
            {/* LABEL */}

            <div
              className="
                mb-2
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#F26922]/10
                px-3.5
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#F26922]
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F26922]
                  text-[10px]
                  text-white
                "
              >
                ?
              </span>

              Câu hỏi thường gặp
            </div>

            {/* TITLE */}

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
              Phụ Huynh Thường Hỏi Gì {" "}
              <span className=" text-[#F26922]">
                Trước Khi Đăng Ký
              </span>
            </h2>

            <p
              className="
                mt-1
                max-w-[520px]
                text-[14px]
                leading-[1.7]
                text-[#697086]

                md:text-[15px]
              "
            >
              Những thông tin phụ huynh thường quan tâm trước khi lựa chọn
              chương trình tiếng Anh phù hợp cho con tại EDU Việt.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-4 grid grid-cols-2 gap-3">
              {/* TEST */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-[#142249]/[0.08]
                  bg-white
                  p-4
                  shadow-[0_8px_25px_rgba(20,34,73,0.04)]
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F26922]/10
                    text-[#F26922]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M12 22a10 10 0 100-20 10 10 0 000 20z"
                    />
                  </svg>
                </div>

                <p
                  className="
                    text-[18px]
                    font-bold
                    leading-tight
                    text-[#142249]

                    md:text-[21px]
                  "
                >
                  Test miễn phí
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#697086]">
                  Đánh giá năng lực đầu vào
                </p>
              </div>

              {/* ROADMAP */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-[#142249]/[0.08]
                  bg-white
                  p-4
                  shadow-[0_8px_25px_rgba(20,34,73,0.04)]
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#142249]/[0.07]
                    text-[#142249]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 17l5-5 4 4 8-9"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 7h5v5"
                    />
                  </svg>
                </div>

                <p
                  className="
                    text-[18px]
                    font-bold
                    leading-tight
                    text-[#142249]

                    md:text-[21px]
                  "
                >
                  Theo sát tiến độ
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#697086]">
                  Cập nhật quá trình học của con
                </p>
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-5
                overflow-hidden
                rounded-[20px]
                bg-[#142249]
                p-5
                text-white

                md:p-6
              "
            >
              <p
                className="
                  text-[17px]
                  font-bold
                  leading-[1.4]

                  md:text-[19px]
                "
              >
                Chưa biết con nên bắt đầu từ đâu?
              </p>

              <p
                className="
                  mt-2
                  text-[13px]
                  leading-[1.6]
                  text-white/70

                  md:text-[14px]
                "
              >
                Đăng ký test đầu vào để EDU Việt tư vấn chương trình phù hợp
                với năng lực hiện tại của bé.
              </p>

              <a
                href="#consult"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#F26922]
                  px-5
                  py-3
                  text-[12px]
                  font-bold
                  uppercase
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:text-[#142249]

                  md:text-[13px]
                "
              >
                Đăng ký test đầu vào miễn phí

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT FAQ
          ================================================= */}

          <div
            className="
              rounded-[24px]
              border
              border-[#142249]/[0.07]
              bg-white
              p-4
              shadow-[0_20px_60px_rgba(20,34,73,0.06)]

              sm:p-6
              lg:p-7
            "
          >
            {/* FAQ HEADER */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                gap-4
                px-1
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#F26922]

                    md:text-[12px]
                  "
                >
                  FAQ
                </p>

                <h3
                  className="
                    mt-1
                    text-[21px]
                    font-bold
                    text-[#142249]

                    md:text-[24px]
                  "
                >
                  Câu hỏi thường gặp
                </h3>
              </div>

              <div
                className="
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-[#142249]/[0.06]
                  text-[#142249]

                  sm:flex
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9a3.772 3.772 0 117.544 0c0 2.514-3.772 2.514-3.772 5M12 18h.01"
                  />

                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>

            {/* =================================================
                ACCORDION
            ================================================= */}

            <div className="space-y-3">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className={`
                      overflow-hidden
                      rounded-[16px]
                      border
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            border-[#F26922]/30
                            bg-[#FFF8F4]
                            shadow-[0_6px_20px_rgba(242,105,34,0.06)]
                          `
                          : `
                            border-[#142249]/[0.09]
                            bg-white
                            hover:border-[#142249]/20
                          `
                      }
                    `}
                  >
                    {/* QUESTION */}

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-4
                        text-left

                        sm:gap-4
                        sm:px-5
                        sm:py-[18px]
                      "
                    >
                      {/* NUMBER */}

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-[10px]
                          text-[11px]
                          font-bold
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "bg-[#F26922] text-white"
                              : "bg-[#142249]/[0.06] text-[#142249]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* QUESTION TEXT */}

                      <span
                        className="
                          flex-1
                          text-[14px]
                          font-bold
                          leading-[1.5]
                          text-[#142249]

                          md:text-[15px]
                        "
                      >
                        {item.title}
                      </span>

                      {/* ARROW */}

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "rotate-180 bg-[#142249] text-white"
                              : "bg-[#142249]/[0.05] text-[#142249]"
                          }
                        `}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* ANSWER */}

                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ease-in-out

                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            border-t
                            border-[#F26922]/10
                            px-4
                            pb-5
                            pt-4

                            sm:ml-[52px]
                            sm:px-5
                          "
                        >
                          <p
                            className="
                              text-[13px]
                              leading-[1.7]
                              text-[#697086]

                              md:text-[14px]
                            "
                          >
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE CTA */}

            <a
              href="#consult"
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#F26922]
                px-5
                py-3.5
                text-center
                text-[12px]
                font-bold
                uppercase
                text-white
                transition
               hover:bg-[#142249]

                lg:hidden
              "
            >
              Đăng ký test đầu vào miễn phí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}