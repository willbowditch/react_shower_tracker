import React, {Component} from 'react'

// Return a table header
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Floor</th>
                <th>Status</th>
                <th>Occupy</th>
            </tr>
        </thead>
    )
}

// Loop through each row and print out a table
const TableBody = (props) => {

    const formatter = (bool) => {
        if(bool){
            return '🚿 In use!'
        }else{
            return '✅ Available'
        }
    }

    const rows = props.showerData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.floor}</td>
                <td>{formatter(row.status)}</td>
                <td><button onClick={() => {
                    props.handleShowerInUse(row.floor)
                }}>🙋‍</button></td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

// Higher level component to make use of the table functional components
class Table extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const showerData = this.props.showerData

        return (
            <table className="table">
                <TableHeader />
                <TableBody
                    showerData={showerData}
                    handleShowerInUse={this.props.handleShowerInUse}
                />
            </table>
        )
    }
}

export default Table