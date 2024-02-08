const quotes = [
    {
      book: "To Kill a Mockingbird",
      author: "Harper Lee",
      quote: "You never really understand a person until you consider things from his point of view."
    },
    {
      book: "1984",
      author: "George Orwell",
      quote: "War is peace. Freedom is slavery. Ignorance is strength."
    },
    {
      book: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
    },
    {
        book: "To Kill a Mockingbird", author: "Harper Lee"
    },
    {
        book: "Pride and Prejudice", author: "Jane Austen"
    },
    { book: "The Great Gatsby", author: "F. Scott Fitzgerald" },


  { book: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
  { book: "Gone Girl", author: "Gillian Flynn" },
  { book: "The Da Vinci Code", author: "Dan Brown" },


  { book: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
  { book: "The Hobbit", author: "J.R.R. Tolkien" },
  { book: "A Game of Thrones", author: "George R.R. Martin" }
    // Add more quotes here
]
  
 
  function searchQuotes() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredQuotes = quotes.filter((quote) => {
      return (
        quote.book.toLowerCase().includes(searchTerm) ||
        quote.author.toLowerCase().includes(searchTerm)
      );
    });
  
    displayQuotes(filteredQuotes);

    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.style.display = 'flex';
  }
  
  function displayQuotes(quotes) {
    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.innerHTML = "";
  
    quotes.forEach((quote) => {
      const quoteCard = document.createElement("div");
      quoteCard.classList.add("quote-card");
  
      const bookTitle = document.createElement("h3");
      bookTitle.textContent = quote.book;
  
      const authorName = document.createElement("p");
      authorName.textContent = "Author: " + quote.author;
  
      const quoteText = document.createElement("p");
      quoteText.textContent = quote.quote;
  
      quoteCard.appendChild(bookTitle);
      quoteCard.appendChild(authorName);
      quoteCard.appendChild(quoteText);
  
      quoteContainer.appendChild(quoteCard);
    });
  }
  

  function clearSearch() {
    const searchInput = document.getElementById("searchInput");
    const quoteContainer = document.getElementById("quoteContainer");
    searchInput.value = "";
    quoteContainer.innerHTML = "";
  
    // Hide the popup window
    quoteContainer.style.display = 'none';
  }


  
  function closePopup() {
    // Hide the popup window
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.style.display = 'none';
  }


  function showPopup() {
    var quoteContainer = document.getElementById("quoteContainer");
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    if (quoteContainer.innerHTML.trim() !== "") {
      // Display pop-up
      popup.innerHTML = "Quotes: " + quoteContainer.innerText;
      popup.style.display = "block";
      overlay.style.display = "block";
    } else {
      alert("No quotes found.");
    }
  }

  function closePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    // Close pop-up
    popup.style.display = "none";
    overlay.style.display = "none";
  }

  




/*


function searchQuotes() {
  // Get the search input value
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  // Get the quote container element
  const quoteContainer = document.getElementById('quoteContainer');

  // Clear the previous search results
  quoteContainer.innerHTML = '';

  // Perform the search and populate the quote container
  // Replace this with your actual search logic
  const searchResults = performSearch(searchTerm);
  searchResults.forEach(result => {
    const quoteElement = document.createElement('div');
    quoteElement.textContent = result;
    quoteContainer.appendChild(quoteElement);
  });

  // Show the popup window
  quoteContainer.style.display = 'block';
}

function clearSearch() {
  // Get the quote container element
  const quoteContainer = document.getElementById('quoteContainer');

  // Clear the search input value
  const searchInput = document.getElementById('searchInput');
  searchInput.value = '';

  // Hide the popup window
  quoteContainer.style.display = 'none';
}

// Replace this with your actual search logic
function performSearch(searchTerm) {
  // Sample search logic
  const quotes = [
    'Quote 1',
    'Quote 2',
    'Quote 3',
    'Quote 4',
    'Quote 5',
  ];

  return quotes.filter(quote => quote.toLowerCase().includes(searchTerm));
}
 
 */
  
