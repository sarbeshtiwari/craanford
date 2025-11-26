import Banner from "@/components/home/banner";
import Blogs from "@/components/home/blogs";
import InfoIconsSection from "@/components/home/company_info";
import FeatureIcons from "@/components/home/info";
import SyncCarousel from "@/components/home/prod_info";
import SupplementsSection from "@/components/home/product";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <Banner/>
      <FeatureIcons/>
      <SupplementsSection/>
      <SyncCarousel/>
      <Testimonials/>
      <Blogs/>
      <InfoIconsSection/>
    </main>
  );
}
