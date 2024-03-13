//"use strict";
/**
 * Create an interface named Student that accepts the following elements:
 * firstName(string), lastName(string), age(number)
 * and location(string)
 */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}
/**
 * creates two objects, Student1 and Student2, 
 * adhering to the structure defined by the Student interface.
 * Finally, it creates an array studentsList containing these two objects.
 */
const Student1: Student = {
  firstName: 'Felix',
  lastName: 'Sindani',
  age: 32,
  location: 'Kitale',
};

const Student2: Student = {
  firstName: 'Martin',
  lastName: 'Luther',
  age: 29,
  location: 'Imara Daima',
};

const studentsList: Student[] = [Student1, Student2];

const styleSheet = `
* {
    margin: 0;
    box-sizing: border-box;
}
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
}
table {
    border-collapse: collapse;
}
thead {
    font-weight: bold;
    background-color: blue;
    color: white;
}
td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
}
td:hover {
    background: gainsboro;
}
td:nth-child(1) {
    text-align: center;
}
tbody tr:nth-child(even) {
    background-color: #f4f4f4;
}
`;

export const showStudent = (students: Array<Student>): void => {
  const body = document.querySelector('body');

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headTr = document.createElement('tr');

  headTr.innerHTML = '<td>Name</td> <td>Location</td>';

  thead.appendChild(headTr);

  for (const student of students) {
    const bodyTr = document.createElement('tr');
    bodyTr.innerHTML = `<td>${student.firstName}</td> <td>${student.location}</td>`;
    tbody.appendChild(bodyTr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(style);
  document.body.appendChild(table);
};

showStudent(studentsList);
document.title = 'Task 0';
const style = document.createElement('style');
style.innerHTML = styleSheet;
document.head.appendChild(style);
