import React from 'react';

export default function ErrorSectionDivSection() {
  return <div className="section-component section-errordiv" dangerouslySetInnerHTML={{ __html: `
<div class="error-section">
<!-- Divider -->
<div class="divider"></div>
<div class="container">
<div class="row justify-content-center">
<div class="col-12 col-sm-10 col-md-8 col-lg-6">
<!-- Error Content -->
<div class="error-content text-center">
<img alt="" class="mb-4" src="/assets/img/404-CvwIjiO4.png"/>
<p class="mb-5 px-md-5">Sorry, the page you're looking for doesn't exist. If you think something
                           is
                           broken, report a porblem</p>
<a class="btn btn-primary" href="/">Back To Home <i class="ti ti-arrow-down-right"></i></a>
</div>
</div>
</div>
</div>
<!-- Divider -->
<div class="divider"></div>
</div>
` }} />;
}
