document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    submissions.push({ name, email, message });

    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("Form Submitted Successfully!");

    document.getElementById("contactForm").reset();
});
