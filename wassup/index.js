const h = React.createElement;

let generateId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

// props = { addWassup: addWassup }
class WassupInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        }
    }

    render() {
        return (
            <form
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        this.props.addWassup(this.state.newWassup);
                    }
            }>
                <input 
                    type='text'
                    value={this.state.newWassup}
                    onChange={
                        (event) => {
                            let value = event.target.value;
                            this.setState( {newWassup: value })
                        }
                    }
                />
                <input type='submit' value='Post'/>
            </form>
        );

        // return h('form', {
        //     onSubmit: (event) => {
        //         event.preventDefault();
        //         // Add the current input box content to the array in key wassups in HomePage
        //         // class. props is passed from HomePage which is where addWassup is called from
        //         this.props.addWassup(this.state.newWassup);
        //     }
        // },
            
        //     h('input', {
        //         type: 'text',
        //         value: this.state.newWassup, // gets the current content from text input
        //         onChange: (event) => {
        //             let value = event.target.value; // sets value to current content
        //             this.setState( { newWassup: value }) // set the state of newWassup to current content
        //         }
        //     }),
        //     h('input', { type: 'submit', value: 'Post'})
        // )
    }
};

let WassupRow = (props) => 
    // h('li', {}, props.wassup.content)
    <li>
        <p>{props.wassup.content}</p>
    </li>

let WassupList = (props) => 
    <ul>
        { props.wassups.map(wassup => 
            <WassupRow wassup={wassup} key={wassup.id} />
        ).reverse() }
    </ul>
    // h('ul', {}, 
    //     props.wassups.map(wassup => 
    //         h(WassupRow, {wassup: wassup, key: wassup.id})
    //     ).reverse()
    // )

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

        return (
            <div>
                <h1>Wassup!!!</h1>
                <WassupInputForm addWassup={addWassup} />
                <WassupList wassups={this.state.wassups} />
            </div>
        );
        // return h('div', {}, 
        //     h('h1', {}, 'Wassup!!!!'),
        //     h(WassupInputForm, {addWassup: addWassup}),
        //     h(WassupList, {
        //         wassups: this.state.wassups
        //     })
        // );
    };
};

// ReactDOM.render(h(HomePage), document.querySelector('.react-root'));
ReactDOM.render(<HomePage/>, document.querySelector('.react-root'));