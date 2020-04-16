import React, { Component } from 'react'

class PomodoTimer extends Component {
  state = {
    minutes: 25,
    seconds: 0
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state

        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        } 
    }, 1000)
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  render() {
    const { minutes, seconds } = this.state

    return (
      <div>
        <h2 className="PomodoTimer">PomodoTimer: { minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h2>
        
      </div>
    )
  }
}

export default PomodoTimer