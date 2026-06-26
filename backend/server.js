const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Bitte alle Felder ausfüllen."
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, message]
    );

    res.status(201).json({
      success: true,
      message: "Nachricht wurde gespeichert.",
      data: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Serverfehler beim Speichern."
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend läuft.");
});

app.get("/api/messages", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contact_messages ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Nachrichten konnten nicht geladen werden."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});