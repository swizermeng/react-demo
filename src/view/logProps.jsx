/*
 * @Author: YM
 * @Date: 2022-06-18 18:03:36
 * @LastEditors: YM
 * @LastEditTime: 2022-06-18 18:22:11
 * @FilePath: /react-demo/src/view/logProps.jsx
 */
import React from "react";
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      // console.log('old props:', prevProps);
      // console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
//   return React.forwardRef((props, ref) => {
//     return <LogProps {...props} forwardedRef={ref} />;
//   });

  function forwardRef(props, ref) {
    // console.log('ref:', ref)
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  console.log('Component.name:',Component.name)
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
class FancyButton extends React.Component {
  focus() {
    // ...
    console.log("focus1");
  }
  render() {
    return (
      <button type="button" onClick={this.focus}>
        {this.props.label}
      </button>
    );
  }
  // ...
}

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);
