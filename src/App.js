import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './Card.css';
import react from './react.png';


/* if the component is not deconstructed like above we can use React.component */
class App extends Component {
    constructor() {         /* We can pass on our own parameters in the constructor if we want*/
        super()                         /*Since we are extending a class we should use super to call the object of the extended class */
        this.state = {                          /* @this.state belongs to the Component class */
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        /* this is a setter method */
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        const loading = {
            background: 'black',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            textAlign: 'center',
        }


        if (this.state.robots.length === 0){
            return (
                <div style={loading}>
                    <img className="image" alt='loading..' src={react} height='200px' width='200px'/>
                    <h3 style={{color: 'white'}}>loading...</h3>
                </div>
            );
        }else {
            return (
                <div className='main'>
                    <h1 className='title'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/** properties passed to a react element @<CardList /> is not chageable
                        // we need state which is a changable prop
                        this.state @above looks if the state of the search field has changed or not
                        **/}

                    { /* we are passing the robots props we is already defined */}    
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;