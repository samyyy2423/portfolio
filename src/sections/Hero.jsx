import React, { lazy, Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });
    const [showScene, setShowScene] = useState(false);
    const text = `I help fast moving brands and startups get an
early advantage through premium
designs and full web projects.`;

    // Desktop: start the 3D scene once the browser is idle, so text and layout paint first.
    // Phones get a still render of the same planet instead of shipping three.js at all.
    useEffect(() => {
        if (isMobile) return;
        const start = () => setShowScene(true);
        if ("requestIdleCallback" in window) {
            const id = window.requestIdleCallback(start, { timeout: 2000 });
            return () => window.cancelIdleCallback(id);
        }
        const t = setTimeout(start, 800);
        return () => clearTimeout(t);
    }, [isMobile]);

    return (
        <section id="home" className="flex flex-col justify-end min-h-screen">
            <AnimatedHeaderSection
                subTitle={"Bugs to be never found"}
                title={"Samyak P"}
                text={text}
                textColor={"text-black"}
            />
            <figure
                className="absolute inset-0 -z-50"
                style={{ width: "100vw", height: "100vh" }}
                aria-hidden="true"
            >
                {isMobile ? (
                    <img
                        src="/images/planet-mobile.webp"
                        alt=""
                        width="780"
                        height="1688"
                        fetchPriority="high"
                        className="planet-still w-full h-full object-cover"
                    />
                ) : (
                    showScene && (
                        <Suspense fallback={null}>
                            <HeroScene isMobile={isMobile} />
                        </Suspense>
                    )
                )}
            </figure>
        </section>
    );
};
export default Hero;
