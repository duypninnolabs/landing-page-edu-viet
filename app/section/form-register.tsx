"use client";

import { FormEvent, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineMap,
  HiOutlineUserGroup,
} from "react-icons/hi2";

/* =========================================================
   DATA
========================================================= */

const benefits = [
  {
    title: "Test đầu vào miễn phí",
    desc: "Đánh giá năng lực tiếng Anh hiện tại của bé.",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "Tư vấn lộ trình phù hợp",
    desc: "Dựa trên độ tuổi, năng lực và mục tiêu học tập.",
    icon: HiOutlineMap,
  },
  {
    title: "Từ 3 tuổi đến lớp 9",
    desc: "Chương trình phù hợp với từng giai đoạn phát triển.",
    icon: HiOutlineUserGroup,
  },
];

const ageOptions = [
  "3 tuổi",
  "4 tuổi",
  "5 tuổi",
  "Lớp 1",
  "Lớp 2",
  "Lớp 3",
  "Lớp 4",
  "Lớp 5",
  "Lớp 6",
  "Lớp 7",
  "Lớp 8",
  "Lớp 9",
];

const needOptions = [
  "Test trình độ tiếng Anh",
  "Tư vấn lộ trình học",
  "Tiếng Anh mầm non",
  "Tiếng Anh tiểu học",
  "Tiếng Anh THCS",
  "Lộ trình Cambridge",
  "Chưa xác định, cần tư vấn",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function RegisterSection() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    age: "",
    area: "",
    need: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /* =======================================================
     CHANGE FIELD
  ======================================================= */

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
    setSuccess(false);
  };

  /* =======================================================
     SUBMIT
     CHƯA GỌI API
  ======================================================= */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!form.parentName.trim()) {
      setError("Vui lòng nhập họ tên phụ huynh.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Vui lòng nhập số điện thoại.");
      return;
    }

    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;

    if (!phoneRegex.test(form.phone.replace(/\s/g, ""))) {
      setError("Số điện thoại chưa đúng định dạng.");
      return;
    }

    if (!form.age) {
      setError("Vui lòng chọn độ tuổi / lớp của bé.");
      return;
    }

    if (!form.area.trim()) {
      setError("Vui lòng nhập khu vực.");
      return;
    }

    if (!form.need) {
      setError("Vui lòng chọn nhu cầu cần tư vấn.");
      return;
    }

    /* =====================================================
       SAU NÀY GẮN API TẠI ĐÂY
    ===================================================== */

    console.log("Form EDU Việt:", form);

    setSuccess(true);

    // Nếu muốn reset form sau khi submit thì mở đoạn này:
    /*
    setForm({
      parentName: "",
      phone: "",
      age: "",
      area: "",
      need: "",
    });
    */
  };

  return (
    <section
      id="consult"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8F9FC]
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
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#142249]/[0.05]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F26922]/[0.07]
          blur-3xl
        "
      />

      <div
        className="
          container

          relative
          z-10
          mx-auto
          sm:px-4        "
      >
        {/* =================================================
            MAIN BOX
        ================================================= */}

        <div
          className="
            grid
            overflow-hidden
            rounded-[26px]
            border
            border-[#142249]/[0.08]
            bg-white
            shadow-[0_20px_70px_rgba(20,34,73,0.09)]

            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              bg-[#142249]
              p-6
              text-white

              sm:p-8
              md:p-10
              lg:p-12
            "
          >
            {/* DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#F26922]/20
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-20
                h-[300px]
                w-[300px]
                rounded-full
                bg-white/[0.05]
                blur-3xl
              "
            />

            <div className="relative z-10">
              {/* LABEL */}

              <span
                className="
                  mb-3
                  inline-flex
                  rounded-full
                  bg-[#F26922]
                  px-3.5
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-white

                  md:text-[10px]
                "
              >
                Test đầu vào miễn phí
              </span>

              {/* TITLE */}

        <h2
  className="
    text-[26px]
    font-bold
    leading-[1.25]
    tracking-[-0.6px]
    sm:text-[30px]
    md:text-[34px]
    capitalize
  "
>
  Khám phá năng lực -{" "}
  <span className="text-[#F26922]">
    xây đúng lộ trình
  </span>{" "}
  cho con
</h2>
              {/* SUB TITLE */}

              <p
                className="
                  mt-2
                  max-w-[560px]
                  text-[14px]
                  leading-[1.75]
                  text-white/75

                  md:text-[16px]
                "
              >
                Đăng ký test tiếng Anh đầu vào miễn phí và nhận tư vấn
                lộ trình phù hợp cùng EDU Việt.
              </p>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div className="mt-8 space-y-3">
                {benefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-[16px]
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-4
                        backdrop-blur-sm
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-[13px]
                          bg-[#F26922]
                          text-white
                        "
                      >
                        <Icon className="text-[22px]" />
                      </div>

                      <div>
                        <h3
                          className="
                            text-[14px]
                            font-bold
                            leading-[1.4]

                            md:text-[16px]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[12px]
                            leading-[1.6]
                            text-white/65

                            md:text-[13px]
                          "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <div
            className="
              p-6

              sm:p-8
              md:p-10
              lg:p-12
            "
          >
            {/* FORM HEADER */}

            <div className="mb-4">
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#F26922]

                  md:text-[12px]
                "
              >
                Đăng ký ngay
              </span>

              <h3
                className="
                  mt-2
                  text-[24px]
                  font-bold
                  leading-[1.3]
                  text-[#142249]

                  md:text-[28px]
                  capitalize
                "
              >
                Nhận test đầu vào miễn phí
              </h3>

              <p
                className="
                  mt-1
                  text-[13px]
                  leading-[1.65]
                  text-[#697086]

                  md:text-[14px]
                "
              >
                Điền thông tin để EDU Việt hỗ trợ tư vấn chương trình phù
                hợp cho bé.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
            >
              {/* PARENT NAME */}

              <Input
                label="Họ tên phụ huynh"
                placeholder="Nhập họ và tên phụ huynh"
                value={form.parentName}
                onChange={(value) =>
                  updateField("parentName", value)
                }
              />

              {/* PHONE */}

              <Input
                label="Số điện thoại"
                placeholder="Ví dụ: 0901 234 567"
                value={form.phone}
                type="tel"
                onChange={(value) =>
                  updateField("phone", value)
                }
              />

              {/* AGE + AREA */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-4

                  sm:grid-cols-2
                "
              >
                <Select
                  label="Độ tuổi / Lớp của bé"
                  placeholder="Chọn độ tuổi / lớp"
                  value={form.age}
                  options={ageOptions}
                  onChange={(value) =>
                    updateField("age", value)
                  }
                />

                <Input
                  label="Khu vực"
                  placeholder="Ví dụ: Thủ Đức, TP.HCM"
                  value={form.area}
                  onChange={(value) =>
                    updateField("area", value)
                  }
                />
              </div>

              {/* NEED */}

              <Select
                label="Nhu cầu cần tư vấn"
                placeholder="Chọn nhu cầu"
                value={form.need}
                options={needOptions}
                onChange={(value) =>
                  updateField("need", value)
                }
              />

              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    text-red-600
                  "
                >
                  {error}
                </div>
              )}

              {/* =================================================
                  SUCCESS
              ================================================= */}

              {success && (
                <div
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-green-200
                    bg-green-50
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    text-green-700
                  "
                >
                  <HiOutlineCheckCircle
                    className="
                      mt-[1px]
                      shrink-0
                      text-[20px]
                    "
                  />

                  <span>
                    Đăng ký thành công. EDU Việt sẽ liên hệ để xác nhận
                    lịch test và tư vấn chương trình phù hợp.
                  </span>
                </div>
              )}

              {/* =================================================
                  BUTTON
              ================================================= */}

              <button
                type="submit"
                className="
                  mt-2
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F26922]
                  px-6
                  py-4
                  text-center
                  text-[13px]
                  font-bold
                  uppercase
                  text-white
                  shadow-[0_12px_30px_rgba(242,105,34,0.22)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#142249]

                  md:text-[14px]
                "
              >
                NHẬN TEST ĐẦU VÀO MIỄN PHÍ
              </button>
            </form>

            {/* =================================================
                FINAL NOTE
            ================================================= */}

            <div
              className="
                mt-5
                flex
                items-start
                gap-2.5
                rounded-xl
                bg-[#142249]/[0.04]
                px-4
                py-3
              "
            >
              <HiOutlineCheckCircle
                className="
                  mt-[2px]
                  shrink-0
                  text-[18px]
                  text-[#F26922]
                "
              />

              <p
                className="
                  text-[12px]
                  leading-[1.6]
                  text-[#697086]

                  md:text-[13px]
                "
              >
                EDU Việt sẽ liên hệ để xác nhận lịch test và tư vấn
                chương trình phù hợp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-[13px]
          font-bold
          text-[#142249]
        "
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          h-[52px]
          w-full
          rounded-xl
          border
          border-[#142249]/10
          bg-[#F8F9FC]
          px-4
          text-[14px]
          text-[#142249]
          outline-none
          transition-all
          duration-200

          placeholder:text-[#9A9FAE]

          hover:border-[#142249]/20

          focus:border-[#F26922]
          focus:bg-white
          focus:ring-4
          focus:ring-[#F26922]/10
        "
      />
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function Select({
  label,
  placeholder,
  value,
  options,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-[13px]
          font-bold
          text-[#142249]
        "
      >
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            h-[52px]
            w-full
            appearance-none
            rounded-xl
            border
            border-[#142249]/10
            bg-[#F8F9FC]
            px-4
            pr-11
            text-[14px]
            outline-none
            transition-all
            duration-200

            hover:border-[#142249]/20

            focus:border-[#F26922]
            focus:bg-white
            focus:ring-4
            focus:ring-[#F26922]/10

            ${
              value
                ? "text-[#142249]"
                : "text-[#9A9FAE]"
            }
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-[#142249]"
            >
              {option}
            </option>
          ))}
        </select>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-[#697086]
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </div>
    </div>
  );
}