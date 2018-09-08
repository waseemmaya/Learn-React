import React, { Component } from 'react';


class QuizInfo extends Component {
   
    render() {
        const { back , quiz } = this.props;
        console.log(quiz);
        return (
                <div className="container mt-3 text-center">
                    <h1 className="display-3">Quiz Info</h1>
                    <br/>
                    <h3 className="display-5">Quiz Name :  <b>{quiz.name}</b></h3>
                    <h3 className="display-5">Total Marks : <b>{quiz.marks}</b></h3>
                    <button className="btn btn-info btn-lg" onClick={back}>Back to Quizzes</button>
                </div>
    );
    }
}

    export default QuizInfo;
