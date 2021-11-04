import React from 'react'
import ReactDom from 'react-dom'
import './index.css';


const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL254_SR254,254_.jpg',
  title: "random",
  number: 22,
  author: "Alex"
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL254_SR254,254_.jpg',
  title: "Big Shot Diary of a Wimpy Kid",
  number: 662,
  author: "Pahan"
};


function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        number={firstBook.number}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        number={secondBook.number}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        number={firstBook.number}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        number={secondBook.number}
      />
    </section>
  )
};
const Book = (props) => {
  console.log(props)
  return <article className="book">
    <img src={props.img} alt="dune" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    <h4>{props.number}</h4>

  </article>
}


ReactDom.render(<BookList />, document.getElementById('root'))