import React from 'react';

export default function Footer() {
  return <div className="section-component section-footer" dangerouslySetInnerHTML={{ __html: `
<footer class="footer-wrapper" style="background-image: url('/assets/img/footer-logo-bg.png');">
<!-- Divider -->
<div class="divide-sm"></div>
<div class="container">
<div class="footer-top-content brochure">
<div class="row">
<div class="col-lg-8">
<div class="section-heading">
<h3 class="text-white fadeInUp" data-delay="0.4"><b>Download the K-Fins
                                       brochure to explore our product range</b>
                                    Technical Detailsils, applications, and
                                    industrial pumping solutions.</h3>
</div>
</div>
<div class="col-lg-4 text-center text-lg-end">
<div class="section-heading">
<a class="btn btn-primary fadeInUp" data-delay="0.6" href="/assets/ipump.pdf" style="translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);" target="_blank">Download
                                    Broucher <i class="ti ti-file-download"></i></a>
</div>
</div>
</div>
</div>
</div>
<div class="container">
<div class="border-top"></div>
</div>
<!-- Divider -->
<div class="divider-sm"></div>
<div class="container">
<div class="row g-5">
<!-- Footer Card -->
<div class="col-xl-4 col-lg-4 col-md-6">
<div class="footer-card pe-lg-5">
<a class="footer-logo" href="#">
<img alt="" src="/assets/img/white-logo.png"/>
</a>
<p class="mb-0 text-white">K-Fins Pumps delivers reliable air-cooled and chemical process pumps across India and international markets.</p>
<!-- Social Nav -->
<div class="footer-icon"><img src="/assets/img/footer-logo.png"/></div>
</div>
</div>
<!-- Footer Card -->
<div class="col-xl-2 col-lg-4 col-md-6 f-mobile-dnone">
<div class="footer-card">
<div class="h5 card-title text-white">Quick
                                 Links</div>
<!-- Footer Nav -->
<ul class="footer-nav">
<li><a href="/about-us">About us</a></li>
<li><a href="/products">Products</a></li>
<li><a href="/infrastructure">infrastructure</a></li>
<li><a href="/clients">Clients</a></li>
<li><a href="/blog">Blogs</a></li>
<li><a href="/contact">Contact Us</a></li>
</ul>
</div>
</div>
<!-- Footer Card -->
<div class="col-xl-3 col-lg-4 col-md-6 f-mobile-dnone">
<div class="footer-card">
<div class="h5 card-title text-white">Products</div>
<!-- Footer Nav -->
<ul class="footer-nav">
<li><a href="/products/investment-casting-pump">Investment
                                       Casting Pump</a></li>
<li><a href="/products/aircooled-thermal-oil-pump">Aircooled
                                       Thermal Oil Pump</a></li>
<li><a href="/products/progressive-cavity-pumps">Progressive
                                    Cavity Pumps</a></li>
</ul>
</div>
</div>
<!-- Footer Card -->
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-7">
<div class="footer-card">
<div class="h5 card-title text-white">Contact</div>
<!-- Footer Nav -->
<ul class="footer-nav">
<li><a href="https://maps.app.goo.gl/3zzCCmWZ47ocZU157" target="_blank">273/1, Pandesara
                                    GIDC, Surat – 394221, Gujarat,
                                    India</a></li>
<li><a href="tel:919374921406" target="_blank">+91
                                    93749 21406</a></li>
<li><a href="mailto:info@bajajpumps.com" target="_blank">info@bajajpumps.com</a></li>
</ul>
<!-- Social Nav -->
<div class="social-nav">
<a href="https://www.facebook.com/kfinspumps" target="_blank">
<i class="ti ti-brand-facebook"></i>
</a>
<a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fkfinspumps" target="_blank">
<i class="ti ti-brand-x"></i>
</a>
<a href="https://www.instagram.com/kfinspumpsindia/" target="_blank">
<i class="ti ti-brand-instagram"></i>
</a>
</div>
</div>
</div>
</div>
</div>
<!-- Divider -->
<div class="divider-sm"></div>
<div class="container">
<div class="border-top"></div>
</div>
<!-- Copyright -->
<div class="copyright-wrapper">
<div class="container">
<div class="row align-items-center">
<!-- Copyright -->
<div class="col-12 col-md-12">
<p class="copyright">©
                              <span id="year"></span> K-Fins Pumps Pvt. Ltd. All Rights
                              Reserved. | Website Designed by : <a href="https://setblue.com/" target="_blank">setblue</a></p>
</div>
</div>
</div>
</div>
</footer>
` }} />;
}
