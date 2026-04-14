"use client";

import { useInView } from "./use-in-view";

export default function ServicesSection() {
  const { ref, inView } = useInView();

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 6v20M6 16h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "Acquisition",
      description:
        "Strategic identification and acquisition of proven oil and gas properties in legacy basins with significant upside potential.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 28H4L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 12v8M16 24v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Exploration",
      description:
        "Advanced geological and geophysical evaluation techniques to discover new reserves within established producing regions.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 20l7-7 5 5 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Development",
      description:
        "Efficient development programs designed to maximize recovery factors and extend the productive life of assets.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 28V12l10-8 10 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 28V18h8v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: "Production",
      description:
        "Optimized production operations ensuring consistent output, cost efficiency, and environmental responsibility.",
    },
  ];

  return (
    <section
      id="services"
      className="section noise-overlay"
      ref={ref}
      style={{
        background: "var(--gradient-dark)",
        position: "relative",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}
          className={inView ? "animate-fade-in-up" : ""}
        >
          <span className="text-label">Our Expertise</span>
          <h2 className="heading-lg" style={{ margin: "1rem 0 1rem" }}>
            Full-Spectrum{" "}
            <span className="text-gradient">Energy Operations</span>
          </h2>
          <div
            className="gold-line"
            style={{ margin: "0 auto 1.5rem" }}
          />
          <p className="text-body">
            From acquisition through production, we apply decades of expertise to
            every phase of the oil and gas lifecycle.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`card ${inView ? `animate-fade-in-up delay-${(i + 2) * 100}` : ""}`}
              style={{
                opacity: inView ? undefined : 0,
                padding: "2.5rem 2rem",
              }}
            >
              <div
                style={{
                  color: "var(--color-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                {s.icon}
              </div>
              <h3
                className="heading-md"
                style={{ marginBottom: "0.75rem", fontSize: "1.25rem" }}
              >
                {s.title}
              </h3>
              <p className="text-body" style={{ fontSize: "0.95rem" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
