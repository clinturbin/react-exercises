import React, { Component } from 'react';
import HomePage from './homepage';
// import generateId from './generate-id';
import { connect } from 'react-redux';

let mapStateToProps = state => ({wassups: state.wassups})


class HomePageContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     wassups: []
    //     // };
    // };

    // getWassups() {
    //     console.log('Fetch');
    //     fetch('http://0.tcp.ngrok.io:11140/wassups.json')
    //         .then(res => res.json())
    //         .then(wassups => {
    //             this.setState({
    //                 wassups: wassups
    //             });
    //         });
    // };

    render() {
        // console.log('Im rendering');
        // let addWassup = (newWassup) => {
        //     this.setState( {
        //         wassups: props.wassups.concat([
        //             {
        //                 id: generateId(),
        //                 content: newWassup
        //             }
        //         ])
        //     })
        // };
        return <HomePage 
                    {...this.props} 
                    // addWassup={addWassup} 
                    wassups={this.props.wassups} />
    };

    // componentDidMount() {
    //     console.log('Page has been loaded');
    //     this.getWassups();
    // };

    // componentDidUpdate() {
    //     console.log('Update');
    // }
};


let ConnectedHomepage = connect(mapStateToProps)(HomePageContainer);

export default ConnectedHomepage;