/*

  function searchBooks() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredQuotes = quotes.filter((quote) => {
        return (
          quote.book.toLowerCase().includes(searchTerm) ||
          quote.author.toLowerCase().includes(searchTerm)
        );
      });
    
      displayQuotes(filteredQuotes);
    // Clear previous search results
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = "";
  
    // Make API request to search for books
    fetch(`https://www.googleapis.com/books/v1/volumes?q={php,java,sql,romantic,Computers,Fantasy,Horror,Fiction}&key=AIzaSyBJicXZP7t0AYt0sf30iWZh08I-PvZM3Kg`)
      .then(response => response.json())
      .then(data => {
        const books = data.items;
        displayBooks(books);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
  
  function displayBooks(books) {
    const bookContainer = document.getElementById("bookContainer");
  
    books.forEach(book => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
  
      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.volumeInfo.title;
  
      const bookAuthor = document.createElement("p");
      bookAuthor.textContent = "Author: " + book.volumeInfo.authors;
  
      const bookDescription = document.createElement("p");
      bookDescription.textContent = book.volumeInfo.description;
  
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookDescription);
  
      bookContainer.appendChild(bookCard);
    });
  }

*/





/*
const favorites = [];
const readLater = [];
const deletedBooks = [];

function getBooksByCategory(category) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  // Fetch the books related to the chosen category from local storage
  const books = getBooksFromLocalStorage(category);

  // Display the books
  books.forEach(book => {
    if (!isBookDeleted(book.title)) {
      const li = document.createElement('li');
      const bookLink = document.createElement('a');
      const bookLinkText = document.createTextNode(book.title);
      bookLink.appendChild(bookLinkText);

      // Open the book when clicked
      bookLink.addEventListener('click', () => {
        openOptionsModal(book.title, book.url);
      });

      li.appendChild(bookLink);
      bookList.appendChild(li);
    }
  });
}

function openOptionsModal(bookTitle, bookUrl) {
  const modal = document.getElementById('optionsModal');
  const modalContent = document.getElementById('modalContent');
  const optionsList = document.getElementById('optionsList');

  // Clear previous options
  optionsList.innerHTML = '';

  // Add options to the modal
  const options = [
    { text: 'Visit Book Website', action: () => visitBookWebsite(bookUrl) },
    { text: 'Add to Favourites', action: () => addToFavourites(bookTitle) },
    { text: 'Delete', action: () => deleteBook(bookTitle) },
    { text: 'Read Book Later', action: () => readBookLater(bookTitle) },
    { text: 'Add to Tracker', action: () => openTrackerModal(bookTitle) },
  ];

  options.forEach(option => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const textNode = document.createTextNode(option.text);
    a.appendChild(textNode);
    a.addEventListener('click', () => {
      option.action();
      closeOptionsModal();
    });
    li.appendChild(a);
    optionsList.appendChild(li);
  });

  // Show the modal
  modal.style.display = 'block';
}

function closeOptionsModal() {
  const modal = document.getElementById('optionsModal');
  modal.style.display = 'none';
}

function visitBookWebsite(url) {
  window.open(url, '_blank');
}

function deleteBook(bookTitle) {
  // Move the book to the deleted books list
  deletedBooks.push(bookTitle);

  // Refresh the displayed books
  getBooksByCategory('All');
}

function isBookDeleted(bookTitle) {
  // Check if the book is in the deleted books list
  return deletedBooks.includes(bookTitle);
}

// Other functions remain unchanged...

*/


















const favorites = [];
const readLater = [];
const deletedBooks = [];
const book=[];
function getBooksByCategory(category) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  // Fetch the books related to the chosen category from local storage
  //const books = getBooksFromLocalStorage(category);

  // Fetch the books related to the chosen category from the API or use a local data source
  const books = getBooksFromAPI(category);

   // Display the books
   books.forEach(book => {
    if (!isBookDeleted(book.title)) {
      const li = document.createElement('li');
      const bookLink = document.createElement('a');
      const bookLinkText = document.createTextNode(book.title);
      bookLink.appendChild(bookLinkText);

      // Open the book when clicked
      bookLink.addEventListener('click', () => {
        openOptionsModal(book.title, book.url);
      });

 // Highlight the book if it's in favorites
 if (isBookFavorite(book.title)) {
  li.classList.add('favorite');
}

      li.appendChild(bookLink);
      bookList.appendChild(li);
    }
  });
}

function displayReadLater() {
  const readLaterList = document.getElementById('readLaterList');
  readLaterList.innerHTML = readLater.map(book => `<li>${book}</li>`).join('');

}




