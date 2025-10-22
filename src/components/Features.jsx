import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { Html } from "@react-three/drei";
import MacBookModel from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import { Suspense, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import useMacbookStore from "../store";
import gsap from "gsap";

const ModelScroll = () => {
  const groupRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { setTexture } = useMacbookStore();

  // Pre-load all feature videos during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const video = document.createElement("video");

      Object.assign(video, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      video.load();
    });
  }, []);

  useGSAP(() => {
    // 3D Model Rotation Animation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // SYNC THE FEATURE CONTENT
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3D Spin
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    // Content & Texture Sync - Remove delay and add proper positioning
    timeline
      // Feature 1
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, duration: 0.3 }, 0) // Start immediately at position 0

      // Feature 2
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box1", { opacity: 0, y: -20, duration: 0.2 }, 0.8) // Fade out box1
      .to(".box2", { opacity: 1, y: 0, duration: 0.3 }, 1)

      // Feature 3
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box2", { opacity: 0, y: -20, duration: 0.2 }, 1.8)
      .to(".box3", { opacity: 1, y: 0, duration: 0.3 }, 2)

      // Feature 4
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box3", { opacity: 0, y: -20, duration: 0.2 }, 2.8)
      .to(".box4", { opacity: 1, y: 0, duration: 0.3 }, 3)

      // Feature 5
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box4", { opacity: 0, y: -20, duration: 0.2 }, 3.8)
      .to(".box5", { opacity: 1, y: 0, duration: 0.3 }, 4);
  });

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacBookModel
          scale={isMobile ? 0.05 : 0.08}
          position={isMobile ? [0, -1, 0] : [0, -0.5, 0]}
        />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />

        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
