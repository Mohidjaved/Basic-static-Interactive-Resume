const toggleBtn = document.querySelector(".skills-toggle");
const skill = document.querySelector(".skills");
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", function () {
    if (skill.style.display === "block") {
        skill.style.display = "none";
        toggleBtn.innerText = "Show Skills"
    
    }
    else {
        skill.style.display = "block";
        toggleBtn.innerText = "Hide Skills"
    }
});
