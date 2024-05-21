// import {Component} from 'react'

// import './index.css'

// class Header extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       timer: 60,
//       isTimeOut: false,
//     }
//   }

//   componentDidMount() {
//     this.timerID = setInterval(this.tick, 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }

//   tick = () => {
//     this.setState(prevState => {
//       if (prevState.timer <= 1) {
//         clearInterval(this.timerID)
//         return {timer: 0, isTimeOut: true}
//       }
//       return {timer: prevState.timer - 1}
//     })
//   }

//   render() {
//     const {timer, isTimeOut} = this.state
//     const {score, gameOver, isTimerStop} = this.props
//     if (timer < 1) {
//       this.componentWillUnmount()
//     }
//     if (isTimeOut) {
//       gameOver()
//     }
//     if (isTimerStop) {
//       this.componentWillUnmount()
//     }
//     return (
//       <div className="header-bg">
//         <div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
//             alt="website logo"
//             className="header-img"
//           />
//         </div>
//         <div className="header-section2">
//           <p className="score-heading">
//             Score<span className="score">{score}</span>
//           </p>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
//             alt="timer"
//             className="timer-img"
//           />
//           <p className="score">
//             {timer}
//             <span> sec</span>
//           </p>
//         </div>
//       </div>
//     )
//   }
// }

// export default Header

import {Component} from 'react'
import './index.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 60,
      isTimeOut: false,
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentDidUpdate(prevProps) {
    const {resetTimer, isGameOver} = this.props
    if (resetTimer && resetTimer !== prevProps.resetTimer) {
      this.resetTimer()
    }
    if (isGameOver && !prevProps.isGameOver) {
      clearInterval(this.timerID)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  startTimer = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  resetTimer = () => {
    clearInterval(this.timerID)
    this.setState({timer: 60, isTimeOut: false}, this.startTimer)
  }

  tick = () => {
    this.setState(prevState => {
      const {gameOver} = this.props
      if (prevState.timer <= 1) {
        clearInterval(this.timerID)
        gameOver()
        return {timer: 0, isTimeOut: true}
      }
      return {timer: prevState.timer - 1}
    })
  }

  render() {
    const {timer} = this.state
    const {score} = this.props
    return (
      <ul className="header-bg">
        <li className="heading-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="header-img"
          />
        </li>
        <div className="header-section2">
          <li className="score-heading heading-list">
            <p>
              Score:<span className="score">{score}</span>
            </p>
          </li>
          <li className="heading-list">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
          </li>
          <li className="score heading-list">
            <p>{timer} sec</p>
          </li>
        </div>
      </ul>
    )
  }
}

export default Header
