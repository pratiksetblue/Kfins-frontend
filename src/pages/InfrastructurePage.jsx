import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionDivSection from '../components/sections/infrastructure/BreadcrumbSectionDivSection.jsx';
import SectionSection from '../components/sections/infrastructure/SectionSection.jsx';
import DividerSmDivSection from '../components/sections/infrastructure/DividerSmDivSection.jsx';
import AboutSectionThemeTwoSectionSection from '../components/sections/infrastructure/AboutSectionThemeTwoSectionSection.jsx';
import DividerSmDivSection2 from '../components/sections/infrastructure/DividerSmDivSection2.jsx';
import DividerSmDivSection3 from '../components/sections/infrastructure/DividerSmDivSection3.jsx';
import DestinationSectionFourSectionSection from '../components/sections/infrastructure/DestinationSectionFourSectionSection.jsx';

export default function InfrastructurePage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className='bg-color'><div id="smooth-content">
        <BreadcrumbSectionDivSection />
        <SectionSection />
        <DividerSmDivSection />
        <AboutSectionThemeTwoSectionSection />
        <DividerSmDivSection2 />
        <DividerSmDivSection3 />
        <DestinationSectionFourSectionSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
