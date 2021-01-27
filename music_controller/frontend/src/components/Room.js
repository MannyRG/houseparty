import React, { Component } from "react";


export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            voteToSkip: 2,
            guestCanPuse: false,
            isHost: false,
        }
        this.roomCode = this.props.match.params.roomCode;
    }



    render() {

        return(
            <div>
                <h3>{this.roomCode}</h3>
                <p> Vote: {this.state.voteToSkip}</p>
                <p> Guest Can Pause: {this.state.guestCanPuse}</p>
                <p> Host: {this.state.isHost}</p>

            </div>
        )



    }






}