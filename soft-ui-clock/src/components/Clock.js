import React, { Component } from "react";
import Clock from 'react-clock';

class ClockComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      seconds: '',
      minutes: '',
      hours: ''
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),

    });
  }
  render() {
    return (
      <div className="clock_container">
        <div className="clock_background">
          <h1 className="digital_clock">
            {this.state.time.toLocaleTimeString()}
          </h1>
        </div>
        <div className="analog_clock_background">
            <Clock className="analog_clock" value={this.state.time}
            renderMinuteMarks={false} renderHourMarks={false} renderSecondHand={false}
            />
        </div>
       
       </div>
    )
  }
}

export default ClockComp
