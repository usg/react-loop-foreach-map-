import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //自己觉得类似于初始化
      lists: [1, 2, 3, 4],
      mapList: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" }
      ]
    };
  }

  content = () => {
    const test = [];
    this.state.mapList.forEach((item) => {
      if (item.id !== 2) {
        test.push(<li key={item.id}>{item.name}</li>);
      }
    });
    return <ul>{test}</ul>;
  };

  render() {
    console.log("content", this.content());
    //方式一
    return (
      <div>
        <h1>Test</h1>
        <div>{this.content()}</div>
        {this.state.lists.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
