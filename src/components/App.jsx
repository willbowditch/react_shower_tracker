import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showers: [
                {
                    'floor': 9,
                    'status': false
                },
                {
                    'floor': 11,
                    'status': false
                },
                {
                    'floor': 13,
                    'status': false
                },
                {
                    'floor': 15,
                    'status': false
                }
            ]
        }

        this.handleShowerInUse = this.handleShowerInUse.bind(this)
    }

    handleShowerInUse(e){
        this.setState((currentState) => {
            const targetShower = currentState.showers.find(
                (shower) => shower.floor === e
            )

            return{
                showers: currentState.showers.map((shower)=> {
                    if (shower == targetShower) {
                        shower.status = !shower.status
                        return shower
                    } else {
                        return shower
                    }
                })
            }
        })
    }


    render() {
        const showerData = this.state.showers

        return (
            <div className="row">
                <div className="col-sm-8">
                    <h1>Shower Tracker</h1>
                    <Table
                        showerData={showerData}
                        handleShowerInUse={this.handleShowerInUse}
                    />
                </div>
            </div>
        )
    }
}


export default App