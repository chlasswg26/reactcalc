import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className={`kolom-${this.props.cols}`}>
        <button
          className="tombol-kalkulator"
          onClick={ulangi => this.props.action(this.props.simbol)}
        >
          {this.props.simbol}
        </button>
      </div>
    );
  }
}

export default Button;
