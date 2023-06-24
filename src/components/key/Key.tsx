import "./Key.scss";

export default function Key(props:any) {
    return(
        <div className="key-wrp">
            <button id={"key-"+props.keyNum}>{props.keyNum}</button>
        </div>
    );
}