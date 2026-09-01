"use client";

import React, { useEffect } from "react";
export default function GallerySectionFourSectionSection() {
  return (
    <div
      className="section-component section-galleryfour"
      dangerouslySetInnerHTML={{
        __html: `
          <section class="gallery-section-four">
            <div class="container">
              <div class="gallery-wrapper-four">
                <div class="row g-4 align-items-center">

                  <div class="col-12 col-md-6">
                    <div class="gallery-image fadeInUp" data-delay="0.3">
                      <img src="/assets/img/about.png" alt="" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="gallery-content">

                      <div class="section-heading">
                        <span class="sub-title fadeInUp" data-delay="0.1">
                          About K-Fins
                        </span>

                        <h2 class="mb-0 fadeInUp" data-delay="0.2">
                          Which is a well-established organization
                        </h2>
                      </div>

                      <p class="gallery-text fadeInUp" data-delay="0.4">
                        with business transactions being carried out in
                        India as well as International Countries. The
                        Company manufacturing with a range of products,
                        namely – such as Air Cooled Pumps for hot oil and
                        hot water and Chemical Process Pumps Using
                        Investment Casting Technology.
                      </p>

                      <ul class="fadeInUp" data-delay="0.5">
                        <li>Solutions for your manufacturing business</li>
                        <li>Production of bespoke tools and machine</li>
                        <li>
                          Designing, building and testing with highest quality
                        </li>
                      </ul>

                      <a
                        class="btn btn-primary fadeInUp"
                        data-delay="0.6"
                        href="about-us"
                      >
                        READ MORE
                        <i class="ti ti-arrow-down-right"></i>
                      </a>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        `,
      }}
    />
  );
}