import React from 'react';

export default function AboutSectionThemeTwoSectionSection() {
  return <div className="section-component section-aboutthemetwo" dangerouslySetInnerHTML={{ __html: `
<section class="about-section theme-two">
<div class="container">
<div class="row g-5 align-items-center">
<div class="col-12 col-lg-6">
<!-- About Content -->
<div class="about-content ps-md-4">
<div class="section-heading">
<h3 class="mb-3">Design</h3>
<p class="mb-5">The Investment Casting Pump – ICP series pumps are designed with Din 24256/ISO2858 is an end suction, horizontal, back pull out the pump. The dynamically balanced closed impeller in radially split, top discharge volute provides a smooth flow of liquor.
</p>
<h3 class="mb-3">Features</h3>
<p class="mb-5">The Investment Casting process pumps are manufactured to meet customers specific requirements within the models Investment Casting it requires minimum assembly time and minimum inventory of spares. Investment Casting is very high-class technology zero-defect investment casting pump offer higher efficiency &amp; smoothly hydrodynamic flow.</p>
</div>
</div>
</div>
<div class="col-12 col-lg-6">
<!-- About Video -->
<div class="about-video-content fadeInUp" data-delay="0.2">
<img src="/assets/img/product-details/investment_casting_pump.png"/>
</div>
</div>
</div>
</div>
</section>
` }} />;
}
