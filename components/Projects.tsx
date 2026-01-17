import FadeInSection from "./FadeInSection";

export default function Projects() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-extrabold text-center mb-14">
            Projects
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Dental Disease Detection (YOLOv8)",
              desc: "Cleaned and merged multi-source dental datasets and trained YOLOv8 object detection models.",
              tech: "Computer Vision · YOLOv8 · Data Quality",
            },
            {
              title: "GenAI Resume Screener",
              desc: "Built an LLM-powered resume screening system using RAG.",
              tech: "LLMs · RAG · NLP",
            },
            {
              title: "Real-time IoT Data Pipeline",
              desc: "Designed a real-time ingestion pipeline using MQTT and MongoDB.",
              tech: "Node.js · MQTT · MongoDB",
            },
            {
              title: "Analytics Dashboards & SQL Modeling",
              desc: "Built SQL data models and dashboards for KPI tracking.",
              tech: "SQL · Power BI · Warehousing",
            },
          ].map((p, i) => (
            <FadeInSection key={i}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-red-300">
                  {p.title}
                </h3>
                <p className="mt-3 text-blue-100">{p.desc}</p>
                <p className="mt-2 text-sm text-blue-200">{p.tech}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
