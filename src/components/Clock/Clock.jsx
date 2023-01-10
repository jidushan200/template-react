import React from 'react'
import ClockCss from './Clock.module.css'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick()
            , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick() {
        this.setState({date: new Date()});
    }


    render() {
        return (
            <div className={ClockCss.contColor}>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    };
}

export default Clock;
