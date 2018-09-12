const h = React.createElement;

// --------STATE----------------
// The only things that will change
let books = [
    'A Tale of Two Cities',
    'Book2',
    'Book3',
    'Book4',
    'Book5'
];
//----------------------------------

const titles = ['Bookstore', 'Store2', 'Store3'];

let removeBook = (bookToRemove) => {
    books = books.filter(book => book !== bookToRemove);
};

let addToBookTitle = (bookToChange) => {
    books = books.map(book => book === bookToChange ? book + 's' : book)
};

let BookRow = (props) => 
    h('li', {}, [
        h('h2', {}, props.title),
        h('button', {
            onClick: () => {
                removeBook(props.title);
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

let BookList = (props) => {
    return h('ul', {}, 
        props.books.map(bookTitle => 
            h(BookRow, {title: bookTitle})
        )
    );
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeTitleIndex: 0
        }
    }
    render() {
        return h('div', {}, [
            h('h1', {className: 'big-header'}, titles[this.state.storeTitleIndex]),
            h('button', {
                onClick: () => {
                    this.setState ({
                        storeTitleIndex: (this.state.storeTitleIndex + 1) % titles.length
                    })
                    console.log(this.state.storeTitleIndex);
                    rerender();
                }
            }, 'Change Title'),
            h(BookList, { books: books }),
            h('footer', {}, ['Copyright 2018']),
            h('a', {href: 'mypage.com'}, ['My Website'])
        ])
    }
}

let rerender = () => {
    ReactDOM.render(h(HomePage), document.querySelector('.react-root'));
};

rerender();