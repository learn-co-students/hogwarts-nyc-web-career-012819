import React from "react";
import HogDetail from "./HogDetail";
import AddGif from "./AddGif";
// Display an individual Hog
class Hog extends React.Component {
  state = {
    clicked: false,
    addClicked: false,
    gifUrl: ""
  };

  clickListener = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  addListener = () => {
    this.setState({ addClicked: !this.state.addClicked });
  };

  submitListener = (e, url) => {
    e.preventDefault();
    this.setState({
      gifUrl: url,
      addClicked: false
    });
  };

  render() {
    const { hog } = this.props;
    return (
      <div className="oneHog">
        <strong>{hog.name}</strong>
        <p>Specialty: {hog.specialty}</p>
        {this.state.gifUrl ? <img src={this.state.gifUrl} /> : null}
        <button onClick={this.clickListener}>Detail</button>
        <button onClick={this.addListener}>Add gif</button>
        <br />
        <div>{this.state.clicked ? <HogDetail {...hog} /> : null}</div>
        <div>
          {this.state.addClicked ? (
            <AddGif submitListener={this.submitListener} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Hog;
