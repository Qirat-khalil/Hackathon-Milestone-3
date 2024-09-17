const form = document.getElementById("resume-form") as HTMLElement;
const resumedisplay = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit", (event:Event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value
    const email= (document.getElementById("email") as HTMLInputElement).value
    const number = (document.getElementById("number") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skill = (document.getElementById("skill") as HTMLInputElement).value

    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${number}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>
    
    <h3>Skill</h3>
    <p contenteditable="true">${skill}</p>
    `;
    
    if(resumedisplay){
        resumedisplay.innerHTML=resumeHtml;
    }else{
        console.error("The resume display element is missing")
    }
})