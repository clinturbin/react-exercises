let generateId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

let WassupInputForm = (props) => 
    <form onSubmit={ (event) => {
        event.preventDefault();
        props.addWassup(props.newWassup);
    }}>
        <input 
            type='text'
            value={props.newWassup}
            onChange={  (event) => {
                let value = event.target.value;
                props.updateWassup(value);
            }}
        />
        <input type='submit' value='Post'/>
    </form>

class WassupInputFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        }
    }
    render() {
        let updateWassup = (value) => {
            this.setState({
                newWassup: value
            });
        };
        return <WassupInputForm 
                    {...this.props}
                    newWassup={this.state.newWassup}
                    updateWassup={updateWassup} 
                />
    };
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
    };

    getWassups() {
        console.log('Fetch');
        fetch('http://0.tcp.ngrok.io:11971/wassups.json')
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
                <button onClick={this.getWassups.bind(this)}>Refresh</button>
                <WassupInputFormContainer 
                    {...this.props}
                    addWassup={addWassup} />
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