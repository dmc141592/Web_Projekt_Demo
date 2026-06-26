# Web Projekt Demo

Eine moderne Demo-Webseite für kleine Unternehmen mit responsive Design, FAQ-Bereich, Projektfilterung und Kontaktformular.

Das Projekt verwendet:

* HTML5
* CSS3
* JavaScript (jQuery)
* Node.js
* Express.js
* PostgreSQL

---

## Features

* Responsive Landingpage
* FAQ mit ausklappbaren Antworten
* Projektfilter nach Kategorien
* Scroll-to-Top Button
* Kontaktformular mit Backend-Anbindung
* Speicherung von Kontaktanfragen in PostgreSQL

---

## Projektstruktur

```text
web-demo/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── index.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── database.sql
│   ├── package.json
│   └── .env
```

---

## Voraussetzungen

Vor dem Start müssen folgende Programme installiert sein:

* Node.js
* npm
* PostgreSQL

---

## Installation

### Repository klonen

```bash
git clone <repository-url>
cd web-demo
```

### Backend-Abhängigkeiten installieren

```bash
cd backend
npm install
```

---

## PostgreSQL einrichten

### PostgreSQL starten

Mit dem PostgreSQL-Benutzer anmelden:

```bash
psql -U postgres
```

### Datenbank erstellen

```sql
CREATE DATABASE web_demo;
```

Mit der Datenbank verbinden:

```sql
\c web_demo
```

### Tabelle erstellen

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Umgebungsvariablen

Im Backend-Verzeichnis eine Datei `.env` erstellen:

```env
PORT=3000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=web_demo
DB_PASSWORD=YOUR_PASSWORD
DB_PORT=5432
```

---

## Backend starten

Im Verzeichnis `backend`:

```bash
npm start
```

Der Server läuft anschließend unter:

```text
http://localhost:3000
```

---

## API Endpoints

### Kontaktformular absenden

```http
POST /api/contact
```

Request Body:

```json
{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "message": "Hallo Welt"
}
```

---

### Gespeicherte Nachrichten abrufen

```http
GET /api/messages
```

---

## Datenbank überprüfen

Alle gespeicherten Nachrichten anzeigen:

```sql
SELECT * FROM contact_messages;
```

---

## Verwendete Technologien

| Technologie | Beschreibung          |
| ----------- | --------------------- |
| HTML5       | Struktur der Webseite |
| CSS3        | Styling und Layout    |
| JavaScript  | Frontend-Logik        |
| jQuery      | DOM-Manipulation      |
| Node.js     | Backend-Laufzeit      |
| Express.js  | REST API              |
| PostgreSQL  | Datenbank             |

---

## Zukünftige Erweiterungen

* Admin-Dashboard
* Benutzerverwaltung
* Authentifizierung mit JWT
* E-Mail-Versand über SMTP
* Upload von Dateien
* Docker-Unterstützung
* Deployment auf VPS oder Cloud

---

## Lizenz

Dieses Projekt dient als Lern- und Demonstrationsprojekt.

Feel free to use, modify and improve it.
