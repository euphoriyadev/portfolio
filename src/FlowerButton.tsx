import { useState } from "react";

export default function FlowerButton() {
  const [expanded, setExpanded] = useState(false);

  const PETAL_COUNT = 6;
  const RADIUS_PX = 80;

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <button
        onClick={() => setExpanded(true)}
        className={`relative block w-40 h-40 rounded-full transition-transform duration-[2000ms] ease-out cursor-pointer`}
        style={{
          transform: expanded ? "scale(30)" : "scale(1)",
          transformStyle: "preserve-3d",
        }}
        aria-label="Pink lily bloom"
      >
        {/* Yellow glow aura */}
        <div
          className="absolute inset-0 rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(250, 204, 21, 0.6) 20%, rgba(250, 204, 21, 0) 80%)",
            filter: "blur(40px)",
          }}
        ></div>

        {/* Petals */}
        <div className="absolute inset-0 z-10">
          {Array.from({ length: PETAL_COUNT }).map((_, i) => {
            const angle = (360 / PETAL_COUNT) * i;
            return (
              <span
                key={i}
                className="
                  absolute
                  w-24 h-52
                  shadow-[0_0_25px_rgba(250,204,21,0.5)]
                  [clip-path:polygon(50%_0%,_72%_12%,_86%_30%,_75%_65%,_55%_100%,_45%_100%,_25%_65%,_14%_30%,_28%_12%)]
                "
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${RADIUS_PX}px) rotateX(15deg)`,
                  transformOrigin: "50% 50%",
                  background:
                    "radial-gradient(ellipse at 50% 20%, #fce7f3 0%, #f9a8d4 50%, #ec4899 90%)",
                }}
              />
            );
          })}
        </div>

        {/* Yellow center */}
        <span
          className="absolute z-50 rounded-full border-4 border-yellow-500"
          style={{
            width: "6rem",
            height: "6rem",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at 40% 35%, #fde68a 0%, #facc15 60%, #eab308 100%)",
            boxShadow: "0 0 40px rgba(250, 204, 21, 0.8)", // strong yellow glow
          }}
        />
      </button>
    </div>
  );
}
