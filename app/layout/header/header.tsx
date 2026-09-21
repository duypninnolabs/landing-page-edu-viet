"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  {
    label: "Trang chủ",
    href: "#home",
  },
  {
    label: "Lộ trình",
    href: "#roadmap",
  },
  {
    label: "Chương trình học",
    href: "#courses",
  },
  {
    label: "Điểm khác biệt",
    href: "#differences",
  },
  {
    label: "Đội ngũ giáo viên",
    href: "#teachers",
  },
  {
    label: "Feedback / Thành tích",
    href: "#feedback",
  },
  {
    label: "Câu hỏi thường gặp",
    href: "#faq",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        bg-white/95
        backdrop-blur-md
        shadow-[0_4px_20px_rgba(20,34,73,0.08)]
      "
    >
      {/* =====================================================
          DESKTOP
      ===================================================== */}
      <div
        className="
          hidden
          md:flex
          container
          mx-auto
          items-center
          justify-between
          gap-5
          px-4
          py-3
        "
      >
        {/* LOGO */}
        <Link
          href="#home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/7.k slo tách nền (màu)-01.png"
            alt="SmartKids"
            className="w-[70px] object-contain"
          />
        </Link>

        {/* MENU */}
        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-4
            xl:gap-6
            text-[13px]
            xl:text-sm
            font-semibold
            text-[#142249]
          "
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                whitespace-nowrap
                transition-colors
                duration-200
                hover:text-[#F26922]

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#F26922]
                after:transition-all
                after:duration-200
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#consult"
          className="
            shrink-0
            rounded-full
            bg-[#F26922]
            px-5
            py-3
            text-center
            text-[12px]
            xl:text-[13px]
            font-bold
            uppercase
            tracking-[0.01em]
            text-white
            transition-all
            duration-200

            hover:-translate-y-[1px]
            hover:bg-[#142249]
            hover:shadow-lg
          "
        >
          Đăng ký test đầu vào
          <span className="hidden xl:inline"> miễn phí</span>
        </Link>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}
      <div className="md:hidden">
        {/* MOBILE TOP BAR */}
        <div
          className="
            flex
            h-[68px]
            items-center
            justify-between
            gap-3
            px-4
          "
        >
          {/* MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen(!open)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-[#142249]/[0.06]
              text-2xl
              text-[#142249]
              transition
              hover:bg-[#142249]/10
            "
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* LOGO */}
          <Link
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
             src="/7.k slo tách nền (màu)-01.png"
              alt="SmartKids"
              className="h-15 w-15 object-contain"
            />
          </Link>

          {/* MOBILE CTA */}
          <Link
            href="#consult"
            onClick={closeMenu}
            className="
              shrink-0
              rounded-full
              bg-[#F26922]
              px-3.5
              py-2.5
              text-[11px]
              font-bold
              uppercase
              leading-tight
              text-white
              transition
              hover:bg-[#142249]
            "
          >
            Test đầu vào
          </Link>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`
            overflow-hidden
            border-t
            border-[#142249]/10
            bg-white
            transition-all
            duration-300
            ease-in-out

            ${
              open
                ? "max-h-[600px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col px-4 py-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="
                  border-b
                  border-[#142249]/[0.07]
                  px-2
                  py-3.5
                  text-[15px]
                  font-semibold
                  text-[#142249]
                  transition-colors
                  last:border-b-0
                  hover:text-[#F26922]
                "
              >
                {item.label}
              </Link>
            ))}

            {/* CTA FULL MOBILE */}
            <Link
              href="#consult"
              onClick={closeMenu}
              className="
                mt-4
                flex
                items-center
                justify-center
                rounded-xl
                bg-[#F26922]
                px-5
                py-3.5
                text-center
                text-sm
                font-bold
                uppercase
                text-white
                transition
                hover:bg-[#142249]
              "
            >
              Đăng ký test đầu vào miễn phí
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}