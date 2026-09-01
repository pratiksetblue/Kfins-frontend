import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import HeroSectionStyleTwoHeroFivePdPageSectionSection from '../components/sections/aircooled-thermal-oil-pump/HeroSectionStyleTwoHeroFivePdPageSectionSection.jsx';
import AboutSectionThemeTwoBgWhiteSectionSection from '../components/sections/aircooled-thermal-oil-pump/AboutSectionThemeTwoBgWhiteSectionSection.jsx';
import DividerSmDivSection from '../components/sections/aircooled-thermal-oil-pump/DividerSmDivSection.jsx';
import AboutSectionThemeTwoSectionSection from '../components/sections/aircooled-thermal-oil-pump/AboutSectionThemeTwoSectionSection.jsx';
import DividerSmDivSection2 from '../components/sections/aircooled-thermal-oil-pump/DividerSmDivSection2.jsx';
import AboutSectionBg01Pt5Pb5SectionSection from '../components/sections/aircooled-thermal-oil-pump/AboutSectionBg01Pt5Pb5SectionSection.jsx';
import DividerSmDivSection3 from '../components/sections/aircooled-thermal-oil-pump/DividerSmDivSection3.jsx';
import AboutSectionThemeTwoSectionSection2 from '../components/sections/aircooled-thermal-oil-pump/AboutSectionThemeTwoSectionSection2.jsx';
import BgWhitePb5SectionSection from '../components/sections/aircooled-thermal-oil-pump/BgWhitePb5SectionSection.jsx';
import DownloadDataSheetsSectionSection from '../components/sections/aircooled-thermal-oil-pump/DownloadDataSheetsSectionSection.jsx';
import DestinationSectionFourBgWhiteSectionSection from '../components/sections/aircooled-thermal-oil-pump/DestinationSectionFourBgWhiteSectionSection.jsx';
import ContactSectionFourBgImgJarallaxSectionSection from '../components/sections/aircooled-thermal-oil-pump/ContactSectionFourBgImgJarallaxSectionSection.jsx';

export default function AircooledThermalOilPumpPage() {
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
        <BgWhitePb5SectionSection />
        <DownloadDataSheetsSectionSection />
        <DestinationSectionFourBgWhiteSectionSection />
        <ContactSectionFourBgImgJarallaxSectionSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
