// Amazon Clone JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // Search Feature
    const searchBox = document.querySelector(".search-box");
    const searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", () => {
        const value = searchBox.value.trim();

        if (value === "") {
            alert("Please enter a product name");
        } else {
            alert(`Searching for "${value}"`);
        }
    });

    // Enter Key Support
    searchBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchIcon.click();
        }
    });

    // Back To Top
    const backBtn = document.querySelector(".back-option");

    backBtn.addEventListener("click", (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Product Card Hover Effect
    const cards = document.querySelectorAll(".item-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.03)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

});
