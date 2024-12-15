let booklist = [];
let currentPage = 1;
let itemsPerPage = 5;

const fetchbookss = document.querySelector('#fetchbooks');
let mainContainer = document.querySelector('#books-container');
let paginationcontainer = document.querySelector('#pagination-container');
let searchingInput = document.querySelector('#search');
let sortingItem = document.querySelector('#sorting');
let authorFilter = document.querySelector('#authorFilter'); // New author filter

// Fetch books from the API
fetchbookss.addEventListener('click', async () => {
    await fetch('https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b')
        .then((response) => response.json())
        .then((data) => {
            booklist = data.results.books;
            populateAuthorFilter(); // Populate author filter
        })
        .catch((error) => console.error(error));
    displayBooks();
});

// Populate author filter dropdown
function populateAuthorFilter() {
    // Create a set of unique authors
    const authors = new Set(booklist.map(book => book.author));

    // Clear existing options
    authorFilter.innerHTML = '<option value="">All Authors</option>';

    // Add authors to the dropdown
    authors.forEach(author => {
        let option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });
}

// Function to display books with sorting, pagination, and filters
function displayBooks() {
    mainContainer.innerHTML = "";

    // Filter books based on search input and selected author
    let filteredBooks = booklist
        .filter(book => book.title.toLowerCase().includes(searchingInput.value.toLowerCase())) // Search filter
        .filter(book => authorFilter.value === "" || book.author === authorFilter.value); // Author filter

    // Sort books based on sorting options
    if (sortingItem.value === 'asc') {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortingItem.value === 'desc') {
        filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortingItem.value === 'rank-asc') {
        filteredBooks.sort((a, b) => a.rank - b.rank); // Sort by rank ascending
    } else if (sortingItem.value === 'rank-desc') {
        filteredBooks.sort((a, b) => b.rank - a.rank); // Sort by rank descending
    }

    // Paginate books
    let paginatedBooks = filteredBooks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Display books
    for (let i = 0; i < paginatedBooks.length; i++) {
        let bookimg = document.createElement('img');
        bookimg.src = paginatedBooks[i].book_image;
        bookimg.height = 100;
        bookimg.width = 100;

        // Book title (Red, Capitalized, and Increased Font Size)
        let title = document.createElement('div');
        title.textContent = paginatedBooks[i].title.toUpperCase(); // Capital letters
        title.style.color = 'red'; // Red color
        title.style.fontSize = '24px'; // Increased size

        // Author name
        let author = document.createElement('div');
        author.textContent = `Author: ${paginatedBooks[i].author}`;
        author.style.textAlign = 'left'; // Left-aligned
        author.style.color = 'blue';

        // Description (Left-aligned)
        let description = document.createElement('div');
        description.textContent = paginatedBooks[i].description;
        description.style.textAlign = 'left'; // Left-aligned

        // Rank
        let rank = document.createElement('div');
        rank.textContent = `Rank: ${paginatedBooks[i].rank}`;
        rank.style.textAlign = 'left'; // Left-aligned
        rank.style.color = 'blue'; 

        // Price (if available)
        // let price = document.createElement('div');
        // price.textContent = `Price: $${paginatedBooks[i].price || 'N/A'}`; // Fallback if no price is available

        // Container to hold book details
        let container = document.createElement('div');
        container.style.marginBottom = '20px'; // Spacing between books
        container.appendChild(bookimg);
        container.appendChild(title);
        container.appendChild(author);
        container.appendChild(description);
        container.appendChild(rank);
        // container.appendChild(price); // Adding price here
        
        mainContainer.appendChild(container);
    }

    // Display pagination buttons
    displayPagination(filteredBooks.length);
}

// Update book display when the user types in the search input
searchingInput.addEventListener('input', () => {
    currentPage = 1;
    displayBooks();
});

// Update book display when the user changes the sorting option
sortingItem.addEventListener('change', () => {
    displayBooks();
});

// Update book display when the user changes the author filter
authorFilter.addEventListener('change', () => {
    currentPage = 1;
    displayBooks();
});

// Function to display pagination buttons
function displayPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationcontainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayBooks();
        });
        paginationcontainer.appendChild(pageButton);
    }
}
