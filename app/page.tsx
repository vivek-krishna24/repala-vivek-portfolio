import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import SmoothScroll from "../components/SmoothScroll";
import WebScene from "../components/WebScene";

export default function Home() {
  return (
    <SmoothScroll>
      <>
        {/* 3D Background */}
        <WebScene />

        {/* Main Content */}
        <main className="relative z-10 min-h-screen bg-gradient-to-br from-red-600 via-blue-700 to-blue-900 text-white space-y-32">
          <Hero />
          <Projects />
          <Experience />
        </main>
      </>
    </SmoothScroll>
  );
}
