import { useState } from "react";

function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      message: formData.get("message").trim()
    };

    if (!data.name || !data.email || !data.message) {
      setIsError(true);
      setFormMessage("Bitte alle Felder ausfüllen.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setIsError(false);
        setFormMessage("Nachricht erfolgreich gespeichert.");
        e.target.reset();
      } else {
        setIsError(true);
        setFormMessage(result.error || "Fehler beim Senden.");
      }
    } catch (error) {
      setIsError(true);
      setFormMessage("Backend nicht erreichbar.");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <h2>Kontakt</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="email" placeholder="E-Mail" />
        <textarea name="message" placeholder="Nachricht"></textarea>

        <button type="submit" className="btn">
          Senden
        </button>

        {formMessage && (
          <p className={isError ? "form-message error" : "form-message success"}>
            {formMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;