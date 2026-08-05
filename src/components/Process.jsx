const steps = [
  ["01", "Discover", "We understand your vision, audience, budget, and launch goals."],
  ["02", "Plan", "We define the brand, collection, product mix, and production roadmap."],
  ["03", "Create", "We develop the identity, garments, technical files, and samples."],
  ["04", "Produce", "We source, coordinate, inspect, and prepare the finished collection."],
  ["05", "Launch", "We build the store, content, and strategy required to start selling."],
];

export default function Process() {
  return (
    <section className="section section--light" id="process">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">The PRISM process</p><h2>A clear system from first conversation to first sale.</h2></div>
        <div className="process-list">
          {steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
