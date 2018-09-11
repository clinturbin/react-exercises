// Description of what we want the page to look like in its entirety
// It doesn't actually create it
// This is what we are responsible for in React

// let page = {
//     tag: 'div',
//     children: [
//         {
//             element: 'h1', 
//             children: ['Bookstore'],
//             props: {
//                 className: 'big-header'
//             }
//         },
//         {
//             element: 'ul', children: [
//                 {element: 'li', children: ['Book 1']},
//                 {element: 'li', children: ['Book 2']},
//                 {element: 'li', children: ['Book 3']},
//             ]
//         },
//         {
//             element: 'footer', children: 'Copyright 2018'
//         },
//         {
//             element: 'a', 
//             children: ['My Website'],
//             props: {
//                 href: 'mypage.com'
//             }
//         }
//     ] 
// }

//----------------------------

// let createElement = (element, props, children) => {
//     return {
//         element: element,
//         children: children,
//         props: props
//     }
// }

// let createElement = (element, props, children) => {
//     return {element, children, props}
// };

// let vdom = h('div', {}, [
//     h('h1', {className: 'big-header'}, ['Bookstore']),
//     h('ul', {}, [
//         h('li', {}, ['Book1']),
//         h('li', {}, ['Book2']),
//         h('li', {}, ['Book3']),
//     ]),
//     h('footer', {}, ['Copyright 2018']),
//     h('a', {href: 'mypage.com'}, ['My Website']),
// ]);

// ReactDOM.render(vdom, document.querySelector('.react-root'));

const h = React.createElement;


// --------STATE----------------
// The only things that wil change
let books = [
    'A Tale of Two Cities',
    'Book2',
    'Book3',
    'Book4',
    'Book5'
];

let storeTitleIndex = 0;
//----------------------------------

let titles = ['Bookstore', 'Store2', 'Store3'];

let removeBook = (bookToRemove) => {
    books = books.filter(book => book !== bookToRemove);
};

let addToBookTitle = (bookToChange) => {
    books = books.map(book => {
        if (book === bookToChange) {
            return book + 's'
        } else {
            return book
        }
    });
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

let HomePage = () => 
    h('div', {}, [
        h('h1', {className: 'big-header'}, titles[storeTitleIndex]),
        h('button', {
            onClick: () => {
                storeTitleIndex = (storeTitleIndex + 1) % titles.length;  // this basically wraps around
                rerender();
            }
        }, 'Change Title'),
        h(BookList, { books }),
        h('footer', {}, ['Copyright 2018']),
        h('a', {href: 'mypage.com'}, ['My Website']),
    ])

let rerender = () => {
    ReactDOM.render(h(HomePage), document.querySelector('.react-root'));
};

rerender();

