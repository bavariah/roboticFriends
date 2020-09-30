import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { Provider } from 'react-redux';
import ErrorBoundry from '../components/ErrorBoundry'
import { robots } from '../robots';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.lenght === 0) {
                return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
             <h1>RoboFriends</h1>
             <SearchBox searchChange={this.onSearchChange}/>
             <Scroll>
             <ErrorBoundry>
             <CardList robots={filteredRobots}/>
             </ErrorBoundry>
             </Scroll>
            </div>
    ); 
        }
    }
}

export default App;