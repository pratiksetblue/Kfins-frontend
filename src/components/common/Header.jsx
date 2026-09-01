import React from 'react';

export default function Header() {
  return <div className="section-component section-header" dangerouslySetInnerHTML={{ __html: `
<header class="header-area style-three header-four">
<div class="container-fluid">
<nav class="navbar navbar-expand-xl">
<a class="navbar-brand2 d-xl-none" href="/">
<img alt="K-fins" src="/assets/img/logo.png"/>
</a>
<!-- Navbar Toggler -->
<button aria-controls="touriaNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#touriaNav" data-bs-toggle="collapse" type="button">
<i class="ti ti-menu-deep"></i>
</button>
<!-- Navbar Nav -->
<div class="collapse justify-content-xl-end navbar-collapse" id="touriaNav">
<div class="header-navigation d-flex flex-wrap align-items-center gap-3 mt-4 mt-xl-0">
<!-- Offcanvas Icon -->
</div>
<ul class="navbar-nav align-items-xl-center navbar-nav-scroll">
<li class="tourly-dd logo-set">
<a href="/"><i class="ti ti-home"></i></a>
</li>
<li class="tourly-dd">
<a href="/about-us">About Us</a>
</li>
<li class="tourly-dd">
<a href="/products">Products <i class="ti ti-chevron-down"></i></a>
<ul class="tourly-dd-menu">
<li><a href="/products/aircooled-thermal-oil-pump">Aircooled
                                 Thermal Oil Pump</a></li>
<li><a href="/products/investment-casting-pump">Investment
                                 Casting Pump</a></li>
<li><a href="/products/progressive-cavity-pumps">Progressive
                                 Cavity Pumps</a></li>
</ul>
</li>
<li class="tourly-dd">
<a href="/infrastructure">Infrastructure</a>
</li>
<li class="d-none d-xl-block">
<a class="navbar-brand" href="/">
<img alt="K-fins" src="/assets/img/logo.png"/>
</a>
</li>
<li>
<a href="/clients">Clients</a>
</li>
<li class="tourly-dd">
<a href="/blog">Blog</a>
</li>
<li class="tourly-dd">
<a href="/contact">Contact Us</a>
</li>
</ul>
<div class="header-navigation d-flex flex-wrap align-items-center gap-3 mt-4 mt-xl-0">
<!-- Search Button -->
<div class="header-search-btn">
<button class="btn whatsapp"  onclick="window.open('https://wa.me/919374921406', '_blank')">
<i class="ti ti-brand-whatsapp"></i>
</button>
<button class="btn call" onclick="window.location.href='tel:+919374921406'">
<i class="ti ti-phone"></i>
</button>
</div>
</div>
<!-- Get A Quote -->
<!-- <a class="btn btn-primary" href="contact.html">Get a Quote <i class="ti ti-arrow-down-right"></i></a> -->
<!-- Navbar Brand -->
</div>
</nav>
</div>
</header>
` }} />;
}
