import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <form class="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    class="form-control"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    class="form-control"
                    value={job}
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    value="Submit"
                    class="btn btn-primary"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;