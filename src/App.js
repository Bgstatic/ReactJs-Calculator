import React, { Component } from 'react'
import Buttons from './components/Buttons'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      current: '',
      previous: [],
      nextIsReset: false

    }
  }

  reset = () => {

    this.setState({ current: "0", previous: [], nextIsReset: false });
  }

  addToCurrent = (symbol) => {

    if (["/", "-", "+", "-", "*"].indexOf(symbol) > -1) {

      let { previous } = this.state;
      previous.push(this.state.current + symbol);
      this.setState({

        previous,
        nextIsReset: true
      });

    } else {

      if ((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset) {

        this.setState({ current: symbol, nextIsReset: false });

      }
      else {
        this.setState({ current: this.state.current + symbol })
      }

    }
  }
  calculate = (symbol) => {
    let { current, previous, nextIsReset } = this.state;

    if (previous.length > 0) {

      current = eval(String(previous[previous.length - 1] + current));
      this.setState({ current, previous: [], nextIsReset: true })
    }

  }
  render() {
    const buttons = [

      { symbol: "C", cols: 3, tagName: "-is-clear", action: this.reset },
      { symbol: "/", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "7", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "8", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "9", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "*", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "4", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "5", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "6", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "-", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "1", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "2", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "3", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "+", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "0", cols: 2, tagName: "-is-zero", action: this.addToCurrent },
      { symbol: ".", cols: 1, tagName: "", action: this.addToCurrent },
      { symbol: "=", cols: 1, tagName: "-is-equals", action: this.calculate },

    ];

    return (
      <div className="App">
        {
          this.state.previous.length > 0 ?
            <div className="floaty-last">{this.state.previous[this.state.previous.length - 1]}</div>
            : ""
        }

        <input type="text" className="result" defaultValue={this.state.current} />

        <div className="calculator-buttons">

          {
            buttons.map((button, i) => {

              return (

                <Buttons key={i} symbol={button.symbol} cols={button.cols} tagName={button.tagName} action={(symbol) => button.action(symbol)} />
              )

            })
          }

        </div>

      </div>
    )
  }
}


export default App;
