export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Spider-Man background image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 blur-sm"
        style={{
          backgroundImage: "url('/spiderman.png')",
        }}
      />

      {/* Web pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      {/* Text content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Repala Vivek Krishna
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-medium text-red-200">
          Data Scientist | ML Engineer
        </h2>

        <p className="mt-6 text-lg text-blue-100 leading-relaxed">
          I build machine learning and analytics systems with a strong focus on
          clean data pipelines, computer vision, and decision-driven insights.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <a
            href="https://github.com/vivek-krishna24"
            target="_blank"
            className="px-7 py-3 rounded-xl bg-red-600 hover:bg-red-500 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-krishna24/"
            target="_blank"
            className="px-7 py-3 rounded-xl bg-white text-blue-900 hover:bg-blue-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
          >
            LinkedIn
          </a>
           <a
              href="/Vivek_Krishna_Repala_Resume.pdf"
              target="_blank"
              className="px-7 py-3 rounded-xl bg-red-600 hover:bg-red-500 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
            >
              Download Resume
            </a>
        </div>
      </div>
    </section>
  );
}
