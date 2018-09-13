const h = React.createElement;
const initialWassupPosts = [
    {
        id: 1,
        post: 'This is post 1'
    },
    {
        id: 2,
        post: 'This is post 2'
    },
    {
        id: 3,
        post: 'This is post 3'
    },
    {
        id: 4,
        post: 'This is post 4'
    },
];

let generateId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();


// props =  {addWassup: addWassup}
class WassupInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        }
    }

    render() {

        return h('form', {
            onSubmit: (event) => {
                event.preventDefault();
                this.props.addWassup(this.state.newWassup); //?????
            }
        },
            h('input', {
                type: 'text',
                value: this.state.newWassup,
                onChange: (event) => {
                    let value = event.target.value;
                    this.setState( { newWassup: value })
                }
            }),
            h('input', { type: 'submit', value: 'Post'})
        )
    }
};

let WassupRow = (props) => 
    h('li', {}, props.post.content)

let WassupList = (props) => 
    h('ul', {}, 
        props.posts.map(post => 
            h(WassupRow, {post: post, key: post.id})
        )
    )

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: []
        }
    };
    render() {
        let addWassup = (newWassup) => {
            this.setState( {
                wassups: this.state.wassups.concat([
                    {
                        id: generateId(),
                        content: newWassup
                    }
                ])
            })
        };

        return h('div', {}, 
            h('h1', {}, 'Wassup!!!!'),
            h(WassupInputForm, {addWassup: addWassup}),
            h(WassupList, {
                posts: this.state.wassups
            })
        );
    };
};

ReactDOM.render(h(HomePage), document.querySelector('.react-root'));