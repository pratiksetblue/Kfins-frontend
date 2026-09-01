import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollAnimations({ path }) {
  useEffect(() => {
    let timer;
    const initAnimations = () => {
      const fadeElements = gsap.utils.toArray(".fadeInUp");

      fadeElements.forEach((element) => {

        if (element.dataset.gsapInitialized === "true") return;

        element.dataset.gsapInitialized = "true";

        const delay = parseFloat(element.dataset.delay) || 0;

        gsap.fromTo(
          element,
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
      const scrollImages = gsap.utils.toArray(".scroll-image");

      scrollImages.forEach((element) => {
        if (element.dataset.gsapScrollInitialized === "true") return;

        element.dataset.gsapScrollInitialized = "true";

        gsap.to(element, {
          y: -140,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      ScrollTrigger.refresh();
    };
    timer = setTimeout(() => {
      initAnimations();
    }, 300);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      document.querySelectorAll(".fadeInUp").forEach((element) => {
        delete element.dataset.gsapInitialized;
      });

      document.querySelectorAll(".scroll-image").forEach((element) => {
        delete element.dataset.gsapScrollInitialized;
      });
    };
  }, [path]);

  return null;
}