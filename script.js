const kurse = [
  { name: "Apple", kategorie: "Aktie", kurs: 195.20, waehrung: "USD" },
  { name: "Microsoft", kategorie: "Aktie", kurs: 420.50, waehrung: "USD" },
  { name: "EUR/USD", kategorie: "Wechselkurs", kurs: 1.08, waehrung: "USD" },
  { name: "EUR/GBP", kategorie: "Wechselkurs", kurs: 0.85, waehrung: "GBP" }
];

const tabelle = document.getElementById("kursTabelle");

kurse.forEach(eintrag => {
  const zeile = document.createElement("tr");

  zeile.innerHTML = `
    <td>${eintrag.name}</td>
    <td>${eintrag.kategorie}</td>
    <td>${eintrag.kurs}</td>
    <td>${eintrag.waehrung}</td>
  `;

  tabelle.appendChild(zeile);
});