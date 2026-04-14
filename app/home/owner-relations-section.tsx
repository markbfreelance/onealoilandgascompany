"use client";

import Image from "next/image";
import { useInView } from "./use-in-view";

export default function OwnerRelationsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="owner-relations"
      className="section"
      ref={ref}
      style={{
        background: "var(--color-bg-surface)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div
            className={inView ? "animate-fade-in-up" : ""}
            style={{ opacity: inView ? undefined : 0 }}
          >
            <span className="text-label">For Our Partners</span>
            <h2 className="heading-lg" style={{ margin: "1rem 0 1.5rem" }}>
              Owner <span className="text-gradient">Relations</span>
            </h2>
            <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
            <p className="text-body" style={{ marginBottom: "2rem" }}>
              We value our relationships with mineral and royalty interest
              owners. Our dedicated Owner Relations team is here to assist you
              with any inquiries regarding your interests.
            </p>

            <div
              className="card"
              style={{
                padding: "1.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                    fontWeight: 600,
                  }}
                >
                  Contact
                </div>
                <a
                  href="mailto:OwnerRelations@ONealOil.com"
                  id="owner-email-link"
                  style={{
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary)")
                  }
                >
                  OwnerRelations@ONealOil.com
                </a>
              </div>
              <hr className="divider" />
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                    fontWeight: 600,
                  }}
                >
                  Change of Address
                </div>
                <a
                  href="https://www.onealoilandgas.com/_files/ugd/5be48c_aa576804f9bd45759a5905fa82cd47a0.pdf"
                  id="change-address-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    marginTop: 8,
                    padding: "0.625rem 1.25rem",
                    fontSize: "0.75rem",
                  }}
                >
                  Download Form
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 14h12M8 2v8m0 0l3-3m-3 3L5 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Visual accent */}
          <div
            className={inView ? "animate-scale-in delay-300" : ""}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: inView ? undefined : 0,
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 400,
                aspectRatio: "1",
                borderRadius: "50%",
                background: "var(--gradient-radial)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Inner ring */}
              <div
                style={{
                  width: "70%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "65%",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                    textAlign: "center",
                    boxShadow: "var(--shadow-gold)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="O'Neal Oil & Gas Company"
                    width={200}
                    height={100}
                  />
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                    }}
                  >
                    Since 1948
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #owner-relations .container > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
