async function ladeKurse() {
  const tbody = document.querySelector("#data-table tbody");

  try {
    const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,THB,CNY,MYR");

    if (!response.ok) {
      throw new Error("API Fehler");
    }

    const data = await response.json();

    const kurse = [
      { name: "EUR/USD", value: 1 / data.rates.EUR },
      { name: "USD/THB", value: data.rates.THB },
      { name: "EUR/CNY", value: data.rates.CNY / data.rates.EUR },
      { name: "USD/CNY", value: data.rates.CNY },
      { name: "USD/MYR", value: data.rates.MYR }
    ];

    tbody.innerHTML = "";

    kurse.forEach(kurs => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${kurs.name}</td>
        <td>${kurs.value.toFixed(4)}</td>
      `;

      tbody.appendChild(row);
    });

  } catch (error) {
    tbody.innerHTML = `
      <tr>
        <td colspan="2">Kurse konnten nicht geladen werden</td>
      </tr>
    `;
    console.error(error);
  }
}

ladeKurse();