import "./Opening.scss";
import $ from 'jquery';

export default function Opening() {

    const scrollDown = () => {
        //console.log("scrolling down");
        let calc_top:any = $(".Calculator-wrp").offset()?.top;

        $(".Calculator-wrp").css("display","grid")
        $(".app-wrp").scrollTop(calc_top);
        $(".op-wrp").css("display","none");
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