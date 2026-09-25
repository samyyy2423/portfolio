import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const ServiceSummary = () => {
    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                trigger: "#title-service-1",
                scrub: true,
            },
        });
        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                trigger: "#title-service-2",
                scrub: true,
            },
        });
        gsap.to("#title-service-3", {
            xPercent: 100,
            scrollTrigger: {
                trigger: "#title-service-3",
                scrub: true,
            },
        });
    });
    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
            <div id="title-service-1">
                <p>AI Evals</p>
            </div>
            <div
                id="title-service-2"
                className="flex items-center justify-center gap-3 translate-x-16"
            >
                <p className="font-normal">Benchmarks</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Graders</p>
            </div>
            <div
                id="title-service-3"
                className="flex items-center justify-center gap-3 -translate-x-48"
            >
                <p>Frontend</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p className="italic">Full-Stack</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Backend</p>
            </div>
        </section>
    );
};

export default ServiceSummary;
