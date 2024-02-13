import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Greeting() {
  return (
    <section className="mainSection">
      <Example />
      <BookList />
    </section>
  );
}
const books = [
  {
    id: "1",
    image: "https://m.media-amazon.com/images/I/51qX8cduMtL._AC_SX425_.jpg",
    title: "vb",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "2",
    image:
      "https://m.media-amazon.com/images/I/61vXJCvt-1L.__AC_SX300_SY300_QL70_ML2_.jpg",
    title: "222222222Lorem ipsum dolor sit amet.",
    text: "222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "3",
    image: "https://m.media-amazon.com/images/I/71b6fg86afL._AC_SX425_.jpg",
    title: "33333333333Lorem ipsum dolor sit amet.",
    text: "33333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "4",
    image: "https://m.media-amazon.com/images/I/51qX8cduMtL._AC_SX425_.jpg",
    title: "44444444Lorem ipsum dolor sit amet.",
    text: "44444444Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "5",
    image:
      "https://m.media-amazon.com/images/I/61vXJCvt-1L.__AC_SX300_SY300_QL70_ML2_.jpg",
    title: "5555555555555555Lorem ipsum dolor sit amet.",
    text: "5555555555555555Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "6",
    image: "https://m.media-amazon.com/images/I/71b6fg86afL._AC_SX425_.jpg",
    title: "6666666666Lorem ipsum dolor sit amet.",
    text: "6666666666Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
];

// const someChildrenText =
//   "CHILDREN TEXT   CHILDREN TEXT Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi optio ab, consequatur at et nesciunt rerum quo repellat perferendis error";

/* <Book
        title={firstBook.title}
        image={firstBook.image}
        text={firstBook.text}
      >
        {someChildrenText}
      </Book> */
const Example = () => {
  return (
    <>
      <div>
        <form>
          <h2>form</h2>
          <input type="text" onChange={handleChangeIput} />
        </form>
        <button type="submit" onClick={handleClickBtn}>
          Submit
        </button>
      </div>
    </>
  );
};

function handleChangeIput(e) {
  return console.log(e.target.value);
}
function handleSubmitForm(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.currentTarget);
  alert("it succesfully submited");
}

const searchingResault = [
  {
    id: "3",
    image: "https://m.media-amazon.com/images/I/71b6fg86afL._AC_SX425_.jpg",
    title: "33333333333Lorem ipsum dolor sit amet.",
    text: "33333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "3",
    image: "https://m.media-amazon.com/images/I/71b6fg86afL._AC_SX425_.jpg",
    title: "33333333333Lorem ipsum dolor sit amet.",
    text: "33333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
  {
    id: "3",
    image: "https://m.media-amazon.com/images/I/71b6fg86afL._AC_SX425_.jpg",
    title: "33333333333Lorem ipsum dolor sit amet.",
    text: "33333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit quas vitae, repellat minima eum quos quibusdam. Earum, quae perferendi",
  },
];
let boolea = false;

function handleClickBtn() {
  // books.filter((book) => {
  //   if (book.title === inputValue) {
  //     console.log("we found it");
  //     searchingResault.push(book);
  //     return console.log(searchingResault);
  //   }
  //   return console.log("nothing was find");
  // });
  console.log(boolea);
  boolea = true;

  return console.log(boolea);
}

function BookList() {
  return (
    <section className="bookList">
      {boolea
        ? searchingResault.map((book, index) => {
            return <Book key={book.id} {...book} counter={index} />;
          })
        : books.map((book, index) => {
            return <Book key={book.id} {...book} counter={index} />;
          })}
    </section>
  );
}

function Book(props) {
  const { children } = props;
  const counter = props.counter;

  return (
    <>
      <div className="bookItem">
        <div className="numberBox">{counter + 1}</div>
        {children}
        <img src={props.image} alt={props.title} />
        <h2 className="bookItemTitle">{props.title}</h2>
        <p className="bookItemText">{props.text}</p>
        <button onClick={handleSubmitForm} className="clickBtn">
          Click me
        </button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
