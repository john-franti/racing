import React from "react";
import "./App.css";
import Car from "./components/Car";
import DriversForm from "./components/DriversForm";
import ROSTER from "./assets/ROSTER";
import _ from "lodash";
import Faker from "faker";
import RaceDataForm from "./components/RaceDataForm";
import EditCar from "./components/EditCar";
import { throwStatement } from "@babel/types";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // driversReady: false,
      driversReady: true,
      // drivers: [],
      driver: {
        fuelCapacity: 105,
        zeroFuelLaptime: 62376,
        driverName: `Kima Kahhinen`,
        image: Faker.image.image(),
        weightCost: 30,
        burnRate: 2.35,
        car: _.sample(ROSTER.cars),
        liveryColor: _.sample([
          "blue",
          "red",
          "silver",
          "grey",
          "green",
          "orange",
          "purple"
        ])
      },
      race: { laps: 55, pitTime: 22000 }
    };
  }

  updateCar = c => {
    console.log(c)
    this.setState(prevState=> {
      let newDriver = prevState.driver;
      newDriver.car = c;
      return {driver: newDriver}
    });
  };

  updateRace = r => {
    console.log("updating race", r);
    this.setState({ race: r });
  };

  showDrivers = () => {
    // return this.state.cars.map((driver, index) => {
    return <Car driver={this.state.driver} race={this.state.race} />;
    // });
  };

  render() {
    return (
      <div className="App">
        <h1>Race Strategy App</h1>
        <RaceDataForm race={this.state.race} onUpdateRace={this.updateRace} />
        <div>
          {this.state.driversReady ? (
            <div className="container">
              {/* <p>Click on Driver to Edit</p> */}
              <div className="row">
                <EditCar
                  onUpdateCar={this.updateCar}
                  roster={ROSTER.cars}
                  car={this.state.driver.car}
                />
                {this.showDrivers()}
              </div>
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
