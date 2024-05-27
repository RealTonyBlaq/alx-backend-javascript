/* Define the student interface */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "San Francisco",
};
  
/* Create an array of students */
const studentsList: Student[] = [student1, student2];
  
/* Function to render the table */
function renderTable() {
  const tableElement = document.createElement("table");

  studentsList.forEach((student) => {
    const rowElement = document.createElement("tr");
  
    /* Create a cell for the first name */
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
      rowElement.appendChild(firstNameCell);
  
      // Create a cell for the location
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      rowElement.appendChild(locationCell);
  
      // Add the row to the table
      tableElement.appendChild(rowElement);
    });
  
    // Append the table to the document
    document.body.appendChild(tableElement);
  }
  
  // Call the renderTable function to display the table
  renderTable();
