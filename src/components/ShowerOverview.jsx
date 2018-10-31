import React, {Component} from 'react'
import Table from './Table'
import fire from './fire'

class ShowerOverview extends Component {

    constructor(props) {
        super(props)
        this.state = {showers: [ ] }

        // this.state = {
        //     showers: [
        //         {
        //             'floor': 9,
        //             'status': false
        //         },
        //         {
        //             'floor': 11,
        //             'status': false
        //         },
        //         {
        //             'floor': 13,
        //             'status': false
        //         },
        //         {
        //             'floor': 15,
        //             'status': false
        //         }
        //     ]
        // }

        this.handleShowerInUse = this.handleShowerInUse.bind(this)
    }

    componentDidMount(){
        let db = fire.ref('appData')
        
        // Listen for changes in the firestore and update
        db.on('value', snapshot => {
            let d = snapshot.val()
            this.setState(d)
        })
    }

    handleShowerInUse(e){
        let currentState = this.state
        
        // Find the shower that was clicked in the list
        const targetShower = currentState.showers.find(
            (shower) => shower.floor === e
        )
        
        // Toggle the status of it
        let update_data = { showers: currentState.showers.map((shower)=> {
            if (shower == targetShower) {
                console.log('got it!', shower)
                shower.status = !shower.status
                console.log('changed it', shower)
                return shower
            } else {
                return shower
            }
        })}

        // Push up to the cloud db
        let db = fire.ref('appData')
        db.set(update_data)
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


export default ShowerOverview