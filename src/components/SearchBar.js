import React from "react";
// can sort by name or weight. can filter by greased hogs
const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="checkbox"
          value="Name"
          checked={props.sort.nameSort}
          onChange={e => props.sortListener(e)}
        />
        Name
      </label>
      <label>
        <input
          type="checkbox"
          value="Weight"
          checked={props.sort.weightSort}
          onChange={e => props.sortListener(e)}
        />
        Weight
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <label>
          Greased
          <input
            type="checkbox"
            value="Greased"
            checked={props.greased}
            onChange={props.filterLinstener}
          />
        </label>
      </label>
    </div>
  );
};

export default SearchBar;
