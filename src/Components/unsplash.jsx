import React, { Component } from "react";

import axios from "axios";
class Unsplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: null,
      page: 0,
    };
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidMount() {
    this.getPhotos();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getPhotos();
    }
  }
  async getPhotos() {
    const { page } = this.state;
    console.log("hii");
    await axios
      .get(
        `https://api.unsplash.com/search/photos?page=5&per_page=1${page}&query=${this.props.search}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      )
      .then((res) => {
        this.setState({ datas: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("error while fetching data from api");
      });
  }
  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 10,
    }));
    console.log(this.state.page);
  };

  render() {
    return (
      <div>
        {this.state.datas ? (
          <div>
            <div className="row">
              {this.state.datas.results.map((data) => {
                return (
                  <div key={data.id} className="col-4">
                    <img
                      src={data.urls.full}
                      alt={data.alt_description}
                      className="img-thumbnail img-fluid"
                    ></img>
                  </div>
                );
              })}
            </div>
            <br />
            <div className="text-center">
              <button className="btn btn-secondary" onClick={this.loadMore}>
                Load more
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default Unsplash;
