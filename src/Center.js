import './center.css'
import PieChart from './pie';



function Center(){
    return(
        <div className="center-block" style={{display: "flex", flexDirection: "column", width: "60%", height: "100%", position: "absolute", left: "15%"}}>
        <div className="main-text" style={{height: "4%", marginLeft:"5px", marginTop:"10px"}}>Dashboard</div>
        <div id="moment"></div>
        <div className="hello_text"
            style={{display: "flex", flexDirection: "row", height: "30%", width: "90%", margin: "auto", backgroundColor: "white", borderRadius: "20px"}}>
            <div className="hello-text"
                style={{width: "50%", padding: "14px", color: "rgba(79, 67, 131, 0,9)", textDecoration: "none", fontSize: "24px"}}>
                Welcome, Evgeniya Volkova</div>
            <div style={{position: "absolute", right: "100px"}}><img src="/images/dev2.jpg" alt="girl developer" style={{width: "200px"}}/></div>
        </div>
        
        <div style={{display: "flex", flexDirection: "row", height: "40%", width: "90%", margin: "auto"}}>
            <div style={{width: "60%"}}>
               <div className="chart">
                  <PieChart></PieChart>
               </div>
            </div>
            <div style={{width: "40%"}}>Task list
            <ul style={{backgroundColor: "white", borderRadius: "20px", marginTop:"15px"}}>
                <li>Running</li>
                <li>English homework</li>
                <li>Cook new recipt</li>
                <li>Dancing</li>
                <li>Reading</li>
                </ul></div>
        </div>

    </div>
    );
}
export default Center;