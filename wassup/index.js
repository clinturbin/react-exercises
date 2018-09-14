// fetch('http://0.tcp.ngrok.io:18229/wassups.json')
// .then(res => res.json())
// .then(wassups => {
//     this.setState({
//         wassups: wassups
//     });
// });


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
        console.log('Contsructor');
        super(props);
        this.state = {
            wassups: []
        };
        // this.getWassups(); => This goes in componentDidMount
        // Not allowed to call setState in constructor
        // you never call anything that could possibly cal setState in the constructor
        
    };

    getWassups() {
        console.log('Fetch');
        fetch('http://0.tcp.ngrok.io:18229/wassups.json')
            .then(res => res.json())
            .then(wassups => {
                this.setState({
                    wassups: wassups
                });
            });
    };


    render() {
        console.log('Im rendering');
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
                {/* <button onClick={() => this.getWassups()}>Refresh</button> */}
                <button onClick={this.getWassups.bind(this)}>Refresh</button>
                <WassupInputForm addWassup={addWassup} />
                <WassupList wassups={this.state.wassups} />
            </div>
        );
    };

    componentDidMount() {
        console.log('Page has been loaded');
        this.getWassups();
    };

    componentDidUpdate() {
        console.log('Update');
    }
};

ReactDOM.render(<HomePage/>, document.querySelector('.react-root'));