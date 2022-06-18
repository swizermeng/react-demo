/*
 * @Author: YM
 * @Date: 2022-06-17 15:41:22
 * @LastEditors: YM
 * @LastEditTime: 2022-06-18 18:34:51
 * @FilePath: /react-demo/src/view/index.jsx
 */
import React, { Component } from "react";
import FancyButton from "./logProps";
import Table from './fragment/table'

const ref = React.createRef();


const Title = (props) => {
  if (props.showTitle) {
    return <h1>{props.title}</h1>;
  } else {
    return null;
  }
};
const NumberList = (props) => {
  const numbers = props.numbers;
  // const listItem = numbers.map(item =>
  //     <li key={item.toString()} >{item}</li>
  // )
  return (
    <ul>
      {numbers.map((item) => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );
};
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      interval: null,
      showTitle: true,
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count >= 5) {
        clearInterval(this.interval);
        this.setState({
          interval: null,
          count: 0,
        });
      } else {
        this.setState({
          count: this.state.count + 1,
        });
      }
    }, 1000);
  }
  // handleClick(e) {
  //     e.preventDefault();
  //     this.setState({
  //         count: 0
  //     })
  // }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      count: 0,
    });
  };
  toggleTitle = () => {
    this.setState({
      showTitle: !this.state.showTitle,
    });
  };
  render() {
    return (
      <div>
        <Title showTitle={this.state.showTitle} title="react demo1" />
        {this.state.showTitle ? <h1>显示标题</h1> : <h1>隐藏标题</h1>}
        <button onClick={this.toggleTitle}>
          {this.state.showTitle ? "隐藏标题" : "显示标题"}
        </button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>重新计数</button>
        <NumberList numbers={[1, 2, 3, 4, 5]} />
        <FancyButton label="click me" onClick={this.focus} ref={ref} />
        <Table></Table>
      </div>
    );
  }
}