function openOptionsModal(bookTitle, bookUrl) {
  const modal = document.getElementById('optionsModal');
  const modalContent = document.getElementById('modalContent');
  const optionsList = document.getElementById('optionsList');

  // Clear previous options
  optionsList.innerHTML = '';

  // Add options to the modal
  const options = [
    { text: 'Visit Book Website', action: () => visitBookWebsite(bookUrl) },
    { text: 'Add to Favourites', action: () => addToFavourites(bookTitle) },
    { text: 'Delete', action: () => deleteBook(bookTitle) },
    { text: 'Read Book Later', action: () => readBookLater(bookTitle) },
   /* { text: 'Add to Tracker', action: () => openTrackerModal(bookTitle) },*/
  ];

  options.forEach(option => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const textNode = document.createTextNode(option.text);
    a.appendChild(textNode);
    a.addEventListener('click', () => {
      option.action();
      closeOptionsModal();
    });
    li.appendChild(a);
    optionsList.appendChild(li);
  });

  // Show the modal
  modal.style.display = 'block';
}

function closeOptionsModal() {
  const modal = document.getElementById('optionsModal');
  modal.style.display = 'none';
}

function visitBookWebsite(url) {
  window.open(url, '_blank');
}

function addToFavourites(bookTitle) {
  
  // Check if the book is already in favorites
  if (!isBookFavorite(bookTitle)) {
    // Add the book to favorites
    favorites.push(bookTitle);

    // Find the corresponding li element
    const bookList = document.getElementById('bookList');
    const li = Array.from(bookList.getElementsByTagName('li')).find(
      element => element.textContent.includes(bookTitle)
    );
    

    // Highlight the selected book
    if (li) {
      li.classList.add('favorite');
    }

    // Show a message
    alert(`${bookTitle} has been added to your favorites!`);
  } else {
    // If the book is already in favorites, show a message
    alert(`${bookTitle} is already in your favorites!`);
  }
  // Update the favorites list
  updateFavritesList();

}


readLaterList.addEventListener('click', (event) => {
  const selectedBook = event.target.textContent;
  if(confirm(`Do you want to read "${selectedBook}" now?`)){

  
    visitBookWebsite(selectedBook);
  }
 else if (confirm(`Do you want to remove "${selectedBook}" from your read later list?`)) {
    removeBookFromReadLater(selectedBook);
  }
});

function removeBookFromReadLater(bookTitle) {
  // Remove the book from the read later list
  const bookIndex = readLater.indexOf(bookTitle);
  if (bookIndex !== -1) {
    readLater.splice(bookIndex, 1);
    // Update the read later list
    displayReadLater();
  }
}


function updateFavritesList(){
  const favoritesList=document.getElementById('favritesList');
  favoritesList.innerHTML='';
  favorites.forEach(favorite=>{
    const li=document.createElement('li');
    li.textContent=favorite;
    favoritesList.appendChild(li);
  });
}


function deleteBook(bookTitle) {
  // Remove the book from the general list
  const bookList = document.getElementById('bookList');
  const li = Array.from(bookList.getElementsByTagName('li')).find(
    element => element.textContent.includes(bookTitle)
  );

  if (li) {
    bookList.removeChild(li);
  }

  // Remove the book from the favorites list
  const index = favorites.indexOf(bookTitle);
  if (index !== -1) {
    favorites.splice(index, 1);

    // Show a message
    alert(`${bookTitle} has been removed from your favorites!`);
  }

  // Move the book to the deleted books list
  deletedBooks.push(bookTitle);

  // Refresh the displayed books
  getBooksByCategory('All');

  // Update the favorites list
  updateFavoritesList();
}

function isBookDeleted(bookTitle) {
  // Check if the book is in the deleted books list
  return deletedBooks.includes(bookTitle);
}

function isBookFavorite(bookTitle) {
      // Check if the book is in favorites
      return favorites.includes(bookTitle);
    }

    // Function to check if the book is in the read later list
function isBookInReadLater(bookTitle) {
  return readLater.includes(bookTitle);
}

 function readBookLater(bookTitle) {
      // Check if the book is already in read later
      if (!isBookInReadLater(bookTitle)) {
        // Add the book to read later
        readLater.push(bookTitle);
    
        // Show a message
        alert(`${bookTitle} has been added to your read later list!`);
    
        // Update the read later list
        displayReadLater();
      } else {
        // If the book is already in read later, show a message
        alert(`${bookTitle} is already in your read later list!`);
      }
    }

   
