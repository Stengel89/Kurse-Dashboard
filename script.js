const data = [
  { name: "Apple", price: 180 },
  { name: "Google", price: 140 },
  { name: "EUR/USD", price: 1.09 }
];

const tableBody = document.querySelector("#data-table tbody");

data.forEach(item => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.price}</td>
  `;

  tableBody.appendChild(row);
});