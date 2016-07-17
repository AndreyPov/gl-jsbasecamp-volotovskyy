function getBookById(id) {
  document.getElementById('book').textContent = 'Please wait. Book is loading';

  fetch('api/books/' + id)
    .then(checkResponseStatus)
    .then(function(book) {
      document.getElementById('book').textContent = book.name;
    })
    .catch(function() {
      document.getElementById('book').textContent = 'Error. Please refresh your browser';
    })
}

function loadPage(bookId) {
  document.getElementById('book').textContent = 'Please wait. Book is loading';
  document.getElementById('author').textContent = 'Please wait. Author details are loading';
  document.getElementById('similar').textContent = 'Please wait. Similar books are loading';

  fetch('api/books/' + id)
    .then(checkResponseStatus)
    .catch(function() {
      document.getElementById('book').textContent = 'Error. Please refresh your browser';
    })
    .then(function(book) {
      document.getElementById('book').textContent = book.name;
      return fetch('api/autors' + book.authorId);
    })
    .then(checkResponseStatus)
    .then(function(author) {
      document.getElementById('author').textContent = author.name;
      return Promise.all( author.books.map(function(url) {
          return fetch(url)
            .then(checkResponseStatus)
        })
      );
    })
    .then(function(similarBooks) {
      similarBooks.forEach(function(book) {
        let p = document.getElementById('similar').appendChild('p').textContent = book;
        similarBooksLoaded += 1
      });

      if(similarBooksLoaded === similarBooksAmount) {
        alert('Horray everything loaded');
      }
    })
}