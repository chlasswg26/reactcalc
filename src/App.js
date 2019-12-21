import React, { Component } from "react";
import Button from "./components/Button";
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "0",
      previous: [],
      nextIsReset: false
    };
  }

  reset = ulangi => {
    this.setState({ current: "0", previous: [], nextIsReset: false });
  };

  addToCurrent = simbol => {
    if (["/", "-", "+", "*"].indexOf(simbol) > -1) {
      let { previous } = this.state;
      previous.push(this.state.current + simbol);
      this.setState({ previous, nextIsReset: true });
    } else {
      if (
        (this.state.current === "0" && simbol !== ".") ||
        this.state.nextIsReset
      ) {
        this.setState({ current: simbol, nextIsReset: false });
      } else {
        this.setState({ current: this.state.current + simbol });
      }
    }
  };

  kalkulasi = simbol => {
    let { current, previous } = this.state;
    if (previous.length > 0) {
      // eslint-disable-next-line
      current = eval(String(previous[previous.length - 1] + current));
      this.setState({
        current,
        previous: [],
        nextIsReset: true
      });
    }
  };

  render() {
    const buttons = [
      { simbol: "C", cols: 3, action: this.reset },
      { simbol: "/", cols: 1, action: this.addToCurrent },
      { simbol: "7", cols: 1, action: this.addToCurrent },
      { simbol: "8", cols: 1, action: this.addToCurrent },
      { simbol: "9", cols: 1, action: this.addToCurrent },
      { simbol: "*", cols: 1, action: this.addToCurrent },
      { simbol: "4", cols: 1, action: this.addToCurrent },
      { simbol: "5", cols: 1, action: this.addToCurrent },
      { simbol: "6", cols: 1, action: this.addToCurrent },
      { simbol: "-", cols: 1, action: this.addToCurrent },
      { simbol: "1", cols: 1, action: this.addToCurrent },
      { simbol: "2", cols: 1, action: this.addToCurrent },
      { simbol: "3", cols: 1, action: this.addToCurrent },
      { simbol: "+", cols: 1, action: this.addToCurrent },
      { simbol: "0", cols: 2, action: this.addToCurrent },
      { simbol: ".", cols: 1, action: this.addToCurrent },
      { simbol: "=", cols: 1, action: this.kalkulasi }
    ];

    return (
      <div className="App">
        {this.state.previous.length > 0 ? (
          <div className="floaty-last">
            {this.state.previous[this.state.previous.length - 1]}
          </div>
        ) : null}
        <input
          className="hasil"
          type="text"
          readOnly
          value={this.state.current}
        />

        {buttons.map((btn, i) => {
          return (
            <Button
              key={i}
              simbol={btn.simbol}
              cols={btn.cols}
              action={simbol => btn.action(simbol)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
