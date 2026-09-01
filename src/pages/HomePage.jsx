import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import HeroSectionStyleTwoHeroFiveSectionSection from '../components/sections/home/HeroSectionStyleTwoHeroFiveSectionSection.jsx';
import DividerSmDivSection from '../components/sections/home/DividerSmDivSection.jsx';
import GallerySectionFourSectionSection from '../components/sections/home/GallerySectionFourSectionSection.jsx';
import DividerSmDivSection2 from '../components/sections/home/DividerSmDivSection2.jsx';
import ContactSectionJarallaxSectionSection from '../components/sections/home/ContactSectionJarallaxSectionSection.jsx';
import DividerDivSection from '../components/sections/home/DividerDivSection.jsx';
import DestinationSectionFourSectionSection from '../components/sections/home/DestinationSectionFourSectionSection.jsx';
import WhyChooseSectionSectionSection from '../components/sections/home/WhyChooseSectionSectionSection.jsx';
import WhyChooseUsSectionSectionSection from '../components/sections/home/WhyChooseUsSectionSectionSection.jsx';
import TestimonialSectionFourSectionSection from '../components/sections/home/TestimonialSectionFourSectionSection.jsx';
import ContactSectionFourBgImgJarallaxSectionSection from '../components/sections/home/ContactSectionFourBgImgJarallaxSectionSection.jsx';
import FaqWrapperSectionSection from '../components/sections/home/FaqWrapperSectionSection.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper"><div id="smooth-content">
        <HeroSectionStyleTwoHeroFiveSectionSection />
        <DividerSmDivSection />
        <GallerySectionFourSectionSection />
        <DividerSmDivSection2 />
        <ContactSectionJarallaxSectionSection />
        <DividerDivSection />
        <DestinationSectionFourSectionSection />
        <WhyChooseSectionSectionSection />
        <WhyChooseUsSectionSectionSection />
        <TestimonialSectionFourSectionSection />
        <ContactSectionFourBgImgJarallaxSectionSection />
        <FaqWrapperSectionSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
