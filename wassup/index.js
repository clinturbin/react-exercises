const h = React.createElement;
const initialWassupPosts = [
    {
        id: 1,
        post: 'This is post 1'
    },
    {
        id: 1,
        post: 'This is post 2'
    },
    {
        id: 1,
        post: 'This is post 3'
    },
    {
        id: 1,
        post: 'This is post 4'
    },
];

let WassupTextInputBox = (props) => 
    h('input', {type: 'text'})

let WassupInputSubmitButton = (props) => 
    h('button', {}, 'Wassup')

let WassupInputForm = (props) => 
    h('div', {}, [
        h(WassupTextInputBox),
        h('br', {}),
        h(WassupInputSubmitButton)
    ])

// props = {id: 1, post: 'This is post 1}
let WassupPostDisplay = (props) => 
    h('li', {}, props.post)

// props = {posts: [{id: 1, 'This is Post 1'}, {id: 2, post: 'This is Post2}]}
let WassupPostsDisplay = (props) => 
    h('ul', {}, 
        props.posts.map(post => 
            h(WassupPostDisplay, post)
        )
    )

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: initialWassupPosts
        }
    };
    render() {

        return h('div', {}, [
            h('h1', {}, 'Wassup!!!!'),
            h(WassupInputForm),
            h(WassupPostsDisplay, {
                posts: this.state.posts
            })
        ]);
    };
};

ReactDOM.render(h(HomePage), document.querySelector('.react-root'));