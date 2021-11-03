import React from 'react'
import ReactDom from 'react-dom'
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
};
const Book = () => {
  return <article className="book">
    <Image style />
    <h1>0.00 Free with Audible trial</h1>
    <h4>Alex</h4>
  </article>
}
const Image = () => {
  return (<img src="https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL254_SR254,254_.jpg" alt="Dune" />)
}


ReactDom.render(<BookList />, document.getElementById('root'))