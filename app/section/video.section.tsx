"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface VideoItem {
  id: number;
  title: string;
  duration: string;
  poster?: string;
  src: string; // Link Google Drive, Youtube hoặc video mp4
  tag: string;
}

// Hàm lấy thông tin embed và tự động trích xuất thumbnail từ Google Drive hoặc Youtube
function getVideoMedia(item: VideoItem) {
  const url = item.src;

  // 1. Google Drive
  if (url.includes("drive.google.com")) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : "";
    return {
      type: "iframe",
      embedUrl: fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url,
      // Thumbnail tự động từ Google Drive
      thumbnail: item.poster || (fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w800` : "/lophoc.jpg"),
    };
  }

  // 2. Youtube
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
    } else {
      videoId = url.split("v=")[1]?.split("&")[0] || "";
    }
    return {
      type: "iframe",
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      // Thumbnail tự động từ Youtube
      thumbnail: item.poster || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/lophoc.jpg"),
    };
  }

  // 3. File MP4 trực tiếp
  return {
    type: "video",
    embedUrl: url,
    thumbnail: item.poster || "/lophoc.jpg",
  };
}

const videoList: VideoItem[] = [
  {
    id: 1,
    title: "Khám phá không gian học tập chuẩn quốc tế tại EDU Việt",
    duration: "02:45",
    src: "https://drive.google.com/file/d/1QGpIn2O6pRbRjN5h6tW5ib3Nb8tjUkkT/view?usp=sharing",
    tag: "Không gian lớp học",
  },
  {
    id: 2,
    title: "Tiết học tương tác tiếng Anh cùng giáo viên bản ngữ",
    duration: "01:30",
    src: "https://drive.google.com/file/d/1JU3ESwi5wXh72o63qT7X8N9-uZOVLQBj/view?usp=sharing",
    tag: "Tiếng Anh",
  },
  {
    id: 3,
    title: "Trải nghiệm sáng tạo khoa học và dự án thực hành",
    duration: "02:15",
    poster: "../video-4.png",
    src: "https://drive.google.com/file/d/1xXctdxrMx-Ihnf37nd1ztQV_G3Le1mzo/view?usp=sharing",
    tag: "Hoạt động trải nghiệm",
  },
  {
    id: 4,
    title: "Học sinh tự tin phát biểu và thuyết trình logic",
    duration: "01:50",
    poster: "../video_5.png",
    src: "https://drive.google.com/file/d/1kBS0TZ-wHRK3tD649ExUMWccpTTnAAqK/view?usp=sharing",
    tag: "Kỹ năng mềm",
  },
  {
    id: 5,
    title: "Học sinh tự tin phát biểu và thuyết trình logic",
    duration: "03:10",
    poster: "../video6.png",

    src: "https://drive.google.com/file/d/1U8_0i69-jlD09SFxkLc6Q5GkoUc5WKnJ/view?usp=sharing",
    tag: "Kỹ năng mềm",
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videoList[0]);
  const currentMedia = getVideoMedia(activeVideo);

  return (
    <section id="video" className="w-full py-12 md:py-20 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-8 text-center max-w-2xl">
          <span className="mb-1 inline-block text-[12px] font-bold tracking-[0.14em] text-[#F26922] md:text-[13px] uppercase">
            Thư Viện Video
          </span>
          <h2 className="text-[26px] font-bold leading-[1.25] text-[#142249] sm:text-[32px] md:text-[36px]">
            Khám phá không gian học tập <span className="text-[#F26922]">Tại EDU Việt</span>
          </h2>
          <p className="mt-2 text-[14px] leading-[1.7] text-[#697086] md:text-[15px]">
            Xem những thước phim ghi lại khoảnh khắc học tập, trải nghiệm thực tế và sự tiến bộ từng ngày của học viên.
          </p>
        </div>

        {/* 5 VIDEOS LAYOUT: 1 MAIN + 4 SIDE PLAYLIST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

          {/* VIDEO CHÍNH ĐANG PHÁT (Bên trái: 8 Cột) */}
          <div className="lg:col-span-8 bg-[#142249] rounded-[24px] overflow-hidden border border-[#142249]/10 shadow-[0_18px_50px_rgba(20,34,73,0.12)]">
            <div className="aspect-video w-full relative bg-black">
              {
                currentMedia.type === "iframe" ? (
                  <iframe
                    key={currentMedia.embedUrl}
                    src={currentMedia.embedUrl}
                    className="h-full w-full border-0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title={activeVideo.title}
                  />
                ) : (
                  <video
                    key={currentMedia.embedUrl}
                    controls
                    autoPlay
                    preload="metadata"
                    poster={currentMedia.thumbnail}
                    className="h-full w-full object-cover"
                  >
                    <source src={currentMedia.embedUrl} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                )
              }
            </div>

            <div className="p-4 sm:p-5 bg-slate-900 text-white">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F26922] text-white uppercase tracking-wider">
                {activeVideo.tag}
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-2 text-white">
                {activeVideo.title}
              </h3>
            </div>
          </div>

          {/* DANH SÁCH VIDEO KẾ BÊN (Bên phải: 4 Cột, chiều cao tự nhiên) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-cente  r justify-between pb-2 border-b border-stone-200">
              <span className="text-sm font-bold text-slate-800">Danh Sách Video ({videoList.length})</span>
              <span className="text-xs text-slate-500">Bấm để chuyển</span>
            </div>

            <div className="space-y-3">
              {videoList.map((item) => {
                const isActive = item.id === activeVideo.id;
                const itemMedia = getVideoMedia(item);

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`flex gap-3 p-2.5 rounded-2xl cursor-pointer transition-all border ${isActive
                      ? "bg-white border-[#F26922] shadow-md ring-1 ring-[#F26922]"
                      : "bg-white hover:bg-stone-50 border-stone-200/80 shadow-xs"
                      }`}
                  >
                    {/* Thumbnail trích xuất tự động từ video */}
                    <div className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src={itemMedia.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white ${isActive ? "bg-[#F26922]" : "bg-black/60"}`}>
                          <FaPlay className="w-2.5 h-2.5 ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 text-[9px] font-semibold bg-black/70 text-white px-1.5 py-0.2 rounded">
                        {item.duration}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <span className="text-[10px] font-semibold text-[#F26922]">
                        {item.tag}
                      </span>
                      <h4 className={`text-xs font-bold line-clamp-2 leading-snug ${isActive ? "text-[#F26922]" : "text-slate-800"}`}>
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        {isActive ? "Đang phát..." : "Xem ngay"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
