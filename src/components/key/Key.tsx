import "./Key.scss";
import { useDispatch } from 'react-redux';
import { AddOutput, CalculateOutput } from "../../redux/CalcReducer";

export default function Key(props:any) {
    const dispatch = useDispatch();


    const keyClick = () => {
        console.log("Add Ouput: ",props.keyNum);
        if (props.keyNum != "=") {
            dispatch(AddOutput(props.keyNum));
        } else if (props.keyNum == "=") {
            console.log("calculating")
            dispatch(CalculateOutput());
        }
    }

    return(
        <div className="key-wrp">
            <button id={"key-"+props.keyNum} onClick={() => {keyClick()}}>{props.keyNum}</button>
        </div>
    );
}