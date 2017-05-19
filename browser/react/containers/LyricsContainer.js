import React, {Component} from 'react';
import Store from '../store';
import Lyrics from '../components/Lyrics';
import axios from 'axios';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';

export default class LyricsContainer extends Component {

    constructor(){
        super()
        this.state = Object.assign({
          artistQuery: '',
          songQuery: ''
        }, Store.getState())
        this.setArtist = this.setArtist.bind(this);
        this.setSong = this.setSong.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.unsubscribe = Store.subscribe(() => {
            this.setState(Store.getState())
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    setArtist(artist){
      this.setState({ artistQuery: artist })
    }

    setSong(song){
      this.setState({ songQuery: song })
    }

    handleSubmit(){

      event.preventDefault();
        if (this.state.artistQuery && this.state.songQuery) {
          Store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
        }
      }

    //     axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    //     .then(res => res.data)
    //     .then(obj => setLyrics(obj.lyric))
    //     .then(lyric => Store.dispatch(lyric))

    render(){
        return (
            <Lyrics
            text={this.state.lyrics.text}
            setArtist={this.setArtist}
            setSong={this.setSong}
            artistQuery={this.state.artistQuery}
            songQuery={this.state.songQuery}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}
