import React from 'react';

export default function FaqWrapperSectionSection() {
   return <div className="section-component section-faqwrapper" dangerouslySetInnerHTML={{
      __html: `
<section class="faq-wrapper">
<!-- Divider -->
<div class="divider"></div>
<div class="container">
<div class="row g-5">
<!-- Section Heading -->
<div class="col-12 col-lg-5">
<div class="section-heading pe-xl-5">
<span class="sub-title text-primary">Frequently Asked Questions</span>
<h2 class="mb-4">K-Fins Pump <br/>Solutions</h2>
<p class="mb-5">Get answers to common questions about our pumps, applications, technical support, and quotation process.</p>
</div>
</div>
<div class="col-12 col-lg-7">
<!-- FAQ Accordion -->
<div class="faq-accordion">
<div class="accordion gap-3" id="faqAccordion">
<!-- Accordion Item -->
<div class="accordion-item">
<div class="accordion-header">
<button aria-controls="faqQuestion1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faqQuestion1" data-bs-toggle="collapse" type="button">
                                         What types of industrial pumps does K-FINS manufacture?
                                       </button>
</div>
<div class="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faqQuestion1">
<div class="accordion-body">
                                         K-FINS manufactures a range of industrial pumping solutions, including progressive cavity pumps, thermic fluid circulation pumps, and other application-specific pumping systems designed for reliable performance across various industries.
                                       </div>
</div>
</div>

<!-- Accordion Item -->
<div class="accordion-item">
<div class="accordion-header">
<button aria-controls="faqQuestion2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faqQuestion2" data-bs-toggle="collapse" type="button">
                                         What industries are K-FINS industrial pumps used in?
                                       </button>
</div>
<div class="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faqQuestion2">
<div class="accordion-body">
                                          K-FINS pumps are used across a wide range of industrial applications, including chemical processing, food processing, pharmaceuticals, textiles, paints and coatings, oil and lubricants, and other manufacturing industries.
                                       </div>
</div>
</div>
<!-- Accordion Item -->
<div class="accordion-item">
<div class="accordion-header">
<button aria-controls="faqQuestion3" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faqQuestion3" data-bs-toggle="collapse" type="button">
                                          Can K-FINS provide pumps for specific industrial applications?
                                       </button>
</div>
<div class="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faqQuestion3">
<div class="accordion-body">
                                          Yes. K-FINS offers application-focused pumping solutions based on factors such as fluid characteristics, flow rate, pressure, temperature, viscosity, and operating conditions. Our team can help identify a suitable pump for your specific requirements.

                                       </div>
</div>
</div>
<!-- Accordion Item -->
<div class="accordion-item">
<div class="accordion-header">
<button aria-controls="faqQuestion4" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faqQuestion4" data-bs-toggle="collapse" type="button">
                                          How do I choose the right industrial pump for my application?
                                       </button>
</div>
<div class="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faqQuestion4">
<div class="accordion-body">
                                          Choosing the right industrial pump depends on several factors, including the type and viscosity of the fluid, required flow rate, discharge pressure, temperature, operating conditions, and installation requirements. K-FINS can help you select a suitable pumping solution based on your application.
                                       </div>
</div>
</div>
<!-- Accordion Item -->
<div class="accordion-item">
<div class="accordion-header">
<button aria-controls="faqQuestion5" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faqQuestion5" data-bs-toggle="collapse" type="button">
                                          How can I request a quotation for a K-FINS pump?
                                       </button>
</div>
<div class="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faqQuestion5">
<div class="accordion-body">
                                          You can contact K-FINS with your application details, including the fluid to be handled, required flow rate, pressure, temperature, and other operating requirements. Our team can evaluate your requirements and recommend a suitable industrial pumping solution.
                                       </div>
</div>
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
