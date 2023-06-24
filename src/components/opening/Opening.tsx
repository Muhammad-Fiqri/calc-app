import "./Opening.scss";
import $ from 'jquery';

export default function Opening() {

    const scrollDown = () => {
        let calc_top:any = $(".Calculator-wrp").offset()?.top;
        console.log("tiem to emth");
        $(".op-wrp").slideUp(500);
        $(".app-wrp").scrollTop(calc_top);
        $(".app-wrp").css("overflow-y","scroll");
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