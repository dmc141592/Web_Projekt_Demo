import { useState } from "react";

const faqs = [
  {
    question: "Wie lange dauert ein Webprojekt?",
    answer: "Je nach Umfang zwischen einigen Tagen und mehreren Wochen."
  },
  {
    question: "Ist die Webseite responsive?",
    answer: "Ja, die Webseite ist für Desktop, Tablet und Mobile optimiert."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section">
      <h2>FAQ</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={faq.question}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;