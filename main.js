var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skill = document.getElementById("skill").value;
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(number, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n    \n    <h3>Skill</h3>\n    <p contenteditable=\"true\">").concat(skill, "</p>\n    ");
    if (resumedisplay) {
        resumedisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
