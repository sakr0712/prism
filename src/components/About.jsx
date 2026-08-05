export default function About() {
  return (
    <section
      className="section about-section"
      id="about"
      style={{
        backgroundImage: "url('/prism-about-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container about-grid">
        <p className="eyebrow">About PRISM</p>
        <div>
          <h2>From one idea to a complete fashion brand.</h2>
          <p>
            Launching a fashion label usually means coordinating strategists,
            designers, suppliers, factories, photographers, developers, and
            marketers. PRISM brings the entire journey under one system.
          </p>
          <p>
            We help founders move from uncertainty to a clear, production-ready,
            launch-ready business—with one accountable partner at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}
