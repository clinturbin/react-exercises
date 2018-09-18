import React, { Component } from 'react';
import WassupInputForm from './wassup-form';

class WassupInputFormContainer extends Component {
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

export default WassupInputFormContainer;