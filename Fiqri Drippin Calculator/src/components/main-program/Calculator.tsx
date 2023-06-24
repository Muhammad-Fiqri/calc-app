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
                    <div className="key-wrp">
                        <button id="key-1">1</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-2">2</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-3">3</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-4">4</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-5">5</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-6">6</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-7">7</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-8">8</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-9">9</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-0">0</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key--">-</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-+">+</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-÷">÷</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-x">x</button>
                    </div>
                    <div className="key-wrp">
                        <button id="key-=">=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}