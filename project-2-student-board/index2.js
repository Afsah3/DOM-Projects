// Students array

let students = [
    {name: "Aline", course: "Frontend", score: 90},
    {name: "Eric", course: "Backend", score: 45},
    {name: "Grace", course: "Frontend", score: 85},
    {name: "Jean", course: "Backend", score: 70},
    {name: "Diane", course: "Frontend", score: 95},
    {name: "Patrick", course: "Frontend", score: 40}
];


// Sorting a copy of the array
let sortedStudents = [...students].sort(function(a, b) {

    if (a.course === "Frontend" && b.course !== "Frontend") {
        return -1;
    }

    if (a.course !== "Frontend" && b.course === "Frontend") {
        return 1;
    }

    return 0;
});


let container = document.getElementById("student-container");


// Render students

for (let i = 0; i < sortedStudents.length; i++) {

    let student = sortedStudents[i];

    let card = document.createElement("div");

    card.classList.add("card");


    // Highlight score >= 80
    if (student.score >= 80) {
        card.classList.add("high-score");
    }


    let scoreClass = "";

    // Failed score < 50
    if (student.score < 50) {
        scoreClass = "red";
    }


    card.innerHTML = `
        <h2>${student.name}</h2>
        <p>Course: ${student.course}</p>
        <p class="${scoreClass}">
            Score: ${student.score}
        </p>
    `;


    container.appendChild(card);
}



// Count students

let count = students.length;


// Calculating average

let total = 0;

for (let i = 0; i < students.length; i++) {
    total += students[i].score;
}

let average = total / count;



// Finding top students

let highest = students[0].score;
let topStudents = [];


for (let i = 0; i < students.length; i++) {

    if (students[i].score > highest) {
        highest = students[i].score;
        topStudents = [students[i].name];
    }

    else if (students[i].score === highest) {
        topStudents.push(students[i].name);
    }
}



// Displaying summary

let summary = document.getElementById("summary");

summary.innerHTML = `
    <h3>Statistics</h3>
    <p>Total Students: ${count}</p>
    <p>Average Score: ${average}</p>
    <p>Top Student(s): ${topStudents.join(", ")}</p>
`;