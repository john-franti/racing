import React from 'react'

class RaceDataForm extends React.Component {
    render() {
        return (
            <form>
                <label>Laps</label>
                <input type="number" />
                <label>Pitlane Time</label>
                <input type="number"/>
                <button>Update</button>
            </form>
        )
    }
}

export default RaceDataForm