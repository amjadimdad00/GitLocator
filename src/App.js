import React from "react";
import Navbar from "./Component/Layout/Navbar";
import "./App.css";
import User from "./Component/Users/User";
import axios from "axios";
import Search from "./Component/Search/Search";
import Alert from "./Component/Error/Alert";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const url = "https://api.github.com/users";
  //   const res = await axios.get(url);
  //   this.setState({ users: res.data, loading: false });
  // }

  searchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
    console.log(text);
  };

  clearUsersHandler = () => {
    this.setState({ users: [], loading: false });
  };

  alertHandler = (msg, style) => {
    this.setState({ alert: { msg, style } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <>
        <Navbar />
        <div className="container">
          <Alert onAlert={this.state.alert} />
          <Search
            onSearchText={this.searchTextHandler}
            onClearUsers={this.clearUsersHandler}
            showUsers={users.length > 0 ? true : false}
            onAlert={this.alertHandler}
          />
          <User users={users} loading={loading} />
        </div>
      </>
    );
  }
}

export default App;
