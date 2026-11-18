"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaTimes, FaCamera, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface GalleryItem {
  id: number;
  title: string;
  category: "all" | "class" | "activity";
  categoryLabel: string;
  image: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Không gian học tập tại EDU VIỆT",
    category: "class",
    categoryLabel: "Lớp học",
    image: "/4.png",
    description: "Không gian lớp học gần gũi, trang bị màn hình và học liệu trực quan, hỗ trợ học sinh tiếp thu kiến thức hiệu quả.",
  },
  {
    id: 2,
    title: "Tự tin giao tiếp tiếng Anh",
    category: "activity",
    categoryLabel: "Hoạt động",
    image: "/3.png",
    description: "Học sinh luyện nghe và phản xạ nói trực tiếp cùng giáo viên qua các hoạt động tương tác sinh động.",
  },
  {
    id: 3,
    title: "Học tiếng Anh qua hoạt động thực tế",
    category: "class",
    categoryLabel: "Lớp học",
    image: "/11.png",
    description: "Các em tham gia hoạt động học tập, thực hành từ vựng và rèn luyện kỹ năng giao tiếp trong lớp.",
  },
  {
    id: 4,
    title: "Phát triển kỹ năng giao tiếp mỗi ngày",
    category: "class",
    categoryLabel: "Lớp học",
    image: "/13.png",
    description: "Giáo viên hướng dẫn bài học bằng hình ảnh trực quan, giúp học sinh ghi nhớ từ vựng và tự tin phát biểu.",
  },
  {
    id: 5,
    title: "Tiếng Anh qua hoạt động ngoại khóa",
    category: "activity",
    categoryLabel: "Hoạt động",
    image: "/12.png",
    description: "Những hoạt động theo chủ đề mang đến cơ hội giao tiếp, khám phá và sử dụng tiếng Anh trong tình huống gần gũi.",
  },
  {
    id: 6,
    title: "Học tiếng Anh cùng bạn bè",
    category: "class",
    categoryLabel: "Lớp học",
    image: "/lophoc.png",
    description: "Học sinh cùng tham gia bài học, chia sẻ ý kiến và phát triển sự tự tin trong môi trường học tập thân thiện.",
  },
  {
    id: 7,
    title: "Luyện phát âm và phản xạ tiếng Anh",
    category: "activity",
    categoryLabel: "Hoạt động",
    image: "/15.png",
    description: "Giáo viên hướng dẫn học sinh nhận diện từ vựng, luyện phát âm và trả lời câu hỏi bằng tiếng Anh.",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: "all", label: "Tất Cả" },
    { id: "class", label: "Không Gian Lớp Học" },
    { id: "activity", label: "Hoạt Động Trải Nghiệm" },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  const handleNextModal = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrevModal = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAFBFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Thư Viện Hình Ảnh & Hoạt Động
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Ghi lại những khoảnh khắc học tập tràn ngập niềm vui, sự tự tin và trải nghiệm sáng tạo của các em học sinh.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeTab === tab.id
                  ? "bg-[#F26922] text-white shadow-md shadow-[#F26922]/25 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 cursor-pointer flex flex-col ${index === 0 ? "lg:col-span-2 lg:h-[380px]" : "h-[320px] lg:h-[380px]"
                }`}
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/95 transition-all" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-[#F26922] text-white shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40">
                  <FaEye className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold group-hover:text-[#F26922] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />

              {/* Prev / Next controls */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevModal}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#F26922] transition cursor-pointer"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextModal}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#F26922] transition cursor-pointer"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-[#F26922] uppercase tracking-wider">
                  {selectedItem.categoryLabel}
                </span>
                <h4 className="text-base sm:text-lg font-bold">{selectedItem.title}</h4>
                <p className="text-xs text-slate-300 mt-0.5">{selectedItem.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl bg-[#F26922] hover:bg-[#d95818] text-white text-xs font-bold transition self-start sm:self-auto cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
