import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

/* =========================================================
   DATA
========================================================= */

const SOCIALS = [
  {
    icon: FaFacebookF,
    link: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    link: "#",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    link: "#",
    label: "LinkedIn",
  },
];

const QUICK_LINKS = [
  {
    name: "Trang chủ",
    href: "#home",
  },
  {
    name: "Lộ trình",
    href: "#roadmap",
  },
  {
    name: "Chương trình học",
    href: "#courses",
  },
  {
    name: "Điểm khác biệt",
    href: "#differences",
  },
  {
    name: "Đội ngũ giáo viên",
    href: "#teachers",
  },
  {
    name: "Feedback & Thành tích",
    href: "#feedback",
  },
  {
    name: "Câu hỏi thường gặp",
    href: "#faq",
  },
];

const POLICIES = [
  {
    name: "Điều khoản sử dụng",
    href: "#",
  },
  {
    name: "Chính sách bảo mật",
    href: "#",
  },
  {
    name: "Chính sách học phí",
    href: "#",
  },
];

const CONTACTS = [
  {
    icon: FaLocationDot,
    text: "Địa chỉ EDU Việt",
  },
  {
    icon: IoCall,
    text: "0982 363 440",
    href: "tel:0982363440",
  },
  {
    icon: MdEmail,
    text: "info@eduviet.vn",
    href: "mailto:info@eduviet.vn",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer
      className="
        w-full
        overflow-hidden
        bg-[#142249]
        text-white
      "
      role="contentinfo"
    >
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          container
          mx-auto
          grid
          grid-cols-1
          gap-10
          px-4
          py-12

          sm:px-6

          md:grid-cols-2
          md:gap-12
          md:py-14

          lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]
          lg:py-16
      "
      >
        {/* =================================================
            BRAND
        ================================================= */}

        <section aria-labelledby="footer-brand">
          {/* LOGO */}

          <a
            href="#home"
            className="inline-flex items-center"
          >
            <img
              src="/logo-trang.png"
              alt="EDU Việt"
              className="
                
                w-[150px]
                object-contain
              "
            />
          </a>


          <p
            className="
         
              max-w-[380px]
              text-[13px]
              leading-[1.7]
              text-white/65

              md:text-[14px]
            "
          >
            Đồng hành cùng học viên xây dựng nền tảng tiếng Anh,
            phát triển năng lực giao tiếp và định hướng lộ trình
            phù hợp theo từng giai đoạn.
          </p>

          {/* SOCIALS */}

          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#F26922]
                  hover:bg-[#F26922]
                "
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </section>

        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <FooterNav
          title="Liên kết nhanh"
          items={QUICK_LINKS}
        />

        {/* =================================================
            POLICIES
        ================================================= */}

        <FooterNav
          title="Chính sách"
          items={POLICIES}
        />

        {/* =================================================
            CONTACT
        ================================================= */}

        <address className="not-italic">
          <h3
            className="
              relative
              mb-6
              text-[15px]
              font-bold
              uppercase
              tracking-[0.04em]
            "
          >
            Liên hệ

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[2px]
                w-8
                rounded-full
                bg-[#F26922]
              "
            />
          </h3>

          <ul className="space-y-4">
            {CONTACTS.map(
              ({ icon: Icon, text, href }, index) => (
                <li
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-[1.6]
                    text-white/65

                    md:text-[14px]
                  "
                >
                  <span
                    className="
                      mt-[2px]
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F26922]/15
                      text-[#F26922]
                    "
                  >
                    <Icon size={15} />
                  </span>

                  {href ? (
                    <a
                      href={href}
                      className="
                        pt-1
                        transition
                        hover:text-[#F26922]
                      "
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="pt-1">
                      {text}
                    </span>
                  )}
                </li>
              )
            )}
          </ul>

          {/* CTA */}

          <a
            href="#consult"
            className="
              mt-6
              inline-flex
              items-center
              justify-center
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
            "
          >
            Đăng ký test đầu vào
          </a>
        </address>
      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div
        className="
          border-t
          border-white/10
        "
      >
        <div
          className="
            container
            mx-auto
            flex
            flex-col
            items-center
            justify-between
            gap-3
            px-4
            py-5

            sm:px-6

            md:flex-row
          "
        >
          <p
            className="
              text-center
              text-[11px]
              leading-[1.6]
              text-white/45

              md:text-left
              md:text-[12px]
            "
          >
            © 2026 EDU Việt. All rights reserved.
          </p>

          <p
            className="
              text-center
              text-[11px]
              text-white/40

              md:text-right
              md:text-[12px]
            "
          >
            Đồng hành cùng con trên hành trình phát triển tiếng Anh.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER NAV
========================================================= */

function FooterNav({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <nav aria-label={title}>
      <h3
        className="
          relative
          mb-6
          text-[15px]
          font-bold
          uppercase
          tracking-[0.04em]
        "
      >
        {title}

        <span
          className="
            absolute
            -bottom-2
            left-0
            h-[2px]
            w-8
            rounded-full
            bg-[#F26922]
          "
        />
      </h3>

      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="
                inline-flex
                text-[13px]
                text-white/60
                transition-all
                duration-200

                hover:translate-x-1
                hover:text-[#F26922]

                md:text-[14px]
              "
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}