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
      car: {
        fuelCapacity: 105,
        zeroFuelLaptime: 62376,
        driverName: `Kima Kahhinen`,
        image: Faker.image.image(),
        weightCost: 30,
        burnRate: 2.35,
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
      },
      race: { laps: 55, pitTime: 22000 }
    };
  }

  updateCar = c => {
    this.setState({car: Object.assign({...this.state.car},{makeModel: c.makeModel})});
  };

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
        weightCost: 30,
        burnRate: 2.35,
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

  updateRace = r => {
    console.log("updating race", r);
    this.setState({ race: r });
  };

  showDrivers = () => {
    // return this.state.cars.map((driver, index) => {
    return <Car car={this.state.car} race={this.state.race} />;
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
                  car={this.state.car}
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
