import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShowerOverview extends Component {
    render() {

        const id = this.props.match.params.id

        const gifs = Array(
            'https://media.giphy.com/media/DNTwAqUVIxlW8/giphy.gif',
            'https://media.giphy.com/media/13Hj3iy5HhfjGg/giphy.gif',
            'https://media.giphy.com/media/Qo99TlytAvuww/giphy.gif'
        )

        const random_gif = gifs[Math.floor(Math.random() * gifs.length)]

        return(
            <div>
                <h1>You're in shower {id}</h1>
                <img src={random_gif}></img>
            </div>
        )
    }
}

ShowerOverview.propTypes = {
    match: PropTypes.array
}

export default ShowerOverview