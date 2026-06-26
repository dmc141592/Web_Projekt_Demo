import { useState } from "react";
import "./App.css";

function App() {
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      setFormMessage("Nachricht erfolgreich gespeichert.");
      e.target.reset();
    } else {
      setFormMessage("Fehler beim Senden.");
    }
  }

  return (
    <section id="contact" className="section">
      <h2>Kontakt</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="email" placeholder="E-Mail" />
        <textarea name="message" placeholder="Nachricht"></textarea>
        <button type="submit" className="btn">Senden</button>
        <p>{formMessage}</p>
      </form>
    </section>
  );
}

export default App;