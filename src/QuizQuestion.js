import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                  {this.props.quiz_question.answer_options.map((current, index) => {
                      return <QuizQuestionButton key = {index} 
                                        button_text = {current}
                                        clickHandler = {this.handleClick.bind(this)}/>
                    })}
              </ul>
            </section>
            { (this.state.incorrectAnswer) ? 
            (<p className = "error">Sorry, that's not right</p>)
            : null }
          </main> 
        )
    }

    handleClick(buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler()
            this.setState({incorrectAnswer: false})
        } else {
          this.setState({incorrectAnswer: true})
        }
    }

    constructor(props) {
      super(props)
      this.state = {incorrectAnswer: false}
    }
}
export default QuizQuestion