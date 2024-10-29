document.getElementById("mybtn").addEventListener("click", function() {
    const extraImages = document.querySelector(".extra-images");
    const buttonText = this;

    if (extraImages.style.display === "none" || extraImages.style.display === "") {
        extraImages.style.display = "block";
        buttonText.textContent = "Show Less";
    } else {
        extraImages.style.display = "none";
        buttonText.textContent = "See All";
    }
});

// Add event listener to the first image in class .four
document.getElementById("firstImage").addEventListener("click", function() {
    window.location.href = "pink1.html"; // Redirect to pink1.html
});

document.getElementById("abt").addEventListener("click",function(){
    window.location.href="about.html";
});