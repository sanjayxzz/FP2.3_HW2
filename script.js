// Sample Employee Data
const employees = [
  {ID: 1, name: "Alice", experience: 2},
  {ID: 2, name: "Bob", experience: 9},
  {ID: 3, name: "Charlie", experience: 4},
  {ID: 4, name: "John", experience: 19}
];

// Select HTML elements
const employeeListElement = document.querySelector("#employeeList");
const experienceFilterElement = document.querySelector("#experienceFilter");

// Function to render employees based on filter
function renderEmployees(filterExperience = false) {
  // Clear the list before rendering
  employeeListElement.innerHTML = '';

  // Filter employees if checkbox is checked
  const filteredEmployees = filterExperience 
      ? employees.filter(employee => employee.experience > 5) 
      : employees;

  // Render each employee as a list item
  filteredEmployees.forEach(employee => {
      const employeeItem = document.createElement("li");
      employeeItem.innerHTML = `
          <strong>ID:</strong> ${employee.ID} <br>
          <strong>Name:</strong> ${employee.name} <br>
          <strong>Experience:</strong> ${employee.experience} years
          <hr>
      `;
      employeeListElement.appendChild(employeeItem);
  });
}

// Event listener for the checkbox
experienceFilterElement.addEventListener("change", function(e) {
  renderEmployees(e.target.checked);  // Re-render based on filter state
});

// Initial render
renderEmployees();
