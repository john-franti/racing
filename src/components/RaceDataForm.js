import React from "react";

class RaceDataForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      laps: props.race.laps,
      pitTime: props.race.pitTime/1000
    };
  }

  changeLaps = e => {
    this.setState({ laps: e.target.value });
  };

  changePitTime = e => {
    this.setState({ pitTime: e.target.value });
  };

  updateRace = e => {
    e.preventDefault();
    this.props.onUpdateRace({
        laps: this.state.laps,
        pitTime: this.state.pitTime*1000
    });
  };

  render() {
    const { laps, pitTime } = this.state;

    return (
      <form onSubmit={this.updateRace}>
        <label>Laps</label>
        <input type="number" value={laps} onChange={this.changeLaps} />
        <label>Pitlane Time (seconds) </label>
        <input
          type="number"
          value={pitTime}
          onChange={this.changePitTime}
        />
        <button>Update</button>
      </form>
    );
  }
}

export default RaceDataForm;
