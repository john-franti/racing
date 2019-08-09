import React from "react";
import "./App.css";
import Car from "./components/Car";
import DriversForm from "./components/DriversForm";
import ROSTER from "./assets/roster";
import _ from "lodash";
import Faker from "faker";
import RaceDataForm from "./components/RaceDataForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      driversReady: false,
      drivers: [],
      race: { laps: 55, pitTime: 22 }
    };
  }

  setCars = n => {
    let driversArray = [];
    for (let i = 0; i < n; i++) {
      const newCar = {
        fuelCapacity: _.sample([95, 105, 115]),
        zeroFuelLaptime: Math.floor(
          Math.random() * (62000 - 59000 + 1) + 59000
        ),
        driverName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        image: Faker.image.image(),
        makeModel: _.sample(ROSTER.cars),
        liveryColor: _.sample([
          "blue",
          "red",
          "silver",
          "grey",
          "green",
          "orange",
          "purple"
        ])
      };
      driversArray.push(newCar);
    }
    this.setState(() => {
      let sortedArray = driversArray.sort((a, b) => {
        return a.zeroFuelLaptime > b.zeroFuelLaptime ? 1 : -1;
      });
      return {
        driversReady: true,
        drivers: sortedArray
      };
    });
  };

  showDrivers = () => {
    return this.state.drivers.map((driver, index) => {
      return <Car key={index} car={driver} />;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Race Strategy App</h1>
        <RaceDataForm data={this.state.race} />
        <div>
          {this.state.driversReady ? (
            <div className="container">
              <div className="row">{this.showDrivers()}</div>
            </div>
          ) : (
            <DriversForm onSetCars={this.setCars} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
