import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionDivSection from '../components/sections/clients/BreadcrumbSectionDivSection.jsx';
import DividerSmDivSection from '../components/sections/clients/DividerSmDivSection.jsx';
import ContainerDivSection from '../components/sections/clients/ContainerDivSection.jsx';
import DividerDivSection from '../components/sections/clients/DividerDivSection.jsx';

export default function ClientsPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className='bg-color'><div id="smooth-content">
        <BreadcrumbSectionDivSection />
        <DividerSmDivSection />
        <ContainerDivSection />
        <DividerDivSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
