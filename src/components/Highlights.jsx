import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      id="highlights"
      className="container mx-auto py-12 px-4 sm:px-5 md:py-16 lg:py-24 xl:py-32 max-w-7xl"
    >
      <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl text-center max-w-4xl mx-auto leading-tight">
        There's never been a better time to upgrade.
      </h2>
      <h3 className="text-gray-100 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-6 md:mt-8 lg:mt-10">
        Here's what you get with the new MacBook Pro.
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mt-10 md:mt-16 lg:mt-20 text-gray-100">
        <div className="left-column flex flex-col justify-between gap-4 md:gap-5 opacity-0 -translate-y-5">
          <div className="h-auto lg:h-full bg-[url(/highlight-bg.png)] bg-no-repeat bg-cover p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-2xl lg:rounded-3xl">
            <img
              src="/laptop.png"
              alt="Laptop"
              className="w-12 sm:w-14 md:w-16 lg:w-20 mb-3 md:mb-4"
            />
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl max-w-xs leading-snug">
              Fly through demanding tasks up to 9.8x faster.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl lg:rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 md:gap-7">
            <img
              src="/sun.png"
              alt="Sun"
              className="w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0"
            />
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-snug">
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>

        <div className="right-column flex flex-col justify-between gap-4 md:gap-5 opacity-0 -translate-y-5">
          <div
            className="apple-gradient p-6 sm:p-8 md:p-10 rounded-2xl lg:rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 md:gap-7 relative bg-zinc-900 border-[3px] border-transparent"
            style={{ backgroundClip: "padding-box" }}
          >
            <div className="absolute inset-0 -z-10 -m-[5px] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500"></div>
            <img
              src="/ai.png"
              alt="AI"
              className="w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0"
            />
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-snug">
              Built for <br />
              <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Apple Intelligence.
              </span>
            </p>
          </div>
          <div className="h-auto lg:h-full bg-zinc-900 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-2xl lg:rounded-3xl">
            <img
              src="/battery.png"
              alt="Battery"
              className="w-12 sm:w-14 md:w-16 lg:w-20 mb-3 md:mb-4"
            />
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl max-w-sm leading-snug">
              Up to
              <span
                className="bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent ml-2"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                14 more hours
              </span>{" "}
              battery life.
              <span className="text-gray-400 block mt-2 text-sm sm:text-base">
                (Up to 24 hours total.)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
