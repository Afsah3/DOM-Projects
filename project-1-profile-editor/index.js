// 1. Changing the page <title> and <h1> to your name
document.title = "Afsa UWASE";

let heading = document.getElementsByTagName('h1');
heading[0].innerHTML = "Afsa UWASE";


// 2. Setting the profile image src and alt
let profileImage = document.getElementById("profile-image");

profileImage.src = "./Aa.jpeg";
profileImage.alt = "Photo of Afsa";


// 3. Adding class "active" to the first navigation link
let navLinks = document.getElementsByTagName("a");
navLinks[0].classList.add("active");


// 4. Adding skills from an array 
let skills = ["HTML", "CSS", "JavaScript"];

let skillsList = document.getElementById("skills");

for (let i = 0; i < skills.length; i++) {
    let newSkill = document.createElement("li");
    newSkill.innerHTML = skills[i];
    skillsList.appendChild(newSkill);
}


// 5. Displaying today's date in the footer
let footer = document.getElementById("footer");

footer.innerHTML = "Last updated: " + new Date().toLocaleDateString();