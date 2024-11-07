const toggleBtn = document.querySelector(".skills-toggle") as HTMLButtonElement
const skill = document.querySelector(".skills") as HTMLElement

toggleBtn?.addEventListener("click", ()=>{
    if (skill.style.display === "none") {
        skill.style.display = "block";
        
    }else{
        skill.style.display = "none"
    }
})
