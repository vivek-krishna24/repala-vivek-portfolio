export default function Projects() {
  const projects = [
    {
      title: "Dental Disease Detection (YOLOv8)",
      desc: "Cleaned and merged multi-source dental datasets and trained YOLOv8 object detection models.",
      tech: "Computer Vision · YOLOv8 · Data Quality",
    },
    {
      title: "GenAI Resume Screener",
      desc: "Built an LLM-powered resume screening system using Retrieval-Augmented Generation.",
      tech: "LLMs · RAG · NLP",
    },
    {
      title: "Real-time IoT Data Pipeline",
      desc: "Designed a real-time ingestion pipeline using MQTT and MongoDB for streaming sensor data.",
      tech: "Node.js · MQTT · MongoDB",
    },
    {
      title: "Analytics Dashboards & SQL Modeling",
      desc: "Built SQL data models and dashboards for KPI tracking and business reporting.",
      tech: "SQL · Power BI · Warehousing",
    },
    {
      title: "Live Machine Learning App – Sentiment Analysis",
      desc: "Built a real-time sentiment analysis web application that performs live ML inference on user input.",
      tech: "Machine Learning · NLP · Real-time Inference",
    },
    {
      title: "Multi-Agent System with LangGraph",
      desc: "Designed and implemented a multi-agent AI system using LangGraph with task coordination and tool usage.",
      tech: "LangGraph · Multi-Agent Systems · LLMs",
    },
  ];

  // Duplicate projects for infinite scroll
  const scrollingProjects = [...projects, ...projects];

  return (
    <section className="py-24 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-14">
        Projects
      </h2>

      {/* Auto scrolling container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 auto-scroll w-max px-6">
          {scrollingProjects.map((p, i) => (
            <a
              key={i}
              href="https://github.com/vivek-krishna24"
              target="_blank"
              className="min-w-[320px] md:min-w-[380px]
                         bg-white/10 backdrop-blur rounded-2xl p-6
                         border border-white/20
                         hover:-translate-y-2 hover:bg-white/15
                         hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-red-300">
                {p.title}
              </h3>

              <p className="mt-3 text-blue-100 leading-relaxed">
                {p.desc}
              </p>

              <p className="mt-2 text-sm text-blue-200">
                {p.tech}
              </p>

              <p className="mt-4 text-xs text-blue-300">
                Click to view on GitHub →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
