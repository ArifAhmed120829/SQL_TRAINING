document.addEventListener("DOMContentLoaded", function () {
   fetch("http://localhost:5256/api/company") // Adjust the URL if needed
       .then(response => response.json())
       .then(data => {
           const tableBody = document.getElementById("company-table");
           tableBody.innerHTML = ""; // Clear table before inserting new data

           data.forEach(company => {
               let row = `<tr>
                   <td>${company.ComId}</td>
                   <td>${company.ComName}</td>
                   <td>${company.Basic}</td>
                   <td>${company.Hrent}</td>
                   <td>${company.Medical}</td>
                   <td>${company.IsInactive}</td>
               </tr>`;
               tableBody.innerHTML += row;
           });
       })
       .catch(error => console.error("Error fetching data:", error));
});
