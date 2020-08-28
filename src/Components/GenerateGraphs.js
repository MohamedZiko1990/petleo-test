import React from "react";

class GenerateGraphs extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.onClick()}
        >
          Generate Graphs
        </button>
      </div>
    );
  }
}

export default GenerateGraphs;
