document.addEventListener('DOMContentLoaded', function() {
    // Review Animation
    let reviewIndex = 0;
    const reviewCards = document.querySelectorAll(".review-card");
    const totalReviews = reviewCards.length;
    const reviewContainer = document.querySelector(".review-container");
    const nextReviewBtn = document.getElementById("nextReviewBtn");
    const prevReviewBtn = document.getElementById("prevReviewBtn");

    function updateReviewDisplay() {
        if (reviewContainer) {
            reviewContainer.style.transform = `translateX(${-reviewIndex * 100}%)`;
        } else {
            console.error("reviewContainer not found.");
        }
    }

    if (nextReviewBtn) {
        nextReviewBtn.addEventListener("click", () => {
            reviewIndex = (reviewIndex + 1) % totalReviews;
            updateReviewDisplay();
        });
    } else {
        console.error("nextReviewBtn not found.");
    }

    if (prevReviewBtn) {
        prevReviewBtn.addEventListener("click", () => {
            reviewIndex = (reviewIndex - 1 + totalReviews) % totalReviews;
            updateReviewDisplay();
        });
    } else {
        console.error("prevReviewBtn not found.");
    }

    updateReviewDisplay();

    // Move Animation
    let index = 0;
    const slides = document.querySelectorAll(".slide5");

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function prevSlide() {
        index = (index > 0) ? index - 1 : slides.length - 1;
        updateSlides();
    }

    function nextSlide() {
        index = (index < slides.length - 1) ? index + 1 : 0;
        updateSlides();
    }

    updateSlides();

    // Top Animation
    const numberButtons = document.querySelectorAll(".number-btn22");
    const textTitle = document.querySelector(".text-title22");
    const textDescription = document.querySelector(".text-description22");

    const textData = [
        { title: "Discover", description: "Find the perfect design that matches your style and needs." },
        { title: "Design", description: "Work with our designers to create a custom plan." },
        { title: "Build", description: "Watch your dream space come to life with our expert team." }
    ];

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = parseInt(button.dataset.index);
            numberButtons.forEach(btn => btn.classList.remove("active22"));
            button.classList.add("active22");
            textTitle.textContent = textData[index].title;
            textDescription.textContent = textData[index].description;
        });
    });
});