import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import HeroSectionStyleTwoHeroFivePdPageSectionSection from '../components/sections/investment-casting-pump/HeroSectionStyleTwoHeroFivePdPageSectionSection.jsx';
import AboutSectionThemeTwoBgWhiteSectionSection from '../components/sections/investment-casting-pump/AboutSectionThemeTwoBgWhiteSectionSection.jsx';
import DividerSmDivSection from '../components/sections/investment-casting-pump/DividerSmDivSection.jsx';
import AboutSectionThemeTwoSectionSection from '../components/sections/investment-casting-pump/AboutSectionThemeTwoSectionSection.jsx';
import DividerSmDivSection2 from '../components/sections/investment-casting-pump/DividerSmDivSection2.jsx';
import AboutSectionBg01Pt5Pb5SectionSection from '../components/sections/investment-casting-pump/AboutSectionBg01Pt5Pb5SectionSection.jsx';
import DividerSmDivSection3 from '../components/sections/investment-casting-pump/DividerSmDivSection3.jsx';
import AboutSectionThemeTwoSectionSection2 from '../components/sections/investment-casting-pump/AboutSectionThemeTwoSectionSection2.jsx';
import DividerDivSection from '../components/sections/investment-casting-pump/DividerDivSection.jsx';
import DestinationSectionFourBgWhiteSectionSection from '../components/sections/investment-casting-pump/DestinationSectionFourBgWhiteSectionSection.jsx';
import ContactSectionFourBgImgJarallaxSectionSection from '../components/sections/investment-casting-pump/ContactSectionFourBgImgJarallaxSectionSection.jsx';

export default function InvestmentCastingPumpPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper"><div id="smooth-content">
        <HeroSectionStyleTwoHeroFivePdPageSectionSection />
        <AboutSectionThemeTwoBgWhiteSectionSection />
        <DividerSmDivSection />
        <AboutSectionThemeTwoSectionSection />
        <DividerSmDivSection2 />
        <AboutSectionBg01Pt5Pb5SectionSection />
        <DividerSmDivSection3 />
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
