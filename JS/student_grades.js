// Function that builds the grade table. It runs when the button is clicked.
function showGradeEquivalent() {

  // Array of student names
  let students = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];

  // Array of student grades (same order as the names above)
  let grades = [92, 85, 78, 97, 74];

  // Start the output table with the headers
  let output = "<h2>Grade Equivalents</h2>";
  output += "<table>";
  output += "<tr>";
  output += "<th>Student Name</th>";
  output += "<th>Grade</th>";
  output += "<th>Equivalent</th>";
  output += "<th>Remark</th>";
  output += "<th>Academic Leader</th>";
  output += "</tr>";

  // Loop through the arrays: one round for each student
  for (let i = 0; i < students.length; i++) {

    // Pass the grade of the student to getEquivalent() and getRemark()
    let equivalent = getEquivalent(grades[i]);
    let remark = getRemark(grades[i]);

    // Pass the equivalent value to getAcademicLeader()
    let leader = getAcademicLeader(equivalent);

    // Add a new table row for this student
    output += "<tr>";
    output += "<td>" + students[i] + "</td>";
    output += "<td>" + grades[i] + "</td>";   // grade
    output += "<td>" + equivalent + "</td>";  // equivalent value
    output += "<td>" + remark + "</td>";      // remark value
    output += "<td>" + leader + "</td>";      // academic class
    output += "</tr>";
  }

  output += "</table>";

  // Show the output in HTML
  document.getElementById("result").innerHTML = output;
}

function getRemark(grade) {

  // Ternary operator
  let remark = (grade >= 75) ? "Passed" : "Failed";

  return remark;
}

function getEquivalent(grade) {

  /*
    The getEquivalent() function converts a student's numerical grade
    into its grade equivalent.

    It uses if...else if conditional statements to check the grade range
    and assign the corresponding equivalent.

    A grade of 75 is equivalent to 3.0, while grades below 75
    are marked as Failed.
  */
  let equivalent = "";

  if (grade >= 97) {
    equivalent = "1.0";
  } else if (grade >= 94) {
    equivalent = "1.25";
  } else if (grade >= 91) {
    equivalent = "1.5";
  } else if (grade >= 88) {
    equivalent = "1.75";
  } else if (grade >= 85) {
    equivalent = "2.0";
  } else if (grade >= 82) {
    equivalent = "2.25";
  } else if (grade >= 79) {
    equivalent = "2.5";
  } else if (grade >= 76) {
    equivalent = "2.75";
  } else if (grade >= 75) {
    equivalent = "3.0";
  } else {
    equivalent = "Failed";
  }

  return equivalent;
}

function getAcademicLeader(equivalent) {

  /*
    The getAcademicLeader() function determines the Academic Leader
    classification based on the student's grade equivalent.

    It uses a switch statement to check the equivalent value.

    Equivalents of 1.0 and 1.25 are classified as 1st Class Academic Leader,
    1.5 as 2nd Class Academic Leader, and 1.75 as 3rd Class Academic Leader.

    All other equivalents are marked with "-" because they do not qualify
    for an Academic Leader classification.
  */

  let leader = "";

  switch (equivalent) {

    case "1.0":
    case "1.25":
      leader = "1st Class Academic Leader";
      break;

    case "1.5":
      leader = "2nd Class Academic Leader";
      break;

    case "1.75":
      leader = "3rd Class Academic Leader";
      break;

    default:
      leader = "-";
  }

  return leader;
}