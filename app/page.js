import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BounceLoader from "@/components/mvpblocks/bouncing-loader";

// Lazy-load the main sections
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const FAQ = lazy(() => import("./Components/Faq"));
const Team = lazy(() => import("./Components/Team"));
const Contact = lazy(() => import("./Components/Contact"));

export default function QuizGameApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div className="h-screen flex justify-center items-center">
              <BounceLoader />
            </div>
          }
        >
          <Hero />
          <About />
          <FAQ />
          <Team />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
