import React from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary.jsx";
import Services from "./sections/Services.jsx";
import About from "./sections/About.jsx";
import Works from "./sections/Works.jsx";
import ContactSummary from "./sections/ContactSummary.jsx";
import Contact from "./sections/Contact.jsx";

// The page renders straight away; the 3D planet loads in the background and
// drops in when it is ready (see Hero), instead of holding the page behind a loader.
const App = () => {
    return (
        <ReactLenis root>
            <Navbar />
            <main>
                <Hero />
                <ServiceSummary />
                <Services />
                <About />
                <Works />
                <ContactSummary />
                <Contact />
            </main>
        </ReactLenis>
    );
};

export default App;
