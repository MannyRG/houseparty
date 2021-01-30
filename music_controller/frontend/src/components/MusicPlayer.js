import React, { Component } from "react";
import { Grid, IconButton, Typography, Card, LinearProgress} from "@material-ui/core";
import PlayArrowIcons from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/Pause";






export default class MusicPlayer extends Component {
    constructor(props){
        super(props)
    }
    pauseSong() {
        console.log("pause")

    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
    };
        fetch("/spotify/pause", requestOptions);
    }
        
    playSong() {
        console.log("Play")
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
            };
        fetch("/spotify/play", requestOptions);
    }

    skipSong() {
        console.log("skip")
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
            };
        fetch("/spotify/skip", requestOptions);
    }




render(){
    const songsProgress = (this.props.time / this.props.duration) * 100
    return (
    <Card>
        <Grid container alighItems="center">
            <Grid item align="center"  xs={4}>
                <img src={this.props.image_url} height="100%" width="100%" />
            </Grid>
            <Grid item align="center" xs={8} >
                <Typography component="h5" variant="h5">
                    {this.props.title}
                </Typography>
                <Typography color="textSecondary" variant="subtitle1">
                    {this.props.artist}
                </Typography>
                <div>
                    <IconButton onClick={()=>{this.props.is_playing? this.pauseSong():this.playSong()}}>
                        {this.props.is_playing ? <PauseIcon /> : <PlayArrowIcons/>}
                    </IconButton>
                    <IconButton onClick={()=>this.skipSong()}>
                        <SkipNextIcon />{this.props.votes}/{this.props.votes_required}
                    </IconButton>
                </div>
            </Grid>
        </Grid>
        <LinearProgress variant="determinate" value={songsProgress}/>
    </Card>
    )
}

}




