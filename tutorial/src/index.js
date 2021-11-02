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
    <Image />
    <Title />
    <Author />
  </article>
}
const Image = () => {
  return (<img src="https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL254_SR254,254_.jpg" alt="Dune" />)
}
const Title = () => <h1>0.00 Free with Audible trial</h1>
const Author = () => <h4>Alex</h4>

ReactDom.render(<BookList />, document.getElementById('root'))