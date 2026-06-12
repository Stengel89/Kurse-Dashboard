async function ladeKurse() {
  const response = await fetch(
    "https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR,THB,CNY,MYR"
  );

  const data = await response.json();

  const tbody = document.querySelector("#data-table tbody");
  tbody.innerHTML = "";

  const kurse = [
    {
      name: "EUR/USD",
      value: 1 / data.rates.EUR
    },
    {
      name: "USD/THB",
      value: data.rates.THB
    },
    {
      name: "USD/CNY",
      value: data.rates.CNY
    },
    {
      name: "USD/MYR",
      value: data.rates.MYR
    },
    {
      name: "EUR/CNY",
      value: data.rates.CNY / data.rates.EUR
    }
  ];

  kurse.forEach(kurs => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${kurs.name}</td>
      <td>${kurs.value.toFixed(4)}</td>
    `;

    tbody.appendChild(row);
  });
}

ladeKurse();