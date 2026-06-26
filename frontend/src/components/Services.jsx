const services = [
  {
    title: "Webdesign",
    text: "Moderne und responsive Webseiten mit sauberer Struktur."
  },
  {
    title: "CMS Integration",
    text: "Templates und Module einfach, flexibel und sauber integrieren."
  },
  {
    title: "Support",
    text: "Pflege, Anpassungen und Weiterentwicklung bestehender Seiten."
  }
];

function Services() {
  return (
    <section id="services" className="section">
      <h2>Leistungen</h2>

      <div className="cards">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;