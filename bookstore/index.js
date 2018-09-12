const h = React.createElement;
const initialBooks = [
    'A Tale of Two Cities',
    'Book2',
    'Book3',
    'Book4',
    'Book5'
];
const titles = ['Bookstore', 'Store2', 'Store3'];


let BookRow = (props) =>
    h('li', {}, [
        h('h2', {}, props.title),
        h('button', {
            onClick: () => {
                props.removeBook(props.title);
            }
        }, 'Delete Me'),
        h('button', {
            onClick: () => {
                props.snakeify(props.title);
            }
        }, 'Add S'),
        h('p', {}, 'Lorem Ipsum'),
    ]
);

let BookList = (props) => {
    return h('ul', {}, 
        props.books.map(bookTitle => 
            h(BookRow, {
                title: bookTitle,
                removeBook: props.removeBook,
                snakeify: props.snakeify
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
        };

        let snakeify = (bookToStringify) => {
            let newBooks = this.state.books.map(book => 
                book === bookToStringify ? book + 's' : book
            );
            this.setState({
                books: newBooks
            })
        };

        return h('div', {}, [
            h('h1', {className: 'big-header'}, titles[this.state.storeTitleIndex]),
            h('button', {
                onClick: () => {
                    this.setState ({
                        storeTitleIndex: (this.state.storeTitleIndex + 1) % titles.length
                    })
                }
            }, 'Change Title'),
            h(BookList, { 
                books: this.state.books,
                removeBook: removeBook,
                snakeify: snakeify
            }),
            h('footer', {}, ['Copyright 2018']),
            h('a', {href: 'mypage.com'}, ['My Website'])
        ])
    }
}

ReactDOM.render(h(HomePage), document.querySelector('.react-root'));