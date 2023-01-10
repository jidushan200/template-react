import React from 'react'
import ClockUserCss from './ClockUser.module.css'

class ClockUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick()
            , 3000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick() {
        this.setState({date: new Date()});
    }


    render() {
        return (
            <div className={ClockUserCss.contColor}>
                {this.state.date.toLocaleString()}
            </div>
        )
    };
}

export default ClockUser;
