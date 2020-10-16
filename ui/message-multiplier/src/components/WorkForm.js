const React = require('react');
const axios = require('axios');

class WorkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            repetitions: 0
        }
    }

    submitMessageRequest = () => {
        let body = { 
            message: this.state.message, 
            repetitions: this.state.repetitions
        }

        axios.post("http://localhost:3001/submit", body )
            .then(
                response => {
                    console.log(response)
                    window.alert('Submitted')
                    this.setState({
                        message: '',
                        repetitions: 0
                    })
                })
            .catch(
                error => console.log(error)
            )
    }

    updateMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    updateRepetitions = (event) => {
        this.setState({
            repetitions: event.target.value
        })
    }

    render = () => {
        return(
            <div>
                <textarea placeholder="message" value={this.state.message} onChange={this.updateMessage}></textarea>
                <input type="number" min="0" max="3000" placeholder="repetitions" value={this.state.repetitions} onChange={this.updateRepetitions}></input>
                <button onClick={this.submitMessageRequest}>Submit</button>
            </div>
        )
    }
}

export default WorkForm;