import "./Opening.scss";
import $ from 'jquery';

export default function Opening() {

    const scrollDown = () => {
        let a:any = $(".Calculator-wrp").offset()?.top;
        console.log(a);
        $(".app-wrp").scrollTop(a);
    }

    return(
        <div className="op-wrp">
            <h1 className="header">Fiqri<br></br>Drippin<br></br>Calculator!</h1>
            <div className="button-wrp">
                <button className="button-do-meth" onClick={scrollDown}>
                    Do Meth!
                </button>
            </div>
        </div>
    );
}