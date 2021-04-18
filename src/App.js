import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Typer />
    </div>
  );
}

class Typer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "",
      bottom: ""
    };
    this.topTo = "Andy Levine";
    this.topFull = false;
    this.bottomTo = "Site Coming Soon.";
    this.i = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (!this.topFull) {
      let top = this.topTo.substr(0, this.i);
      this.setState({ top });
      if (this.i === this.topTo.length) {
        this.i = 0;
        this.topFull = true;
        return;
      }
    }
    if (this.topFull) {
      let bottom = this.bottomTo.substr(0, this.i);
      this.setState({ bottom });
      if (this.i === this.bottomTo.length) {
        clearInterval(this.interval);
        this.i = 0;
        return;
      }
    }
    this.i++;
  }

  render() {
    return (
      <>
        <h1 id="top">{this.state.top}</h1>
        <h2 id="bottom">{this.state.bottom}</h2>
        <a href="https://github.com/The-Faulty/" className="gitLink button">
          <img
            className="gitIco"
            alt=""
            src="https://img.icons8.com/material-rounded/256/000000/github.png"
          />
        </a>
        <a href="https://openDiscourse.alevine.dev" className="openDisc button">
          openDiscourse
        </a>
      </>
    );
  }
}
