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
const BookList = () => {
    return (
        <section className='booklist'>
            {
                Books.map((key) => {
                    return (
                        <Book
                            name={key}
                        />
                    )
                })
            }

        </section>

    )
}

function Book(props) {
    return (
        <div>
            <img src={props.name.img} alt="" />
            <h2>{props.name.title}</h2>
            <h3>{props.name.author}</h3>
        </div>
    )
}


// function BookList() {
//     return (
//         <section className="booklist">
//             {
//                 Books.map((book) => {
//                     return (
//                         <Book
//                             name={book}
//                         />
//                     )
//                 })
//             }
//         </section>
//     )
// };
// const Book = (props) => {
//     return <article className="book">
//         <img src={props.name.img} alt="dune" />
//         <h1>{props.name.title}</h1>
//         <h4>{props.name.author}</h4>
//         <h4>{props.name.number}</h4>

//     </article>
// }




ReactDom.render(<BookList />, document.getElementById('root'));




















