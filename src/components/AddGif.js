import React from "react";
// can add a picture to an individual hog
class AddGif extends React.Component {
  state = {
    gifURL: ""
  };

  changeListener = e => {
    this.setState({ gifURL: e.target.value });
  };

  submitListener = e => {
    this.props.submitListener(e, this.state.gifURL);
    this.setState({ gifURL: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.gifURL}
          onChange={this.changeListener}
        />
        <button type="submit" onClick={this.submitListener}>
          Submit
        </button>
      </div>
    );
  }
}

export default AddGif;
