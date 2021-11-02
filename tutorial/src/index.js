import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
      <Title />
      <Author />
    </section>
  )
};
const Book = () => {
  return <article>
    <Image />
  </article>
}
const Image = () => {
  return (<img src="https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL254_SR254,254_.jpg" alt="Dune" />)
}
const Title = () => <h1>0.00 Free with Audible trial</h1>
const Author = () => <h4>Alex</h4>

ReactDom.render(<BookList />, document.getElementById('root'))