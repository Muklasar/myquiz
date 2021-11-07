import React, { Component } from 'react'
import Answer from './Answer'
import PieChart from './PieChart'


class Content extends Component {
    constructor() {
        super()
        this.state = {
            checkAns: '',
            currentIndex: 0,
            score: 0,
            qz1score: '',
            qz2score: '',
            qz3score: '',
            quizEnd: false,
            crAns: 0,
            wrAns: 0,
        }
    }
    changeHandler = (ans) => {
        this.setState({ checkAns: ans })
        const currentAns = this.props.data[this.state.currentIndex].correct_answer
        const newIndex = this.state.currentIndex + 1
        if (ans.ans == currentAns) {
            this.setState({ score: this.state.score + 1, crAns: this.state.crAns + 1 })
        }
        else {
            this.setState({ score: this.state.score - 0.5, wrAns: this.state.wrAns + 1 })
        }
        // if (newIndex >= this.props.data.length) {
        //     this.setState({ quizEnd: true })
        // }
        console.log('ans', ans.ans)
    }

    nextHandler = () => {
        this.setState({ currentIndex: this.state.currentIndex + 1 })
    }
    prevHandler = () => {
        this.setState({ currentIndex: this.state.currentIndex - 1 })
    }
    submitHandler = () => {
        this.setState({ quizEnd: true, qz1score: this.state.score, currentIndex: 0 })
        this.props.endQuizHandler(true)
    }
    render() {
        const { data, quizEnd, newQuiz } = this.props
        const { currentIndex, score, crAns, wrAns } = this.state
        console.log("score", score)
        const allAns = data ? [data[currentIndex].correct_answer, ...data[currentIndex].incorrect_answers] : []
        const answer = allAns.map(ans => {
            return <Answer ans={ans} changeHandler={this.changeHandler} checkAns={this.state.checkAns} nextQuiz={this.nextQuiz} />
        })

        console.log('data', this.props.data)
        console.log('allAns', allAns)
        return (
            quizEnd ?
                <div className="d-flex flex-column justify-content-center align-items-center pt-2">
                    <h4 className="text-dark">Your Score is : {score}</h4>
                    <PieChart cr={crAns} wr={wrAns} />
                </div>
                :
                <div>
                    {data ?
                        <div>
                            <div className="container border-bottom">
                                <div className="row pt-4" style={{ height: '15vh' }}>
                                    {currentIndex + 1}. {data[currentIndex].question}
                                </div>
                            </div>
                            <div className="row p-5" style={{ height: '55vh' }}>
                                {answer}
                                <div className="col-3">
                                    {currentIndex != 0 &&
                                        <button className="btn btn-sm btn-info mt-4 p-2 text-white font-weight-bold" onClick={this.prevHandler}>Previous</button>
                                    }
                                </div>
                                <div className="col-6"></div>
                                <div className="col-3">
                                    {currentIndex + 1 == data.length ?
                                        <button className="btn btn-sm btn-info mt-4 text-white font-weight-bold" onClick={this.submitHandler} style={{ padding: '8px 20px' }}>Submit</button>
                                        : <button className="btn btn-sm btn-info mt-4 text-white font-weight-bold" onClick={this.nextHandler} style={{ padding: '8px 20px' }}>Next</button>
                                    }
                                </div>
                            </div>

                        </div>
                        :
                        <div className="d-flex justify-content-center align-items-center" style={{ padding: '10rem' }}>
                            <h4 className="text-dark">Select Your Quiz</h4>
                        </div>
                    }
                </div>
        )
    }
}

export default Content