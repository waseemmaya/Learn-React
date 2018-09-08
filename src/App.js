import React, { Component } from 'react';
import QuizList from "./Quiz/QuizList"
import QuizInfo from "./Quiz/QuizInfo"
import AddForm from "./Components/AddForm"
import Search from "./Search/Search"
// import swal from 'sweetalert';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showList: true,
      quiz: null,
      list: [
        { name: "AngularJS", marks: 30 },
        { name: "React", marks: 90 },
        { name: "Javascript", marks: 50 },
        { name: "BitCoin", marks: 40 },
        { name: "Firebase", marks: 100 }
      ]
    }
    this.enterQuiz = this.enterQuiz.bind(this);
    this.back = this.back.bind(this);
  }

  render() {
    const { showList, list, quiz } = this.state;
    return (
      <div>
        <Search />
        <AddForm />
        {showList ?
          <QuizList list={list} enterQuiz={this.enterQuiz} /> :
          <QuizInfo quiz={quiz} back={this.back} />}

      </div>
    );
  }

  enterQuiz(index) {
    const { list } = this.state
    this.setState({
      showList: false,
      quiz: list[index]
    })
  }

  back() {
    this.setState({
      showList: true
    })
  }

}

export default App;
