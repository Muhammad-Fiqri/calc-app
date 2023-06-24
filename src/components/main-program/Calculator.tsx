import "./Calculator.scss";
import { useState, useEffect } from 'react';
import $ from 'jquery';

import Key from "../key/Key.tsx";

export default function Calculator() {
    const [val,set_val] = useState("");
    const keyObj = [
        {id : 0, key : '1'},
        {id : 1, key : '2'},
        {id : 2, key : '3'},
        {id : 3, key : '4'},
        {id : 4, key : '5'},
        {id : 5, key : '6'},
        {id : 6, key : '7'},
        {id : 7, key : '8'},
        {id : 8, key : '9'},
        {id : 9, key : '0'},
        {id : 10, key : '+'},
        {id : 11, key : '-'},
        {id : 12, key : '/'},
        {id : 13, key : 'X'},
        {id : 14, key : '='},
    ]

    useEffect(() => {
        console.log("calculator val : ",val);
    });

    const returnUp = () => {
        console.log("return up");
        let op_top:any = $(".op-wrp").offset()?.top;

        $(".op-wrp").slideDown(500);
        $(".app-wrp").scrollTop(op_top);
        $(".app-wrp").css("overflow-y","hidden");
    }

    return(
        <div className="Calculator-wrp">
            <div className="return-wrp">
                <button className="return-btn" onClick={returnUp}>
                    <img src="./return-arrow.svg" alt="" />
                </button>
            </div>
            <div className="output-wrp">
                <input type="text" value={val} onChange={(e) => {set_val(e.target.value)}}/>
            </div>
            <div className="keyboard-wrp">
                <div className="bg">
                    {keyObj.map((item) => <Key keyNum={item.key} id={item.id}/>)}
                </div>
            </div>
        </div>
    );
}