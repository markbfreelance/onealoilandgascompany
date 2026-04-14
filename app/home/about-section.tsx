"use client";

import Image from "next/image";
import { useInView } from "./use-in-view";

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section" ref={ref}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Image side */}
        <div
          className={inView ? "animate-slide-left" : ""}
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            opacity: inView ? undefined : 0,
          }}
        >
          <Image
            src="/about-bg.png"
            alt="O'Neal Oil and Gas operations"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.5) 100%)",
            }}
          />
          {/* Gold accent corner */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 80,
              height: 80,
              borderLeft: "3px solid var(--color-primary)",
              borderBottom: "3px solid var(--color-primary)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 80,
              height: 80,
              borderRight: "3px solid var(--color-primary)",
              borderTop: "3px solid var(--color-primary)",
            }}
          />
        </div>

        {/* Text side */}
        <div
          className={inView ? "animate-slide-right delay-200" : ""}
          style={{ opacity: inView ? undefined : 0 }}
        >
          <span className="text-label">Who We Are</span>
          <h2
            className="heading-lg"
            style={{ margin: "1rem 0 1.5rem" }}
          >
            A Legacy Built on{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
          <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
          <p className="text-body" style={{ marginBottom: "1.25rem" }}>
            O&apos;Neal Oil &amp; Gas Company is a family-owned independent oil
            and natural gas company involved in the acquisition, exploration,
            development, and production of oil and natural gas properties.
          </p>
          <p className="text-body" style={{ marginBottom: "1.25rem" }}>
            Founded in 1948, O&apos;Neal has stood for excellence and a commitment
            to improving the value and life of its assets. The company
            accomplishes this through an entrepreneurial vision and perpetual
            focus on increasing the value and life of its production.
          </p>
          <p className="text-body" style={{ marginBottom: "2rem" }}>
            The key strategic focus is on established reservoirs in legacy basins
            with multiple-producing zones that have great upside potential. Our
            operating practices and efficiencies allow for an increase in the
            recovery factor of the captured resource, resulting in a history of
            low-risk, high-value projects.
          </p>
          <a href="#services" className="btn-outline" id="about-cta">
            Explore Our Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #about .container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
