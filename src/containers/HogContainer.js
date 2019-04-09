import React from "react";
import Hog from "../components/Hog";
import SearchBar from "../components/SearchBar";
// hogs container
class HogContainer extends React.Component {
  state = {
    hogs: [],
    greaseFilterToggled: false,
    sort: {
      nameSort: false,
      weightSort: false
    }
  };
  componentDidMount() {
    this.setState({ hogs: this.props.hogs });
  }

  sortListener = e => {
    console.log(
      "sortListener: will automatically toggle other button if already selected"
    );
    if (e.target.value === "Name") {
      if (this.state.sort.weightSort) {
        this.setState(
          {
            sort: {
              nameSort: !this.state.sort.nameSort,
              weightSort: false
            }
          },
          () => this.sortByNameOrWeight("Name")
        );
      } else {
        this.setState(
          {
            sort: {
              ...this.state.sort,
              nameSort: !this.state.sort.nameSort
            }
          },
          () => this.sortByNameOrWeight("Name")
        );
      }
    } else {
      if (this.state.sort.nameSort) {
        this.setState(
          {
            sort: {
              nameSort: false,
              weightSort: !this.state.sort.weightSort
            }
          },
          () => this.sortByNameOrWeight("Weight")
        );
      } else {
        this.setState(
          {
            sort: {
              ...this.state.sort,
              weightSort: !this.state.sort.weightSort
            }
          },
          () => this.sortByNameOrWeight("Weight")
        );
      }
    }
  };

  sortByNameOrWeight = select => {
    if (select === "Name") {
      const sortedHogs = this.state.hogs.sort((x, y) => {
        return x.name.toLowerCase().localeCompare(y.name.toLowerCase());
      });
      this.setState({ hogs: [...sortedHogs] });
    } else {
      const sortedHogs = this.state.hogs.sort((x, y) => {
        return (
          x[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] -
          y[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        );
      });
      this.setState({ hogs: [...sortedHogs] });
    }
  };

  filterLinstener = () => {
    this.setState({ greaseFilterToggled: !this.state.greaseFilterToggled });
  };

  updateStateHogs = () => {
    if (this.state.greaseFilterToggled) {
      return this.state.hogs
        .filter(hog => hog.greased)
        .map(hog => <Hog hog={hog} />);
    } else {
      return this.state.hogs.map(hog => <Hog hog={hog} />);
    }
  };

  render() {
    // const hogs = this.state.hogs.map(hog => <Hog hog={hog} />);
    return (
      <div className="HogContainer">
        <h2>Hogs</h2>
        <span>
          copy image: https://media1.giphy.com/media/U82bSaJlqnsoU/giphy.gif
        </span>
        <img src="https://media1.giphy.com/media/U82bSaJlqnsoU/giphy.gif" />
        <SearchBar
          sortListener={this.sortListener}
          sort={this.state.sort}
          filterLinstener={this.filterLinstener}
          greased={this.state.greaseFilterToggled}
        />
        {this.updateStateHogs()}
      </div>
    );
  }
}

export default HogContainer;
