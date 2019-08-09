import React from "react";

class EditCar extends React.Component {
  state = {
    ...this.props.car,
    highFuel: 0,
    lowFuel: 0
  };
  handleSelectCar = e => {
    console.log(e.target.value);
    this.setState({ car: JSON.parse(e.target.value) });
  };
  handleChangeLow = t => {
    this.setState({ lowFuel: t.target.value });
  };
  handleChangeHigh = t => {
    this.setState({ highFuel: t.target.value });
  };
  setCar = () => {
    this.props.onUpdateCar({ ...this.state });
  };
  render() {
    return (
      <div className="card card col-sm-4">
        <h5 className="card-title">Edit Car Data</h5>
        <div className="card-body">
          <label>Select Car</label>
          <select style={{ width: "85%" }} onChange={this.handleSelectCar}>
            {this.props.roster.map((car, index) => {
            //   console.log(car);
              return (
                <option key={index} value={JSON.stringify(car)}>
                  {car.makeModel}
                </option>
              );
            })}
          </select>
          <hr />
          <div className="container">
            <h3>Fuel Calculation</h3>
            <label>Low Fuel Lap (Start w/ 10 liters):</label>
            <input
              style={{ width: "95%", textAlign: "center" }}
              type="number"
              step=".001"
              min="0"
              value={this.state.lowFuel}
              onChange={this.handleChangeLow}
            />
            <label>High Fuel Lap (Start w/ max fuel):</label>
            <input
              style={{ width: "95%", textAlign: "center" }}
              type="number"
              step=".001"
              min="0"
              value={this.state.highFuel}
              onChange={this.handleChangeHigh}
            />
          </div>
          <hr />
          <a onClick={this.setCar} href="#" className="btn btn-warning">
            Update Car
          </a>
        </div>
      </div>
    );
  }
}

export default EditCar;
