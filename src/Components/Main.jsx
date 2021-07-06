import React, { Component } from "react";

import Unsplash from "./unsplash";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      temp: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ temp: false });
    this.setState({ search: e.target.value });
  }

  handleClick() {
    console.log("yoo");
    console.log(this.state.search);
    this.setState({ temp: true });
    <Unsplash search={this.state.search} />;
  }
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <br />
            <h5></h5>
            <div className="bg-white p-5 rounded shadow">
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search..."
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link text-primary"
                      onClick={this.handleClick}
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {this.state.temp ? (
            <Unsplash search={this.state.search} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
export default Main;
