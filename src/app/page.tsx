import Image from "next/image";
import { sections, lastUpdated } from "../../data/resources";

export default function Home() {
  const visibleSections = sections.filter((s) => s.resources.length > 0);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-16">

        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.jpg"
            alt="inTEC logo"
            width={514}
            height={189}
            className="h-12 w-auto object-contain"
            priority
          />
        </div>

        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Risorse AI
          </h1>
          <p className="text-gray-500 text-base">
            Una raccolta di strumenti, contenuti e community utili per
            esplorare l&#39;intelligenza artificiale.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {visibleSections.map((section) => (
            <section key={section.id}>
              <h2 className="text-lg font-semibold text-blue-600 border-b border-blue-100 pb-2 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.resources.map((resource) => (
                  <li key={resource.url + resource.title}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-300 hover:shadow-sm transition-all duration-150"
                    >
                      <span className="block font-medium text-blue-600 group-hover:text-blue-700">
                        {resource.title}
                      </span>
                      <span className="block text-sm text-gray-500 mt-0.5">
                        {resource.description}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-14 text-xs text-gray-400">
          Ultimo aggiornamento: {lastUpdated}
        </p>
      </div>
    </main>
  );
}
