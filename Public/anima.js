document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const imageSlider = document.querySelector(".image-slider");
    let currentSlide = 0;
    const slideCount = slides.length; // Store the length for efficiency

    function hideAll() {
        slides.forEach(slide => slide.classList.remove("active"));
    }

    function showSlide(index) {
        hideAll();
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount; // Use modulo operator
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount; // Use modulo operator
        showSlide(currentSlide);
    }

    // Event listeners for the buttons
    if (nextBtn) {
        nextBtn.addEventListener("click", nextSlide);
    } else {
        console.error("nextBtn not found");
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", prevSlide);
    } else {
        console.error("prevBtn not found");
    }

    // Event listener for the image slider (click to change image)
    if (imageSlider) {
        imageSlider.addEventListener("click", nextSlide);
    } else {
        console.error("imageSlider not found");
    }

    showSlide(currentSlide); // Show the initial slide
});