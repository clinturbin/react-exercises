import React, { Component } from 'react';
import HomePage from './homepage';
import generateId from './generate-id';

import { connect } from 'react-redux';

let mapStateToProps = state => {
    return {wassups: state.wassups};
};

let HomePageSmart = connect(mapStateToProps)(HomePage);

// let HomePageSmart = connect(state => {
//     return {wassups: state.wassups}
// })(HomePage);

export default HomePageSmart;

// this.state.counter => this.props.ctr (ctr = wassups)

// class HomePageContainer extends Component {
//     constructor(props) {
//         console.log('Contsructor');
//         super(props);
//         this.state = {
//             wassups: []
//         };
//     };

//     getWassups() {
//         console.log('Fetch');
//         fetch('http://0.tcp.ngrok.io:11140/wassups.json')
//             .then(res => res.json())
//             .then(wassups => {
//                 this.setState({
//                     wassups: wassups
//                 });
//             });
//     };

//     render() {
//         console.log('Im rendering');
//         let addWassup = (newWassup) => {
//             this.setState( {
//                 wassups: this.state.wassups.concat([
//                     {
//                         id: generateId(),
//                         content: newWassup
//                     }
//                 ])
//             })
//         };
//         return <HomePage 
//                     {...this.props} 
//                     addWassup={addWassup} 
//                     wassups={this.state.wassups} />
//     };

//     componentDidMount() {
//         console.log('Page has been loaded');
//         this.getWassups();
//     };

//     componentDidUpdate() {
//         console.log('Update');
//     }
// };

// export default HomePageContainer;