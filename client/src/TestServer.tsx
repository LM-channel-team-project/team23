import React, { Component } from 'react';

interface APIProps {
  id: number;
  username: string;
}
class TestServer extends Component {
  // state 초기값 설정
  state = { users: [] };

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map((user: APIProps) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    );
  }
}

export default TestServer;
