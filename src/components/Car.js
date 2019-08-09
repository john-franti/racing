import React from "react";
import "../assets/Car.css";
import humanizeDuration from "humanize-duration";

class Car extends React.Component {
  constructor({ car }) {
    super();
    this.state = { car: car };
  }
  msToTime(s) {
    // Pad to 2 or 3 digits, default is 2
    var pad = (n, z = 2) => ("00" + n).slice(-z);
    return (
      pad(((s % 3.6e6) / 6e4) | 0) +
      ":" +
      pad(((s % 6e4) / 1000) | 0) +
      "." +
      pad(s % 1000, 3)
    );
  }
  render() {
    const { car } = this.state;
    return (
      <div
        className="card col-sm-4"
        style={{ width: "18rem", borderColor: car.liveryColor }}
      >
        <h5 class="card-title">{car.driverName}</h5>
        <div className="card-body">
          <h6 className="card-title">Type: {car.makeModel}</h6>
          <h6 className="card-title">Maximum Fuel: {car.fuelCapacity}</h6>
          <h6 className="card-title">
            Average Lap: {this.msToTime(car.zeroFuelLaptime)}
          </h6>
          <form>
            <label htmlFor="stops">How many stops:</label>
            <br />
            <input type="radio" name="vehicle1" value="1" /> 1 {"   "}
            <input type="radio" name="vehicle1" value="2" /> 2 {"   "}
            <input type="radio" name="vehicle1" value="3" /> 3 {"   "}
            <button className="btn btn-primary">Calculate Result</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Car;
