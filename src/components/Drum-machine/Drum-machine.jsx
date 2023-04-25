import React from "react";
import "./Drum-machine.scss";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSong();
    }
  }

  handleColor() {
    const elem = document.getElementById(this.props.clipId);
    elem.style.backgroundColor = this.props.color;
    setTimeout(() => (elem.style.backgroundColor = "white"), 100);
  }

  playSong() {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
    this.handleColor();
  }

  render() {
    return (
      <div
        className="drum-pad cell"
        id={this.props.clipId}
        onClick={this.playSong}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumMachine;
