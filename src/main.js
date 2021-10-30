import Center from "./Center"
import Navbar from "./navbar";
import Profile from "./profile";

function Main(){
    return(
<div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
    <Navbar/>
    <Center/>
    <Profile/>

</div>
    );
}

export default Main;