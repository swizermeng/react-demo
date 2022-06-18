/*
 * @Author: YM
 * @Date: 2022-06-18 18:26:24
 * @LastEditors: YM
 * @LastEditTime: 2022-06-18 18:51:02
 * @FilePath: /react-demo/src/view/fragment/table.jsx
 */
import React, {useState} from "react";
import Columns from "./Columns";
const Table = () => {
    const [items] = useState([{id: 0, term: 'hello', desc: 'react'},{id: 1, term: 'hello', desc: 'fragment key'}]);
    return (
        <table>
            <thead>
            {/* <tr> */}
                <Columns items={items} />
            {/* </tr> */}
            </thead>
            <tbody>
                
            </tbody>
            
        </table>
    )
}
export default Table