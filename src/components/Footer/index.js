import AboutUs from "./aboutUs";
import TrustIcon from "./trustIcon";
function Footer (){
    return(
        <div className="footerConten">
            <AboutUs />
            <div className="usefulLink">
                <h2>کسب و کار های بزرگ</h2>
                <span>شرایط بازگشت محصول</span>
                <span>حریم خصوصی</span>
                <span>کسب و کار</span>
            </div>
            <div className="usefulLink">
                <h2>خدمات اختصاصی</h2>
                <span>شرایط بازگشت محصول</span>
                <span>حریم خصوصی</span>
                <span>کسب و کار</span>
            </div>
            <TrustIcon />
        </div>
    )
}
export default Footer