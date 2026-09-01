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
<h3 class="mb-3">Pumped Liquids</h3>
<p class="mb-5">All kinds of heat transfer
                                 liquids.</p>
<h3 class="mb-3">Design</h3>
<p class="mb-5">From the hydraulic point of view,
                                 the Aircooled thermal oil pumps are centrifugal
                                 single stage, horizontal, volute type pumps.
                                 With regards to the mechanical design, the main
                                 concept of the Aircooled thermal oil pump
                                 series is to a maximum, the mechanical seal and
                                 ball bearing from the source of heat that
                                 constitutes the pump casing, placing between
                                 both a thermal barrier and cooling the
                                 mechanical seal housing and bearing support by
                                 natural convection</p>
<h3 class="mb-3">Material</h3>
<p class="mb-5">Casing and impeller are made of
                                 WCB investment die cast Stuffing box and
                                 bearing housing are made of SG IRON.</p>
</div>
</div>
</div>
<div class="col-12 col-lg-6">
<!-- About Video -->
<div class="about-video-content fadeInUp" data-delay="0.2">
<img alt="" src="/assets/img/product-details/thermal_oil_pump.png"/>
</div>
</div>
</div>
</div>
</section>
` }} />;
}
