import React from 'react';

export default function ContactSectionFourBgImgJarallaxSectionSection() {
  return <div className="section-component section-contactfourbgimgjarallax" dangerouslySetInnerHTML={{ __html: `
<section class="contact-section-four bg-img jarallax" style="background-image: url('/assets/img/bg_water.jpg');">
<div class="container pt-5 pb-5">
<div class="contact-items">
<form action="" class="contact-form-box" id="contact-form">
<div class="section-heading text-center mb-4">
<span class="sub-title text-white fadeInUp">Get in
                              Touch</span>
<h2 class="text-white fadeInUp" data-delay="0.2">Let’s Build the Right
                              <br/>Solution for You</h2>
</div>
<div class="row g-3 align-items-center justify-content-center">
<div class="col-lg-6 col-md-6">
<div class="form-clt">
<input id="name" name="name" placeholder="Your Name" type="text"/>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="form-clt">
<input id="email2" name="email" placeholder="Email Address" type="text"/>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="form-clt">
<input id="phone" name="phone" placeholder="Your Phone" type="text"/>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="form-clt">
<input id="subject" name="subject" placeholder="Country" type="text"/>
</div>
</div>
<div class="col-lg-12">
<div class="form-clt">
<textarea id="message" name="message" placeholder="enter Your Messagae "></textarea>
</div>
</div>
<div class="col-lg-12">
<div class="btn-button text-center">
<button class="btn btn-primary" type="submit">Send Message <i class="ti ti-arrow-down-right"></i>
</button></div>
</div>
</div>
</form>
</div>
</div>
</section>
` }} />;
}
