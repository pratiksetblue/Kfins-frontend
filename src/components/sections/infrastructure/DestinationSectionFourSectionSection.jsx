import React from 'react';

export default function DestinationSectionFourSectionSection() {
  return <div className="section-component section-destinationfour" dangerouslySetInnerHTML={{ __html: `
<section class="destination-section-four">
<div class="container">
<div class="row justify-content-center">
<div class="col-12 col-lg-8">
<!-- Section Heading -->
<div class="section-heading text-center">
<h2 class="mb-0">Manufacturing Facility</h2>
</div>
</div>
</div>
</div>
<div class="divider-sm"></div>
<div class="container-fluid">
<div class="swiper destination-swiper">
<div class="swiper-wrapper">
<!-- Slide Item -->
<div class="swiper-slide">
<div class="destination-box-items">
<div class="destination-image">
<img alt="" src="/assets/img/service/auto_aero_manufacture.jpg"/>
</div>
</div>
</div>
<!-- Slide Item -->
<div class="swiper-slide">
<div class="destination-box-items">
<div class="destination-image">
<img alt="" src="/assets/img/service/parts_production.jpg"/>
</div>
</div>
</div>
<!-- Slide Item -->
<div class="swiper-slide">
<div class="destination-box-items">
<div class="destination-image">
<img alt="" src="/assets/img/service/precision_quality.jpg"/>
</div>
</div>
</div>
<!-- Slide Item -->
<div class="swiper-slide">
<div class="destination-box-items">
<div class="destination-image">
<img alt="" src="/assets/img/service/quality_replacement_parts.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Divider -->
<div class="divider"></div>
</section>
` }} />;
}
