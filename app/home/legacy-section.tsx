"use client";

import { useInView } from "./use-in-view";

export default function LegacySection() {
  const { ref, inView } = useInView();

  const milestones = [
    {
      year: "1948",
      title: "Company Founded",
      text: "O'Neal Oil & Gas Company was established in Fort Worth, Texas, beginning a legacy of energy excellence.",
    },
    {
      year: "1960s",
      title: "Regional Expansion",
      text: "Expanded operations across multiple legacy basins with a strategic focus on proven reservoirs.",
    },
    {
      year: "1980s",
      title: "Production Growth",
      text: "Achieved significant production milestones through innovative development practices and efficiency improvements.",
    },
    {
      year: "Today",
      title: "Continued Excellence",
      text: "Actively searching for new acquisitions and opportunities that complement our growing property base.",
    },
  ];

  return (
    <section id="legacy" className="section" ref={ref}>
      <div className="container">
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}
          className={inView ? "animate-fade-in-up" : ""}
        >
          <span className="text-label">Our Journey</span>
          <h2 className="heading-lg" style={{ margin: "1rem 0 1rem" }}>
            Building a <span className="text-gradient">Lasting Legacy</span>
          </h2>
          <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
          <p className="text-body">
            Over seven decades of commitment to responsible energy production and
            sustainable growth.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="timeline-container"
          style={{
            position: "relative",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(180deg, var(--color-primary), rgba(212,160,60,0.1))",
              transform: "translateX(-50%)",
            }}
          />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={m.year}
                className={inView ? `animate-fade-in-up delay-${(i + 2) * 100}` : ""}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  position: "relative",
                  marginBottom: i < milestones.length - 1 ? "3rem" : 0,
                  opacity: inView ? undefined : 0,
                }}
              >
                {/* Dot on the line */}
                <div
                  className="timeline-dot"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 24,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    border: "3px solid var(--color-bg-dark)",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    boxShadow: "0 0 12px rgba(212,160,60,0.4)",
                  }}
                />

                <div
                  className="card timeline-card"
                  style={{
                    width: "calc(50% - 3rem)",
                    padding: "2rem",
                  }}
                >
                  <span
                    className="text-gradient"
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {m.year}
                  </span>
                  <h3
                    className="heading-md"
                    style={{ marginBottom: 8, fontSize: "1.15rem" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-body"
                    style={{ fontSize: "0.9rem", marginBottom: 0 }}
                  >
                    {m.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #legacy .timeline-container > div {
            justify-content: flex-end !important;
          }
          #legacy .timeline-line {
            left: 16px !important;
          }
          #legacy .timeline-dot {
            left: 16px !important;
          }
          #legacy .timeline-card {
            width: calc(100% - 3rem) !important;
            margin-left: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
