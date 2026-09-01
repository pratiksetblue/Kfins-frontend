import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionDivSection from '../components/sections/contact/BreadcrumbSectionDivSection.jsx';
import DividerSmDivSection from '../components/sections/contact/DividerSmDivSection.jsx';
import ContainerDivSection from '../components/sections/contact/ContainerDivSection.jsx';
import DividerDivSection from '../components/sections/contact/DividerDivSection.jsx';
import ContactPageSectionDivSection from '../components/sections/contact/ContactPageSectionDivSection.jsx';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className='bg-color'><div id="smooth-content">
        <BreadcrumbSectionDivSection />
        <DividerSmDivSection />
        <ContainerDivSection />
        <DividerDivSection />
        <ContactPageSectionDivSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
