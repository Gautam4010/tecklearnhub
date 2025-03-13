
function searchContent() {
    let query = document.getElementById("searchInput").value.toLowerCase(); // Get the search input
    let content = document.querySelectorAll(".card-box"); // Get all the content boxes

    content.forEach(function(item) {
        let contentText = item.getAttribute("data-content").toLowerCase(); // Get the content text
        if (contentText.includes(query)) {
            item.style.display = "block"; // Show content if it matches
        } else {
            item.style.display = "none"; // Hide content if it doesn't match
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const contentItems = document.querySelectorAll(".card"); // Content blocks

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        contentItems.forEach(item => {
            const text = item.innerText.toLowerCase();

            if (text.includes(query)) {
                item.style.display = "block"; // Show matching content
            } else {
                item.style.display = "none"; // Hide non-matching content
            }
        });
    });
});
