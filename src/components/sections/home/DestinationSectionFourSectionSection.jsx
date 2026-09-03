import React from 'react';

export default function DestinationSectionFourSectionSection() {
  return <div className="section-component section-destinationfour" dangerouslySetInnerHTML={{ __html: `
<section class="destination-section-four home-p-slider">
<div class="container">
<div class="row justify-content-center">
<div class="col-12 col-lg-8">
<!-- Section Heading -->
<div class="section-heading text-center">
<span class="sub-title">Our Valuable Products</span>
<h2 class="mb-0">Our Products</h2>
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
<a class="destination-image" href="/products/investment-casting-pump">
<img alt="" class="img-default" src="/assets/img/product/castingpump.jpg"/>
<img alt="" class="img-hover" src="/assets/img/product/castingpump-hover.jpg"/>
</a>
</div>
</div>
<!-- Slide Item -->
<div class="swiper-slide">
<div class="destination-box-items">
<a class="destination-image" href="/products/progressive-cavity-pumps">
<img alt="" class="img-default" src="/assets/img/product/cavitypump.jpg"/>
<img alt="" class="img-hover" src="/assets/img/product/cavitypump-hover.jpg"/>
</a>
</div>
</div>
<!-- Slide Item -->
<div class="swiper-slide">
<div class="destination-box-items">
<a class="destination-image" href="/products/aircooled-thermal-oil-pump">
<img alt="" class="img-default" src="/assets/img/product/thermaloilpump.jpg"/>
<img alt="" class="img-hover" src="/assets/img/product/thermaloilpump-hover.jpg"/>
</a>
</div>
</div>
</div>
</div>
</div>
<!-- <div class="btn-button1 text-center pt-5 pb-5">
               <a href="destination-details.html" class="btn btn-primary">All Products <i
                     class="icon-arrow-right"></i></a>
            </div> -->
</section>
` }} />;
}
