import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './components/content/Content'
import { Nav } from './components/nav/Nav'
import Sidenav from './components/sidenav/Sidenav'
import Topnav from './components/topnav/Topnav'
import { fetchDataAsync } from './redux/action/dataAction'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quiz: 0,
      quizData: '',
      endQuiz: false,
    }
  }
  componentDidMount() {
    this.props.fetchData()
  }
  quizHandler = (id) => {
    const { data } = this.props
    let pg = ''
    if (id == 1) {
      pg = data.slice(0, 6)
    }
    if (id == 2) {
      pg = data.slice(7, 13)
    }
    if (id == 3) {
      pg = data.slice(13, 19)

    }

    console.log('pg', pg)
    this.setState({ quizData: pg, endQuiz: false })
  }
  endQuizHandler = (value) => {
    this.setState({ endQuiz: value })
  }
  render() {
    const { quizData, endQuiz } = this.state
    return (
      <div className="full-container" style={{ backgroundColor: "#fdfafd", fontFamily: 'Arial', textIndent: '1px' }}>
        <div className="row">
          <Nav />
        </div>
        <div className="row shadow m-5 bg-body rounded ">
          <div className="col-3 bg-info" style={{ height: '70vh' }}>
            <Sidenav quizHandler={this.quizHandler} nextQuiz={this.nextQuiz} />
          </div>
          <div className="col-9" style={{ height: '70vh' }}>
            <Content data={quizData} quizEnd={endQuiz} endQuizHandler={this.endQuizHandler} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDataAsync())
})

const mapStateToProps = ({ data: { data } }) => ({
  data: data
})


export default connect(mapStateToProps, mapDispatchToProps)(App)