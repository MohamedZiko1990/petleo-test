import React from "react";

class DropDownMenu extends React.Component {
  state = { month: null, year: null };

  handleDropMenuChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "1") {
      const date = new Date().toISOString();
      const [yyyy, mm, dd, h, i, s] = date.split(/T|:|-/);

      //   console.log(yyyy);
      //   console.log(mm - 1);
      if (mm > 1) {
        this.setState({ month: mm - 1, year: yyyy });
      } else {
        this.setState({ month: 12, year: yyyy - 1 });
      }
    } else if (event.target.value === "6") {
      console.log(event.target.value);
      const date = new Date().toISOString();
      const [yyyy, mm, dd, h, i, s] = date.split(/T|:|-/);

      if (mm > 6) {
        // console.log(yyyy);
        // console.log(mm - 6);
        this.setState({ month: mm - 6, year: yyyy });
      } else {
        // console.log(yyyy - 1);
        // console.log(mm - 6 + 12);
        this.setState({ month: mm - 6 + 12, year: yyyy - 1 });
      }
    } else if (event.target.value === "12") {
      console.log(event.target.value);
      const date = new Date().toISOString();
      const [yyyy, mm, dd, h, i, s] = date.split(/T|:|-/);

      //   console.log(yyyy - 1);
      //   console.log(mm);
      this.setState({ month: mm, year: yyyy - 1 });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSelect(this.state.month, this.state.year);
  };

  render() {
    return (
      <div className="m-auto">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <select onChange={this.handleDropMenuChange}>
              <option value="">Choose Duration</option>
              <option value="1" href="/">
                Last Month
              </option>
              <option value="6" href="/">
                Last 6 Months
              </option>
              <option value="12" href="/">
                Last year
              </option>
            </select>
          </div>
          <button type="submit" className="btn btn-secondary">
            Proceed
          </button>
        </form>
      </div>
    );
  }
}

export default DropDownMenu;
