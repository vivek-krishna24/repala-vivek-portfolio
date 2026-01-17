export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <p className="text-lg text-blue-100 mb-10">
          I’m open to full-time roles, internships, and collaborations in
          Data Science, Machine Learning, and AI.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:vivekkrishnjob@gmail.com"
              className="underline hover:text-red-300"
            >
              vivekkrishnajob@gmail.com
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/vivek-krishna24/"
              target="_blank"
              className="underline hover:text-red-300"
            >
              linkedin.com/in/vivek-krishna24
            </a>
          </p>

          <p>
            🧑‍💻 GitHub:{" "}
            <a
              href="https://github.com/vivek-krishna24"
              target="_blank"
              className="underline hover:text-red-300"
            >
              github.com/vivek-krishna24
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
