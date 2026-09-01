import React from 'react';

export default function DownloadDataSheetsSectionSection() {
  return <div className="section-component section-downloaddatasheets" dangerouslySetInnerHTML={{ __html: `
<section class="download-data-sheets">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<div class="section-heading">
<h3 class="text-white fadeInUp" data-delay="0.4" style="translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
                                  Air Cooled Thermal Oil Pump
                                      </h3>
<p class="text-white">Product Guide: Advantages · Selection Table · Model Datasheets · Competitor Comparison</p>
</div>
</div>
<div class="col-lg-12 text-center">
<div class="section-heading">
<a class="btn btn-primary fadeInUp" data-delay="0.6" href="/assets/Air_Cooled_Thermal_Oil_Pump.pdf" style="translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);" target="_blank">Download
                                    Specification <i class="ti ti-file-download"></i></a>
</div>
</div>
</div>
</div>
</section>
` }} />;
}
