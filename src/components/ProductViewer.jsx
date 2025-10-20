import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import StudioLights from "./three/StudioLight.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const colorOptions = [
    { value: "#adb5bd", name: "Space Gray" },
    { value: "#2e2c2e", name: "Midnight" },
  ];

  const sizeOptions = [
    { value: 0.06, label: "14″" },
    { value: 0.08, label: "16″" },
  ];

  const currentSize = sizeOptions.find((s) => s.value === scale);
  const currentColor = colorOptions.find((c) => c.value === color);

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <p className="subtitle">
        MacBook Pro {currentSize?.label} in {currentColor?.name}
      </p>

      <div className="controls">
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            {colorOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setColor(option.value)}
                className={clsx(
                  option.value === "#adb5bd"
                    ? "bg-neutral-300"
                    : "bg-neutral-900",
                  color === option.value && "active"
                )}
                aria-label={`Select ${option.name}`}
              />
            ))}
          </div>

          <div className="size-control">
            {sizeOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setScale(option.value)}
                className={clsx(
                  scale === option.value
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                )}
              >
                <p>{option.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
          color={color}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
