import React from 'react';

export default function BlogSectionDivSection() {
  return <div className="section-component section-blogdiv" dangerouslySetInnerHTML={{ __html: `
   <!-- ====== Blog Section ====== -->
         <div class="blog-section">
            <!-- Divider -->
            <div class="divider"></div>

            <div class="container">
               <div class="row g-5 g-md-4 g-xxl-5">
                  <!-- Single Blog Content -->
                  <div class="col-12 col-md-12 col-lg-12">
                     <div class="pe-lg-3">
                        <img class="rounded-4 mb-4" src="assets/411-_rG2sXE7.jpg" alt="">

                        <!-- Single Blog Content -->
                        <div class="single-blog-content fadeInUp" data-delay="0.2">
                           <!-- Post Body -->
                           <div class="post-body">
                              

                              <!-- Post Title -->
                              <h2 class="post-title mb-4">The Ultimate Guide to Traveling When You Have No Money</h2>
                              <div class="d-flex flex-column gap-4">
                                 <p>Vast numbers of employees now work remotely, and it's too late to develop a set of
                                    remote-work policies if you didn't already have one. But there are ways to make the
                                    remote-work experience productive and engaging for employees</p>

                                 <p>Use both direct conversations and indirect observations to get visibility into
                                    employees
                                    challenges and concerns. Use every opportunity to make clear to employees that you
                                    support
                                    and care them. To facilitate regular conversations between managers and employees,
                                    provide
                                    managers with guidance on how best to broach sensitive subjects arising from the
                                    COVID-19
                                    pandemic, including alternative work models, job security and prospects, impact on
                                    staffing
                                 </p>

                                 

                                 <p>The third Monday of January is supposed to be the most depressing day of the year.
                                    Whether
                                    you believe that or not, the long nights, cold weather, and trying to keep to new
                                    year
                                    resolutions are all probably getting to you a little by now. To make matters worse
                                    many
                                    will
                                    still be recovering from their Christmas spending. So how can you make today a
                                    little
                                    brighter?</p>
                              </div>
                           </div>
                        </div>

                        <div class="divider-sm"></div>

                  

                       
                     </div>
                  </div>

               </div>
            </div>

            <!-- Divider -->
            <div class="divider"></div>
         </div>
` }} />;
}
