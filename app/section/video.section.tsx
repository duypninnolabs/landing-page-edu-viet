"use client";

export default function VideoSection() {
  return (
    <section
      id="video"
      className="
        w-full
        overflow-hidden
      
        py-8
        md:py-16
        bg-[#F8F9FC]
      "
    >
      <div className="container mx-auto sm:px-4 ">

        {/* HEADER */}
        <div className="mx-auto mb-4 text-center md:mb-6">

          <span
            className="
              mb-1
              inline-block
              text-[12px]
              font-bold
              
              tracking-[0.14em]
              text-[#F26922]
              md:text-[13px]
            "
          >
            Về EDU Việt
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
  Khám phá không gian học tập {" "}
  <span className=" text-[#F26922]">
    Tại EDU Việt
  </span>
</h2>
          <p
            className="
              mx-auto
             mt-1
             
              text-[14px]
              leading-[1.7]
              text-[#697086]
              md:text-[15px]
            "
          >
            Cùng xem những khoảnh khắc học tập, tương tác và trải nghiệm
            thực tế của học viên tại EDU Việt.
          </p>
        </div>

        {/* VIDEO */}
        <div
          className="
            mx-auto
            max-w-[1100px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#142249]/10
            bg-[#142249]
            shadow-[0_18px_50px_rgba(20,34,73,0.12)]
          "
        >
          <div className="aspect-video w-full">

            <video
              controls
              preload="metadata"
              poster="/video-cover.jpg"
              className="
                h-full
                w-full
                object-cover
              "
            >
              <source
                src="/edu-viet-video.mp4"
                type="video/mp4"
              />

              Trình duyệt của bạn không hỗ trợ video.
            </video>

          </div>
        </div>

      </div>
    </section>
  );
}