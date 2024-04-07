const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

// const book = getBook(3);

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(author, title, genres);

// const [primaryGenre, secondaryGenre, ...Othergenres] = genres;
// console.log(primaryGenre, secondaryGenre, Othergenres);

// const newGenres = [...genres, "epic fantasy"];
// genres;

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 2222,
// };
// updatedBook;

// const Summary = `${title} is a book with ${pages} pages. it was written by ${author} in ${publicationDate}. the book has ${
//   hasMovieAdaptation ? "" : "not"
// } been adopted as a movie `;
// Summary;

// const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
// pagesRange;
// console.log(`the book has ${pagesRange} pages`);

// console.log(false && "Some string");
// console.log(hasMovieAdaptation && " this book has a movie");
// //falsey:0,null,undefined, ""
// console.log(0 && "some string");

// console.log(true || "somestring");

// console.log(false || "some string");

// console.log(book.translations.spanish);

// const spanishTranslations = book.translations.spanish || "Not translated";
// spanishTranslations;

// console.log(book.reviews.librarything?.reviewsCount);
// const countWrong = book.reviews.librarything?.reviewscount || "no data";
// countWrong;
// const count = book.reviews.librarything?.reviewsCount ?? "no data";

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}
// console.log(getTotalReviewCount(book));

const books = getBooks();
books;
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const AdventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
AdventureBooks;

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

const RatingCounts = books.reduce((acc, book) => acc + book.pages, 0);
RatingCounts;

const arr = [3, 5, 4, 2, 8];
const sorted = arr.sort((a, b) => b - a);
sorted;
arr;
