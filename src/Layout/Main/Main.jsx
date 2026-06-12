import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import SubTop from "../../Components/Navbar/SubTop/SubTop";
import SectionOne from "../../Components/sections/Section-1/SectionOne";
import SaleSection from "../../Components/sections/Section-1/SectionThree";
import SectionTow from "../../Components/sections/Section-1/SectionTow";
import FeaturedTabs from './../../Components/sections/Section-1/Products/Products';
import ProductCarousel from './../../Components/sections/Section-1/Products/ProductCaro';
import StatisticsSection from "../../Components/sections/Section-1/SectinFour";
import TestimonialSection from "../../Components/sections/Section-1/Review";
import NewsletterSection from "../../Components/sections/Section-1/NewsLatter";
import ShopByCategory from "../../Components/sections/Section-1/ShopByCategory";
import FlashSale from "../../Components/sections/Section-1/FlashSale";
import BrandStrip from "../../Components/sections/Section-1/BrandStrip";
import BestSellers from "../../Components/sections/Section-1/BestSellers";
import PromoBanner from "../../Components/sections/Section-1/PromoBanner";
import BlogPreview from "../../Components/sections/Section-1/BlogPreview";
import Sub from "../../Components/Footer/Sub";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="overflow-x-hidden">
            <SubTop/>
            <Navbar/>
            <Banner></Banner>
            <SectionOne/>
            <ShopByCategory/>
            <SectionTow/>
            <FeaturedTabs />
            <BestSellers/>
            <FlashSale/>
            <SaleSection/>
            <ProductCarousel/>
            <BlogPreview/>
            <PromoBanner/>
            <BrandStrip/>
            <StatisticsSection/>
            <TestimonialSection/>
            <NewsletterSection/>
            <div>
                <Sub/>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;