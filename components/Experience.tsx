import FadeInSection from "./FadeInSection";

export default function Experience() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Experience
          </h2>
        </FadeInSection>

        <div className="relative border-l border-white/20 pl-8 space-y-16">
          {/* ReplyQuickAI */}
          <FadeInSection>
            <div className="relative">
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-purple-400 border-4 border-white/20" />
              <h3 className="text-xl font-semibold text-red-300">
                Machine Learning Engineer
              </h3>
              <p className="text-sm text-blue-200">
                ReplyQuickAI · USA
              </p>
              <p className="mt-3 text-blue-100 leading-relaxed">
                Built and deployed machine learning and GenAI solutions,
                including LLM-based pipelines. Focused on data preprocessing,
                model evaluation, and integrating AI features into production
                systems.
              </p>
            </div>
          </FadeInSection>
          {/* Honeywell */}
          <FadeInSection>
            <div className="relative">
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-red-500 border-4 border-white/20" />
              <h3 className="text-xl font-semibold text-red-300">
                Data Scientist Intern
              </h3>
              <p className="text-sm text-blue-200">
                Honeywell · USA
              </p>
              <p className="mt-3 text-blue-100 leading-relaxed">
                Worked on data-driven analytics and modeling tasks to support
                business decision-making. Built and validated datasets, applied
                machine learning techniques, and collaborated with cross-functional
                teams to improve insights and reporting accuracy.
              </p>
            </div>
          </FadeInSection>

          {/* Amadeus */}
          <FadeInSection>
            <div className="relative">
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-blue-400 border-4 border-white/20" />
              <h3 className="text-xl font-semibold text-red-300">
                Data Analyst Intern
              </h3>
              <p className="text-sm text-blue-200">
                Amadeus · IND
              </p>
              <p className="mt-3 text-blue-100 leading-relaxed">
                Analyzed large datasets using SQL and Python to identify trends
                and performance gaps. Designed dashboards and reports that helped
                stakeholders track KPIs and operational metrics.
              </p>
            </div>
          </FadeInSection>


        </div>
      </div>
    </section>
  );
}
