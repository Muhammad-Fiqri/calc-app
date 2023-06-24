import "./Calculator.scss";
import { useState, useEffect } from 'react';
import $ from 'jquery';

export default function Calculator() {
    const [val,set_val] = useState("");

    useEffect(() => {
        console.log("calculator val : ",val);
    });

    const returnUp = () => {
        console.log("return up");
        let op_top:any = $(".op-wrp").offset()?.top;
        $(".app-wrp").scrollTop(op_top);
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
            <div className="keyboard">
                <div className="button"></div>
            </div>
        </div>
    );
}