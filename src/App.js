import React from "react";
import "./styles.scss";
import DrumMachine from "./components/Drum-machine/Drum-machine";
import songData from "./songs";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songData,
      display: "MR.ROBOTO"
    };
    this.displayName = this.displayName.bind(this);
  }

  displayName(name) {
    this.setState({
      display: name
    });
  }

  render() {
    const songInfo = this.state.songData;
    return (
      <div className="App">
        <div id="drum-machine">
          <h1 className="title">Play The Drums!</h1>
          <div id="display">{this.state.display}</div>
          <div id="buttons">
            {songInfo.map((x, i, songArr) => {
              return (
                <DrumMachine
                  clip={songArr[i].url}
                  clipId={songArr[i].id}
                  keyCode={songArr[i].keyCode}
                  keyTrigger={songArr[i].keyTrigger}
                  updateDisplay={this.displayName}
                  color={songArr[i].color}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
