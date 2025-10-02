import React from "react";

class TimerClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            isRunning: false,
        }
        this.interval = null;
    }

    start = () => {
        if(this.state.isRunning) return;
        this.interval = setInterval(() => {
            this.setState(prevState => ({seconds: prevState.seconds + 1}))
        }, 1000)
        this.setState({isRunning: true})
    }

    stop = () => {
        clearInterval(this.interval);
        this.setState({isRunning: false});
    }

    reset = () => {
        clearInterval(this.interval);
        this.setState({seconds: 0, isRunning: false})
    }

    componentDidMount() {
       const savedSeconds = localStorage.getItem('timerSeconds');
        if (savedSeconds !== null) {
            this.setState({ seconds: Number(savedSeconds) });
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('timerSeconds', this.state.seconds);
    }

    componentWillUnmount() {
        localStorage.removeItem('timerSeconds');
        clearInterval(this.interval);
    }


    render() {
        return(
            <div className="timer">
                <div className="timer__value">
                    <h2>Seconds: </h2>
                    <span className="timer__count">{this.state.seconds}</span>
                </div>
                <div className="timer__btns-container">
                    <button className="timer__btn-start" onClick={this.start}>Start</button>
                    <button className="timer__btn-start" onClick={this.stop}>Stop</button>
                    <button className="timer__btn-start" onClick={this.reset}>Reset</button>
                </div>
                
            </div>
        );
    }

}

export default TimerClass;