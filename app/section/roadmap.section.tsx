"use client";

const roadmap = [
  {
    stage: "GIAI ĐOẠN 3-5 TUỔI",
    title: "Làm Quen & Tạo Phản Xạ",
    desc: "Làm quen tiếng Anh tự nhiên, tăng phản xạ nghe - nói và hứng thú học qua phương pháp trực quan.",
    image: "../3.png",
    number: "01",
    tag: "Mầm non",
  },
  {
    stage: "GIAI ĐOẠN TIỂU HỌC",
    title: "Xây Nền Tảng Vững Chắc",
    desc: "Phát triển từ vựng, chuẩn hóa phát âm, giao tiếp tự tin và rèn luyện tư duy ngôn ngữ chủ động.",
    image: "../4.png",
    number: "02",
    tag: "Lớp 1 - Lớp 5",
  },
  {
    stage: "GIAI ĐOẠN THCS",
    title: "Phát Triển Toàn Diện",
    desc: "Củng cố ngữ pháp chuyên sâu, thành thạo 4 kỹ năng và sẵn sàng chinh phục các kỳ thi chuẩn quốc tế.",
    image: "../thcs1.png",
    number: "03",
    tag: "Lớp 6 - Lớp 9",
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full bg-[#F8F9FC] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-[850px] text-center md:mb-14">
          <span className="mb-2 inline-block text-[12px] font-bold uppercase tracking-[0.15em] text-[#F26922] md:text-[13px]">
            Lộ trình học tập
          </span>
          <h2 className="text-[26px] font-bold leading-[1.25] tracking-[-0.6px] text-[#142249] sm:text-[30px] md:text-[36px]">
            Lộ trình tiếng Anh xuyên suốt <span className="text-[#F26922] block sm:inline">từ 3 tuổi đến lớp 9</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[650px] text-[14px] leading-[1.7] text-[#697086] md:text-[15px]">
            Mỗi giai đoạn được thiết kế chuyên biệt theo tâm lý độ tuổi, năng lực tiếp thu và mục tiêu phát triển của từng học viên.
          </p>
        </div>

        {/* 3 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {roadmap.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#142249]/[0.08] bg-white shadow-[0_8px_30px_rgba(20,34,73,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(20,34,73,0.12)]"
            >
              {/* KHUNG ẢNH LỚN BÊN TRÊN */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* LỚP GRADIENT NHẸ ĐỂ NỔI SỐ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* SỐ BƯỚC / STEP BADGE */}
                <span className="absolute top-3.5 left-3.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#142249]/90 font-bold text-white text-xs backdrop-blur-md shadow-md">
                  {item.number}
                </span>

                {/* TAG ĐỘ TUỔI */}
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-[#F26922] px-3 py-1 text-[11px] font-bold text-white shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* NỘI DUNG CHI TIẾT */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#F26922]">
                  {item.stage}
                </span>

                <h3 className="mt-1 text-[20px] font-bold leading-snug text-[#142249] lg:text-[22px]">
                  {item.title}
                </h3>

                <div className="my-3.5 h-[3px] w-8 rounded-full bg-[#F26922]" />

                <p className="text-[14px] leading-[1.65] text-[#697086]">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}