const Books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', totalPages: 300 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', totalPages: 200 },
  { title: '1984', author: 'George Orwell', totalPages: 400 },
  { title: 'Gone Girl', author: 'Gillian Flynn', totalPages: 100 },
  { title: 'The Da Vinci Code', author: 'Dan Brown', totalPages: 150 },
  { title: 'A Game of Thrones', author: 'George R.R. Martin', totalPages: 130 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', totalPages: 300 },
  { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', totalPages: 250 },
  // Add more books here...
];

const selectElement = document.getElementById('bookSelector');

Books.forEach(book => {
  const option = document.createElement('option');
  option.value = book.title;
  option.text = book.title;
  selectElement.add(option);
});
 // Populate the bookSelector dropdown if it's empty
 if (bookSelector.options.length === 1) {
  Books.forEach(book => {
    const option = document.createElement('option');
    option.value = book.title;
    option.text = book.title;
    bookSelector.add(option);
  });
}

    function calculateReadingTime() {
      const pagesInput = document.getElementById('pagesInput').value;
      const bookSelector = document.getElementById('bookSelector');
      const selectedBookTitle = bookSelector.options[bookSelector.selectedIndex].value;
    
      const selectedBook = Books.find(book => book.title === selectedBookTitle);
    
      if (selectedBook && pagesInput) {
        const daysToFinish = Math.ceil(selectedBook.totalPages / pagesInput);
        document.getElementById('result').innerText = `You will finish ${selectedBook.title} in ${daysToFinish} days.`;
    
        // Check user's input number
        const userNumber = parseInt(pagesInput);
    
        if (userNumber >= 1 && userNumber <= 10) {
          alert("Good! You can read more.");
        } else if (userNumber > 10 && userNumber <= 15) {
          alert("That's too much!");
        } else if (userNumber > 15 && userNumber <= 20) {
          alert("It's very much. Please read carefully.");
        } else if (userNumber > 20) {
          alert("It's possible. Take your time.");
        } else {
          document.getElementById('result').innerText = 'Please enter valid information.';
        }
      }
    }

    const selectedBooks = [];

    function startReading() {
      const bookSelector = document.getElementById('bookSelector');
      const selectedBookTitle = bookSelector.value; // استرجاع القيمة المحددة في القائمة المنسدلة
    
      if (selectedBookTitle) {
        const selectedBook = Books.find(book => book.title === selectedBookTitle); // العثور على الكتاب المحدد بالعنوان
    
        if (!selectedBooks.includes(selectedBookTitle)) {
          selectedBooks.push(selectedBookTitle);
          const readingList = document.getElementById('readingList');
          const listItem = document.createElement('div');
          listItem.className = "readingItem";
          listItem.innerHTML = `<p style="display: flex;">${selectedBookTitle}</p>`;
          
          // إنشاء عنصر إدخال المدى
          const bookSlider = document.createElement("input");
          bookSlider.type = "range";
          bookSlider.min = "0";
          bookSlider.value = "0";
          bookSlider.max = selectedBook.totalPages.toString(); // تعيين الصفحات القصوى
          bookSlider.className = "slider";
          bookSlider.id = "bookSlider";
    
          // فقرة لعرض النسبة المقروءة
          const percentageParagraph = document.createElement("p");
          percentageParagraph.style.display = "flex";
          percentageParagraph.id = "percentageParagraph";
          listItem.appendChild(percentageParagraph);
    
          listItem.appendChild(bookSlider);
    
          // إنشاء زر لزيادة قيمة المدى
          const increaseButton = document.createElement("button");
          increaseButton.textContent = "+";
          increaseButton.onclick = function() {
            bookSlider.value = parseInt(bookSlider.value) + 1;
            updatePercentage(bookSlider, selectedBook.totalPages); // تحديث النسبة المقروءة عند الزيادة
            if (parseInt(bookSlider.value) == parseInt(bookSlider.max)) {
              alert("Congratulations! You've reached the end of the book.");
            }
          };
    
          listItem.appendChild(increaseButton);
          readingList.appendChild(listItem);
          updatePercentage(bookSlider, selectedBook.totalPages); // التحديث الأولي للنسبة المقروءة
        } else {
          alert("This book has already been added.");
        }
      } else {
        alert('Please select a book to start reading.');
      }
    }
    
    // تحديث النسبة المقروءة
    function updatePercentage(bookSlider, totalPages) {
      const currentPage = parseInt(bookSlider.value);
      const percentage = (currentPage / totalPages) * 100;
      const percentageParagraph = bookSlider.parentNode.querySelector("#percentageParagraph");
      percentageParagraph.textContent = `You have read ${percentage.toFixed(2)}% of the book.`;
    }
/*
    const bookSlider = document.getElementById("bookSlider");
    const bookCount = document.getElementById("bookCount");
    
    bookSlider.addEventListener("input", function() {
      updateBookCount(this.value);
    });
    
    function updateBookCount(value) {
      bookCount.textContent = value;
    }
    
    // Example: Increase the book count when a user clicks a button
    document.getElementById("increaseButton").addEventListener("click", function() {
      bookSlider.value = parseInt(bookSlider.value) + 1;
      updateBookCount(bookSlider.value);
    });
    */   
/*
    function calculateReadingTime() {
      const pagesInput = document.getElementById('pagesInput').value;
      const bookSelector = document.getElementById('bookSelector');
      const selectedBookTitle = bookSelector.options[bookSelector.selectedIndex].value;
    
      const selectedBook = Books.title();
    
      if (selectedBook && pagesInput) {
        const daysToFinish = Math.ceil(selectedBook.totalPages / pagesInput);
        document.getElementById('result').innerText = You will finish ${selectedBook.title} in ${daysToFinish} days.;
      } else {
        document.getElementById('result').innerText = 'Please enter valid information.';
      }
    }

*/
  // Function to fetch books from the API or use a local data source
  function getBooksFromAPI(category) {
    // Replace this with your API call or local data retrieval logic
    // Return an array of books related to the chosen category
    if (category === "All") {
        return [
          { title: "To Kill a Mockingbird", url: "https://docs.google.com/document/d/1tjnFYrF5e-rGX2P1pWdQBETxyVnqdbkWTIWR1wvWNgo/edit" },
          { title: "Pride and Prejudice" , url: 'https://www.gutenberg.org/files/1342/old/pandp12p.pdf'},
          { title: "The Great Gatsby", url: "https://drive.google.com/file/d/0B2pakEckslUhd3RqRE96T1d3R2c/view?resourcekey=0-jbofcJVJojw1yU9sd0Jpnw" },
         {title: "The Girl with the Dragon Tattoo" , url: "https://drive.google.com/file/d/0By9wjQndHrkTSFgtVnlWalhfRU0/edit?resourcekey=0-HZ6CCU_Df05mrNr8_NMQcQ"},
        {title: "Gone Girl" , url: "https://drive.google.com/file/d/1esXkVoQLG7cGF_jVH5_yKSHUThOBrP61/view"},
         {title: "The Da Vinci Code", url: "https://drive.google.com/file/d/0B1ySOrPxOWJmR212UnhlcWExVmc/view?resourcekey=0-RmsTa8ZuvpGK5qy9_sjIWg"},
         { title: "Harry Potter and the Sorcerer's Stone", url: "https://drive.google.com/file/d/0B0tutiHDbaxROVJFNk1sUXQ4Tlk/edit?resourcekey=0-wPpyvKtsPNcKol2HIxX1kQ" },
         { title: "The Hobbit" , url: "https://drive.google.com/file/d/18Ur6gJSGLE2N9jl_HmWcczmUe7yjdTAE/view"},
         { title: "A Game of Thrones" , url: "https://www.nothuman.net/images/files/discussion/1/e72f9f1f181a66887baa7270037c582e.pdf"}
        
     ]; }
    if (category === "fiction") {
      return [
        { title: "To Kill a Mockingbird", url: "https://docs.google.com/document/d/1tjnFYrF5e-rGX2P1pWdQBETxyVnqdbkWTIWR1wvWNgo/edit" },
        { title: "Pride and Prejudice" , url: 'https://www.gutenberg.org/files/1342/old/pandp12p.pdf'},
        { title: "The Great Gatsby", url: "https://drive.google.com/file/d/0B2pakEckslUhd3RqRE96T1d3R2c/view?resourcekey=0-jbofcJVJojw1yU9sd0Jpnw" },
      ];
    } else if (category === "mystery") {
      return [
        {title: "The Girl with the Dragon Tattoo" , url: "https://drive.google.com/file/d/0By9wjQndHrkTSFgtVnlWalhfRU0/edit?resourcekey=0-HZ6CCU_Df05mrNr8_NMQcQ"},
        { title: "Gone Girl" , url: "https://docs.google.com/document/d/1tjnFYrF5e-rGX2P1pWdQBETxyVnqdbkWTIWR1wvWNgo/edit"},
        {title: "The Da Vinci Code", url: "https://drive.google.com/file/d/0B1ySOrPxOWJmR212UnhlcWExVmc/view?resourcekey=0-RmsTa8ZuvpGK5qy9_sjIWg"},
      ];
    } else if (category === "fantasy") {
      return [
        { title: "Harry Potter and the Sorcerer's Stone", url: "https://drive.google.com/file/d/0B0tutiHDbaxROVJFNk1sUXQ4Tlk/edit?resourcekey=0-wPpyvKtsPNcKol2HIxX1kQ" },
        { title: "The Hobbit" , url: "https://drive.google.com/file/d/18Ur6gJSGLE2N9jl_HmWcczmUe7yjdTAE/view"},
        { title: "A Game of Thrones" , url: "https://www.nothuman.net/images/files/discussion/1/e72f9f1f181a66887baa7270037c582e.pdf"}
      ];
      
    } else if(category==="Biography"){
        return[
            {title:"NOT FOUND"}
        ];
    }
    else if(category==="science"){
        return[
            {title:"NOT FOUND"}
        ];
    }
    else {
      return []; // Return an empty array if the category is not found
    }
  }

/*

  function getBooksByAuthor(authorName) {
    // Get the book list element
    const bookList = document.getElementById('bookList');
  
    // Clear the previous book list
    bookList.innerHTML = '';
  
    // Filter the books based on the selected author
    const filteredBooks = books.filter(book => book.author === authorName);
  
    // Create a list item for each book and append it to the book list
    filteredBooks.forEach(book => {
      const listItem = document.createElement('li');
      
      listItem.textContent = `${book.title} by   ${ book.author}`;
      bookList.appendChild(listItem);
    });
    
  }

*/

  function getBooksByAuthor(authorName) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
  
    if (authorName === 'All') {
      // Show all books if "All Authors" is selected
      displayBooks(books);
    } else {
      // Filter the books based on the selected author
      const filteredBooks = books.filter(book => book.author === authorName);
      displayBooks(filteredBooks);
    }
  }



  function displayBooks(booksToShow) {
    const bookList = document.getElementById('bookList');
    booksToShow.forEach(book => {
      const li = document.createElement('li');
      const bookLink = document.createElement('a');
      const bookLinkText = document.createTextNode(`${book.title} by ${book.author}`);
      bookLink.appendChild(bookLinkText);
  
      // Open the book when clicked
      bookLink.addEventListener('click', () => {
        openBook(book.url);
      });
  
      li.appendChild(bookLink);
      bookList.appendChild(li);
    });
  }
  
  function openBook(url) {
    window.open(url, '_blank');
  }


 



  // Example list of books
  const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', url: "https://docs.google.com/document/d/1tjnFYrF5e-rGX2P1pWdQBETxyVnqdbkWTIWR1wvWNgo/edit" },

    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',url: "https://drive.google.com/file/d/0B2pakEckslUhd3RqRE96T1d3R2c/view?resourcekey=0-jbofcJVJojw1yU9sd0Jpnw"  },
    { title: '1984', author: 'George Orwell' ,url:"https://files.libcom.org/files/1984.pdf"},
    { title: 'Gone Girl', author: 'Gillian Flynn' , url: "https://drive.google.com/file/d/1esXkVoQLG7cGF_jVH5_yKSHUThOBrP61/view"},
    { title:'The Da Vinci Code',  author:'Dan Brown',url: "https://drive.google.com/file/d/0B1ySOrPxOWJmR212UnhlcWExVmc/view?resourcekey=0-RmsTa8ZuvpGK5qy9_sjIWg"},
    { title:'A Game of Thrones',  author:'George R.R. Martin',url: "https://www.nothuman.net/images/files/discussion/1/e72f9f1f181a66887baa7270037c582e.pdf"},
    { title:'The Hobbit',  author:'J.R.R. Tolkien',url: "https://drive.google.com/file/d/18Ur6gJSGLE2N9jl_HmWcczmUe7yjdTAE/view"},
    { title:'The Girl with the Dragon Tattoo',  author:'Stieg Larsson', url: "https://drive.google.com/file/d/0By9wjQndHrkTSFgtVnlWalhfRU0/edit?resourcekey=0-HZ6CCU_Df05mrNr8_NMQcQ"},
    { title:'The Girl with the Dragon Tattoo',  author:'Stieg Larsson', url: "https://drive.google.com/file/d/0By9wjQndHrkTSFgtVnlWalhfRU0/edit?resourcekey=0-HZ6CCU_Df05mrNr8_NMQcQ"},

    // Add more books here...
  ];
