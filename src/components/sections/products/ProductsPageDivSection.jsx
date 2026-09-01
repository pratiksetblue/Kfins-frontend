import React from 'react';

export default function ProductsPageDivSection() {
  return <div className="section-component section-productspagediv" dangerouslySetInnerHTML={{ __html: `
<div class="products-page">
<div class="container">
<div class="row justify-content-center">
<div class="col-6 col-sm-6 col-md-4 col-lg-4">
<div class="destination-box-items">
<a class="destination-image" href="/products/investment-casting-pump">
<img alt="" class="img-default" src="/assets/img/product/castingpump.jpg"/>
<img alt="" class="img-hover" src="/assets/img/product/castingpump-hover.jpg"/>
</a>
</div>
</div>
<div class="col-6 col-sm-6 col-md-4 col-lg-4">
<div class="destination-box-items">
<a class="destination-image" href="/products/progressive-cavity-pumps">
<img alt="" class="img-default" src="/assets/img/product/cavitypump.jpg"/>
<img alt="" class="img-hover" src="/assets/img/product/cavitypump-hover.jpg"/>
</a>
</div>
</div>
<div class="col-6 col-sm-6 col-md-4 col-lg-4">
<div class="destination-box-items">
<a class="destination-image" href="/products/aircooled-thermal-oil-pump">
<img alt="" class="img-default" src="/assets/img/product/thermaloilpump.jpg"/>
<img alt="" class="img-hover" src="/assets/img/product/thermaloilpump-hover.jpg"/>
</a>
</div>
</div>
</div>
</div>
<!-- Divider -->
<div class="divider"></div>
</div>
` }} />;
}
