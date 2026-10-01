```javascript
// ================================
// SEARCH FILE
// ================================

function searchFiles() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".download-card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}


// ================================
// FILTER CATEGORY
// ================================

function filterCategory(category) {

    const cards =
        document.querySelectorAll(".download-card");

    cards.forEach(card => {

        if (
            card.dataset.category === category
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

    // Scroll ke bagian download

    document
        .getElementById("downloads")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================================
// MOBILE MENU
// ================================

function toggleMenu() {

    const nav =
        document.querySelector("nav");

    if (
        nav.style.display === "flex"
    ) {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "75px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "25px";

        nav.style.background = "#0b111d";

        nav.style.flexDirection = "column";

    }

}
```
