import Image from "next/image";
import Header from "./layout/header/header";
import WhySection from "./section/why.section";
import CourseSection from "./section/course.section";
import RoadmapSection from "./section/roadmap.section";
import PteBanner from "./section/pte.section";
import FaqSection from "./section/faq.section";
import LearningOutcomeSection from "./section/LearningOutcomeSection";
import TeamSection from "./section/teacher.section";
import RegisterSection from "./section/form-register";
import VideoSection from "./section/video.section";
import FeedbackAchievementSection from "./section/feedback.section";
import GallerySection from "./section/gallery.section";
import BannerSection from "./section/banner.section";
import Footer from "./layout/footer/footer";
import ImageSlider from "./section/ImageSlider";


export default function Home() {
  const data = ["React", "Node", "Next", "TypeScript", "UI/UX"];

  return (
    <div>
      <Header />
      <div className="">
        <BannerSection />
        <WhySection />
        <RoadmapSection />
        <CourseSection />
        <PteBanner />
        <LearningOutcomeSection />
        <TeamSection />

        {/* <FeedbackAchievementSection /> */}
        <GallerySection />
        <VideoSection />
        <FaqSection />
        <RegisterSection />


      </div>
      <Footer />
    </div>
  );
}
function CourseCard({ title }: { title: string }) {
  return (
    <div className="h-56 bg-orange-400 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
      {title}
    </div>
  );
}
