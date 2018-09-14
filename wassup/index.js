let generateId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

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
                }
            >
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
    }
};

let WassupRow = (props) => 
    <li>
        <p>{props.wassup.content}</p>
    </li>

let WassupList = (props) => 
    <ul>
        { props.wassups.map(wassup => 
            <WassupRow wassup={wassup} key={wassup.id} />
        ).reverse() }
    </ul>

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
    };
};

ReactDOM.render(<HomePage/>, document.querySelector('.react-root'));