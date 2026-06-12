console.log("JavaScript läuft");

const tbody = document.querySelector("#data-table tbody");

const row = document.createElement("tr");

row.innerHTML = `
  <td>TEST</td>
  <td>1234</td>
`;

tbody.appendChild(row);