//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Create a react component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, lon: null, errorMessage: ''};

        
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude, lon: position.coords.latitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }
    componentDidUpdate(){
        console.log('Something changed!');
    }
    componentWillUnmount(){
        console.log('It dissapeared');
    }
    renderContent () {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        else if(!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        }
        else {
            return <Spinner message="Please accept request for location"/>;
        }
    }
    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        
    }
}
//Take the react component and show it to screen
ReactDOM.render(
  <App />, 
  document.querySelector('#root')  
);