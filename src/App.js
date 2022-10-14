import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);

    // This is the only time we do direct assignment
    //to this.state
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        // we called setstate
        this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // react say .. we need to direct render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

export default App;
