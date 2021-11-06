import React from 'react'
import ReactDom from 'react-dom'
import './index.css';

const Books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL254_SR254,254_.jpg',
        title: "random",
        number: 22,
        author: "Alex"
    }
    ,
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL254_SR254,254_.jpg',
        title: "Big Shot Diary of a Wimpy Kid",
        number: 662,
        author: "Pahan"
    }
    ,
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL254_SR254,254_.jpg',
        title: "Big Shot Diary of a Wimpy Kid",
        number: 662,
        author: "Pahan"
    }
]



function BookList() {
    return (
        <section className="booklist">
            {
                Books.map((book) => {
                    return (
                        <Book
                            {...book}
                        />
                    )
                })
            }
        </section>
    )
};
const Book = ({ img, title, author, number }) => {
    const exemp = (pr) => {
        console.log(pr)
    }
    return <article className="book">

        <img src={img} alt="dune" />
        <h1 onClick={
            () => {
                exemp(author)
            }}
        >{title}</h1>
        <h4>{author}</h4>
        <h4>{number}</h4>

    </article>
}




ReactDom.render(<BookList />, document.getElementById('root'));




















