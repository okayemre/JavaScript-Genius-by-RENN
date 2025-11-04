
// Create an array of question objects.
// Each question should contain:
// - question text
// - array of answer options with text and a "correct" boolean
// Example structure:

const questions = [
  {
    question: " Was ist JavaScript?",
    answers: [
      { text: "Datenbank für Webseiten", correct: false },
      { text: "Eine Programmiersprache für Webseiten.", correct: true },
      { text: "", correct: false }
    ]
  },
   {
    question: " Wann wurde JavaScript erfunden?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "JavaScript wurde im Jahr 1995 erfunden.", correct: true },
      { text: "Database management", correct: false }
    ]
  },

   {
    question: " Wer hat JavaScript erfunden?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: " Brendan Eich", correct: true },
      { text: "Database management", correct: false }
    ]
  },
  {
    question: "Für welche Firma arbeitete er damals?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: " Netscape", correct: true },
      { text: "Database management", correct: false }
    ]
  },
  {
    question: " Wie lange hat die Entwicklung der ersten Version von JavaScript gedauert?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Erstaunlicherweise nur 10 Tage – Brendan Eich schrieb die erste Version in nur zehn Tagen im Mai 1995.", correct: true },
      { text: "Database management", correct: false }
    ]
  },
 {
    question: " Wie hieß JavaScript zuerst?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Mocha, später LiveScript, dann JavaScript", correct: true },
      { text: "Database management", correct: false }
    ]
  },
  {
    question: "  Warum wurde JavaScript erfunden?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Um Webseiten interaktiver zu machen", correct: true },
      { text: "Database management", correct: false }
    ]
  },
  {
    question: "  Ist JavaScript das gleiche wie Java?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Nein, das sind zwei verschiedene Sprachen.", correct: true },
      { text: "Database management", correct: false }
    ]
  },
 {
    question: " Was ist ein String?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Ein Text in Anführungszeichen", correct: true },
      { text: "Database management", correct: false }
    ]
  },
  {
    question: " Was ist ein Boolean?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Ein Wert, der nur wahr (true) oder falsch (false) sein kann", correct: true },
      { text: "Database management", correct: false }
    ]
  },
 


];



const quizQuestions = [
  {
    question: "Was ist ein Algorithmus?",
    answers: [
      { text: "Eine feste Speicheradresse", correct: false },
      { text: "Eine genaue Abfolge von Schritten zur Problemlösung", correct: false },
      { text: "Ein Computerfehler", correct: false },
      { text: "Ein Hardware-Bauteil", correct: false }
    ]
  },
  {
    question: "Was macht ein Compiler?",
    answers: [
      { text: "Er übersetzt Quellcode in Maschinensprache", correct: false },
      { text: "Er verwaltet Dateien im Betriebssystem", correct: false },
      { text: "Er testet Programme automatisch", correct: false },
      { text: "Er verschlüsselt Daten für den Versand", correct: false }
    ]
  },
  {
    question: "Was ist eine Variable in der Programmierung?",
    answers: [
      { text: "Ein Speicherort für Datenwerte", correct: false },
      { text: "Ein spezieller HTML-Tag", correct: false },
      { text: "Eine Netzwerkverbindung", correct: false },
      { text: "Ein Fehlerprotokoll", correct: false }
    ]
  },
  {
    question: "Was ist der Zweck von HTML?",
    answers: [
      { text: "Erstellung von Webseiten-Strukturen", correct: false },
      { text: "Entwicklung von Betriebssystemen", correct: false },
      { text: "Datenbankabfragen schreiben", correct: false },
      { text: "Mobile Apps kompilieren", correct: false }
    ]
  },
  {
    question: "Was bedeutet CSS?",
    answers: [
      { text: "Cascading Style Sheets", correct: false },
      { text: "Central System Software", correct: false },
      { text: "Creative Styling Syntax", correct: false },
      { text: "Computer Server System", correct: false }
    ]
  },
  {
    question: "Was ist JavaScript?",
    answers: [
      { text: "Eine Programmiersprache zur Steuerung von Webseiten", correct: false },
      { text: "Ein Grafikprogramm", correct: false },
      { text: "Ein Texteditor", correct: false },
      { text: "Ein Serverbetriebssystem", correct: false }
    ]
  },
  {
    question: "Was ist ein Array?",
    answers: [
      { text: "Eine geordnete Sammlung mehrerer Werte", correct: false },
      { text: "Ein einzelner Zahlenwert", correct: false },
      { text: "Ein HTML-Tag", correct: false },
      { text: "Ein Netzwerkprotokoll", correct: false }
    ]
  },
  {
    question: "Wofür steht die Abkürzung SQL?",
    answers: [
      { text: "Structured Query Language", correct: false },
      { text: "System Query Logic", correct: false },
      { text: "Simple Question Layout", correct: false },
      { text: "Software Query Line", correct: false }
    ]
  },
  {
    question: "Was versteht man unter Open Source Software?",
    answers: [
      { text: "Software mit offenem Quellcode", correct: false },
      { text: "Software, die man kostenlos testen kann", correct: false },
      { text: "Software nur für Windows-Systeme", correct: false },
      { text: "Software mit eingeschränkter Nutzung", correct: false }
    ]
  },
  {
    question: "Was ist der Zweck einer IP-Adresse?",
    answers: [
      { text: "Eindeutige Identifikation eines Geräts im Netzwerk", correct: false },
      { text: "Speicherung von Dateien im Internet", correct: false },
      { text: "Sicherung der Benutzerkonten", correct: false },
      { text: "Erhöhung der Rechenleistung", correct: false }
    ]
  }
];
