import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionDivSection from '../components/sections/about-us/BreadcrumbSectionDivSection.jsx';
import AboutSectionThemeTwoSectionSection from '../components/sections/about-us/AboutSectionThemeTwoSectionSection.jsx';
import ContactSectionJarallaxSectionSection from '../components/sections/about-us/ContactSectionJarallaxSectionSection.jsx';
import WhyChooseSectionBgWhiteSectionSection from '../components/sections/about-us/WhyChooseSectionBgWhiteSectionSection.jsx';
import WhyChooseUsSectionBgWhiteSectionSection from '../components/sections/about-us/WhyChooseUsSectionBgWhiteSectionSection.jsx';
import TestimonialSectionFourBgWhiteSectionSection from '../components/sections/about-us/TestimonialSectionFourBgWhiteSectionSection.jsx';

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className='bg-color'><div id="smooth-content">
        <BreadcrumbSectionDivSection />
        <AboutSectionThemeTwoSectionSection />
        <ContactSectionJarallaxSectionSection />
        <WhyChooseSectionBgWhiteSectionSection />
        <WhyChooseUsSectionBgWhiteSectionSection />
        <TestimonialSectionFourBgWhiteSectionSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