/*
  const quotes1 = [
    "You never really understand a person until you consider things from his point of view.",
    "War is peace. Freedom is slavery. Ignorance is strength.",
    "So we beat on, boats against the current, borne back ceaselessly into the past."
    // Add more quotes here
  ];
  
  function showQuote() {
    const quoteText = document.getElementById("quoteText");
    const randomIndex = Math.floor(Math.random() * quotes1.length);
    quoteText.textContent = quotes1[randomIndex];
  
   // clearInterval(interval); // Stop the interval after showing the quote once
  }
  
  showQuote(); // Show the initial quote
  
  const interval = setInterval(showQuote, 60000); // Show a new quote every minute
  */


  const text = document.getElementById("quote");
  const author = document.getElementById("author");
  const tweetButton = document.getElementById("tweet");
  
  const updateSidebar = (quote, auth) => {
    // Function to update the sidebar content
    const sidebarQuote = document.querySelector('.sidebar .quote');
    const sidebarAuthor = document.querySelector('.sidebar .author');
    sidebarQuote.textContent = quote;
    sidebarAuthor.textContent = "~ " + auth;
  };
  
  const getNewQuote = async () => {
    // API for quotes
    const url = "https://type.fit/api/quotes";
  
    // Fetch the data from the API
    const response = await fetch(url);
    const allQuotes = await response.json();
  
    // Generates a random number between 0 and the length of the quotes array
    const index = Math.floor(Math.random() * allQuotes.length);
  
    // Store the quote present at the randomly generated index
    const quote = allQuotes[index].text;
  
    // Store the author of the respective quote
    const auth = allQuotes[index].author || "Anonymous";
  
    // Function to dynamically display the quote and the author in the main container
    text.innerHTML = quote;
    author.innerHTML = "~ " + auth;
  
    // Function to update the sidebar content
    updateSidebar(quote, auth);
  
    // Tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
  };
  
  setInterval(getNewQuote, 5000); // Change the quote every 5 seconds
