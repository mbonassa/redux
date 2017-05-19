import React, {Component} from 'react';
import Store from './store';

export default class LyricsContainer extends Component {

    constructor(){
        super()
        this.state = Store.getState()
    }

    componentDidMount(){
        this.unsubscribe = Store.subscribe(() => {
            this.setState(Store.getState())
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        return (
            <h1>Just a container, more to come!</h1>
        )
    }
}