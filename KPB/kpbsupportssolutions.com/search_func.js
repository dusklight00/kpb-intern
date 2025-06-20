function performSearch() {
    const searchInput = document.querySelector('.srch');
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length < 2) {
        alert("Please enter at least 2 characters to search.");
        return;
    }

    // Remove existing highlights
    const existingHighlights = document.querySelectorAll('.highlight');
    existingHighlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
    });

    // Highlight headings in the services section
    const courseHeadings = document.querySelectorAll('#service .course-title');
    let found = false;
    let firstMatch = null; // To track the first matching element

    courseHeadings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            const regex = new RegExp(searchTerm, 'gi');
            heading.innerHTML = heading.textContent.replace(regex, match => `<span class="highlight">${match}</span>`);
            if (!firstMatch) {
                firstMatch = heading; // Store the first match
            }
            found = true;
        }
    });

    if (!found) {
        alert("No results found.");
    } else if (firstMatch) {
        // Scroll to the first match
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Add event listener for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.srch');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});