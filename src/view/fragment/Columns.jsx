/*
 * @Author: YM
 * @Date: 2022-06-18 18:26:42
 * @LastEditors: YM
 * @LastEditTime: 2022-06-18 18:50:44
 * @FilePath: /react-demo/src/view/fragment/Columns.jsx
 */
import React from "react";
const Columns = (props) => {
  return (
    // <React.Fragment>
    //     <td>hello</td>
    //     <td>react</td>
    // </React.Fragment>

    // <>
    //   <td>hello</td>
    //   <td>react</td>
    // </>
    <tr>
        {props.items.map(item => (
            <React.Fragment key={item.id}>
            <td>{item.term}</td>
            <td>{item.desc}</td>
            </React.Fragment>
        ))}
    </tr>
  );
};
export default Columns;
