export default function MissionVision() {
  return (
    <section
      className="section mission-section"
      style={{
        backgroundImage: "url('/prism-mission-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mission-grid">
        <article>
          <span>Mission</span>
          <h2>
            Make building a fashion brand simpler, clearer, and more
            professional.
          </h2>
          <p>
            We unite strategy, creative development, production, branding, and
            digital launch through one trusted partner.
          </p>
        </article>
        <article>
          <span>Vision</span>
          <h2>
            Build the leading fashion entrepreneurship ecosystem in the Middle
            East.
          </h2>
          <p>
            We want ambitious founders to access the structure, expertise, and
            production capability required to create brands built to last.
          </p>
        </article>
      </div>
    </section>
  );
}
