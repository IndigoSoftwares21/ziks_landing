import ComingSoonModal from "@/app/Home/components/ComingSoonModal";
import Download from "@/app/Home/components/Download";
import Faq from "@/app/Home/components/Faq";
import HandoffPhone from "@/app/Home/components/HandoffPhone";
import Hero from "@/app/Home/components/Hero";
import LoadingScreen from "@/app/Home/components/LoadingScreen";
import Navbar from "@/app/Home/components/Navbar";
import SmoothScroll from "@/app/Home/components/SmoothScroll";
import Story from "@/app/Home/components/Story";
import StructuredData from "@/app/Home/components/StructuredData";

export default function Home() {
  return (
    <LoadingScreen>
      <StructuredData />
      <SmoothScroll />
      <Navbar />
      <HandoffPhone />
      <main>
        <Hero />
        <Story />
        <Faq />
        <Download />
        {/* Copy of the hero for the infinite scroll. Cropped to exactly one
            viewport so the page's last screen matches its first; Lenis wraps
            from one to the other (see SmoothScroll). */}
        <div className="h-[var(--loop-vh,100vh)] overflow-hidden">
          <Hero loop />
        </div>
      </main>
      <ComingSoonModal />
    </LoadingScreen>
  );
}
