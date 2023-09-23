document.addEventListener("DOMContentLoaded", function() {
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");

    // Function to cycle education text
    function cycleEducation() {
        setTimeout(function() {
            educationElement.textContent = "HSC";
            educationElement.classList.toggle("change");
            
            setTimeout(function() {
                educationElement.textContent = "SSC";
                educationElement.classList.toggle("change");
                cycleEducation(); // Recursively call the function
            }, 5000); // Change text after 2 seconds
        }, 5000); // Change text after 2 seconds
    }

    // Function to cycle skills text
    function cycleSkills() {
        setTimeout(function() {
            skillsElement.textContent = "Graphic Designing";
            skillsElement.classList.toggle("change");
            
            setTimeout(function() {
                skillsElement.textContent = "Web Development";
                skillsElement.classList.toggle("change");
                cycleSkills(); // Recursively call the function
            }, 5000); // Change text after 2 seconds
        }, 5000); // Change text after 2 seconds
    }

    // Start the text cycling for both education and skills
    cycleEducation();
    cycleSkills();
});
