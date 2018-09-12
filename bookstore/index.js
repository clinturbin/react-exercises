const h = React.createElement;
const initialBooks = [
    'A Tale of Two Cities',
    'Book2',
    'Book3',
    'Book4',
    'Book5'
];
const titles = ['Bookstore', 'Store2', 'Store3'];

let removeBook = (bookToRemove) => {
    books = books.filter(book => book !== bookToRemove);
};

let addToBookTitle = (bookToChange) => {
    books = books.map(book => book === bookToChange ? book + 's' : book)
};

let BookRow = (props) => // props = {title: 'bookTitle', removeBook: removeBook}
    h('li', {}, [
        h('h2', {}, props.title),
        h('button', {
            onClick: () => {
                props.removeBook(props.title);
                rerender();
            }
        }, 'Delete Me'),
        h('button', {
            onClick: () => {
                addToBookTitle(props.title);
                rerender();
            }
        }, 'Add S'),
        h('p', {}, 'Lorem Ipsum'),
    ]
);

let BookList = (props) => {    // props =  {books: [list of books], removeBook: removeBook}
    return h('ul', {}, 
        props.books.map(bookTitle => 
            h(BookRow, {
                title: bookTitle,
                removeBook: props.removeBook
            })
        )
    );
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeTitleIndex: 0,
            books: initialBooks
        }
    }
    render() {
        let removeBook = (bookToRemove) => {
            this.setState({
                books: this.state.books.filter(book => 
                    book !== bookToRemove)
            })
        }
        return h('div', {}, [
            h('h1', {className: 'big-header'}, titles[this.state.storeTitleIndex]),
            h('button', {
                onClick: () => {
                    this.setState ({
                        storeTitleIndex: (this.state.storeTitleIndex + 1) % titles.length
                    })
                    rerender();
                }
            }, 'Change Title'),
            h(BookList, { 
                books: this.state.books,
                removeBook: removeBook 
            }),
            h('footer', {}, ['Copyright 2018']),
            h('a', {href: 'mypage.com'}, ['My Website'])
        ])
    }
}

let rerender = () => {
    ReactDOM.render(h(HomePage), document.querySelector('.react-root'));
};

rerender();