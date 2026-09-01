import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import HeroSectionStyleTwoHeroFivePdPageSectionSection from '../components/sections/progressive-cavity-pumps/HeroSectionStyleTwoHeroFivePdPageSectionSection.jsx';
import AboutSectionThemeTwoBgWhiteSectionSection from '../components/sections/progressive-cavity-pumps/AboutSectionThemeTwoBgWhiteSectionSection.jsx';
import AboutSectionThemeTwoSectionSection from '../components/sections/progressive-cavity-pumps/AboutSectionThemeTwoSectionSection.jsx';
import AboutSectionBg01Pt5Pb5SectionSection from '../components/sections/progressive-cavity-pumps/AboutSectionBg01Pt5Pb5SectionSection.jsx';
import DividerSmDivSection from '../components/sections/progressive-cavity-pumps/DividerSmDivSection.jsx';
import AboutSectionThemeTwoSectionSection2 from '../components/sections/progressive-cavity-pumps/AboutSectionThemeTwoSectionSection2.jsx';
import DividerDivSection from '../components/sections/progressive-cavity-pumps/DividerDivSection.jsx';
import DestinationSectionFourBgWhiteSectionSection from '../components/sections/progressive-cavity-pumps/DestinationSectionFourBgWhiteSectionSection.jsx';
import ContactSectionFourBgImgJarallaxSectionSection from '../components/sections/progressive-cavity-pumps/ContactSectionFourBgImgJarallaxSectionSection.jsx';

export default function ProgressiveCavityPumpsPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper"><div id="smooth-content">
        <HeroSectionStyleTwoHeroFivePdPageSectionSection />
        <AboutSectionThemeTwoBgWhiteSectionSection />
        <AboutSectionThemeTwoSectionSection />
        <AboutSectionBg01Pt5Pb5SectionSection />
        <DividerSmDivSection />
        <AboutSectionThemeTwoSectionSection2 />
        <DividerDivSection />
        <DestinationSectionFourBgWhiteSectionSection />
        <ContactSectionFourBgImgJarallaxSectionSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
