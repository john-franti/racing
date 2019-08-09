import React, { Component, Fragment } from "react";

class DriversForm extends Component {

    state = {
        numberOfCars: 1
    }

    updateCars = e => {
        this.setState({numberOfCars: e.target.value})
    }
    submitForm = e => {
        e.preventDefault();
        this.props.onSetCars(this.state.numberOfCars)
    }
    render () {
        return (
            <Fragment>
                <form onSubmit={this.submitForm}>
                    <h2>How many cars to plan for?</h2>
                    <label htmlFor="number-of-cars">Number of Cars (max 9):</label>
                    <input type="number" max="9" name="number-of-cars" value={this.state.numberOfCars} onChange={this.updateCars}/>
                    <button>Ready</button>
                </form>
            </Fragment>
        )
    }
}

export default DriversForm