/*
  const quotes1 = [
    "You never really understand a person until you consider things from his point of view.",
    "War is peace. Freedom is slavery. Ignorance is strength.",
    "So we beat on, boats against the current, borne back ceaselessly into the past."
    // Add more quotes here
  ];
  
  function showInitialQuote() {
    const quoteText = document.getElementById("quoteText");
    if (quotes1.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes1.length);
      quoteText.textContent = quotes1.splice(randomIndex, 1)[0];
    } else {
      quoteText.textContent = "No more quotes.";
    }
  }
  
  showInitialQuote(); // Show the initial quote
  
  const interval = setInterval(showInitialQuote, 60000); // Show a new quote every minute
  */
  /*
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
  }
  
  function showQuote() {
    const quoteContainer = document.getElementById("quoteContainer");
    const quoteText = document.createElement("p");
    quoteText.textContent = getRandomQuote('dkckc');
  
    const cancelButton = document.createElement("span");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "X";
    cancelButton.addEventListener("click", hideQuote);
  
    quoteContainer.innerHTML = "";
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(cancelButton);
    quoteContainer.classList.add("show");
  
    setTimeout(hideQuote, 5000); // Hide after 5 seconds
  }
  
  function hideQuote() {
    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.classList.remove("show");
  }
  
  setInterval(showQuote, 10000); // Show a new quote every 10 seconds
  */
 