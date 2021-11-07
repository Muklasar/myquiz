import React, { Component } from 'react'
import Timer from './Timer'


class Sidenav extends Component {
    constructor(){
        super()
        this.state={
            qz1: false,
            qz2: false,
            qz2: false,
        }
    }
    render() {
        const {quizHandler, nextQuiz} = this.props
        return (
            <div className="bg-red">
                <div className="row  mt-5 pt-5 border-bottom">
                    <div className="col border-top p-2 " >
                        <div className="text-white">Quiz One</div>
                    </div>
                    <div className="col border-top">
                        <Timer quizHandler={quizHandler} nextQuiz={nextQuiz} id="1" tm="60" />
                    </div>
                </div>
                <div className="row pt-5 border-bottom">
                    <div className="col border-top p-2">
                        <div className="text-white">Quiz Two</div>
                    </div>
                    <div className="col border-top">
                        <Timer quizHandler={quizHandler} id="2" tm="40"/>
                    </div>
                </div>
                <div className="row pt-5 border-bottom">
                    <div className="col border-top p-2">
                        <div className="text-white">Quiz Three</div>
                    </div>
                    <div className="col border-top">
                        <Timer quizHandler={quizHandler} id="3" tm="30"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidenav