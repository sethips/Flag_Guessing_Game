import React, { Component } from "react";
import FlagChoices from "./FlagChoices";
import FlagAnswer from "./FlagAnswer";

const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      answer: {},
      options: [],
      userChoice: undefined,
      questionState: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(countries => {
        this.setState({
          ...this.state,
          countries
        });
        this.newQuestion();
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userChoice === this.state.answer.name) {
      this.setState({
        ...this.state,
        questionState: QuestionStates.ANSWER_CORRECT
      });
    } else {
      this.setState({
        ...this.state,
        questionState: QuestionStates.ANSWER_WRONG
      });
    }
  }

  handleClick(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  newQuestion() {
    let opt = [];
    for (let i = 0; i < 4; i++) {
      opt.push(
        this.state.countries[
          Math.floor(Math.random() * this.state.countries.length)
        ]
      );
    }
    let ans = opt[Math.floor(Math.random() * 4)];
    let options = opt.map(value => value.name);

    this.setState({
      ...this.state,
      answer: {
        name: ans.name,
        flag: ans.flag
      },
      options,
      userChoice: "",
      questionState: QuestionStates.QUESTION
    });
  }

  render() {
    let output =
      this.state.questionState === QuestionStates.QUESTION ? (
        <FlagChoices
          options={this.state.options}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
        />
      ) : (
        <FlagAnswer
          answer={this.state.answer}
          correct={this.state.questionState === QuestionStates.ANSWER_CORRECT}
          handleNext={this.newQuestion}
        />
      );

    return (
      <div className="container">
        <h1>Guess the flag</h1>
        {output}
        <img className="img-fluid" src={this.state.answer.flag} alt="Flag" />
      </div>
    );
  }
}

export default App;
