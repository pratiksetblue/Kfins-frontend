import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionDivSection from '../components/sections/products/BreadcrumbSectionDivSection.jsx';
import ProductsPageDivSection from '../components/sections/products/ProductsPageDivSection.jsx';
import ContactSectionFourBgImgJarallaxSectionSection from '../components/sections/products/ContactSectionFourBgImgJarallaxSectionSection.jsx';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className='bg-color'><div id="smooth-content">
        <BreadcrumbSectionDivSection />
        <ProductsPageDivSection />
        <ContactSectionFourBgImgJarallaxSectionSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
