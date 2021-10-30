
function Profile(){
    return(
        <div className="main-text"
style={{display: "flex", flexDirection: "column", width: "30%", position: "absolute", left: "75%", paddingLeft: "30px", paddingTop: "20px"}}>
<div style={{height: "30%", display: "flex", flexDirection: "column"}}>
    <div>Profile</div>
    <div style={{marginTop: "5px"}}>80% completed profile</div>
    <img src="/images/ava2.jpg" alt="girl" style={{width: "200px", borderRadius: "100px", marginTop: "50px", marginLeft: "70px"}}/>
</div>

<div style={{display: "flex", flexDirection: "column", height: "70%", marginTop: "20px"}}>
    <div>Current Project</div>
    <div style={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
        <div
            style={{width: "35%", backgroundColor: "rgba(79, 67, 131, 0.445)", height: "220px", borderRadius: "20px"}}>
            <div style={{paddingTop: "20px", paddingLeft: "30px"}}>Hope</div>
            <div
                style={{width: "100%", height: "100px", borderRadius: "20px",  backgroundColor: "rgba(41, 32, 82, 0.445)", marginTop: "76px"}}>
            </div>
        </div>
        <div
            style={{marginLeft: "10px", width: "35%", height: "220px", borderRadius: "20px", backgroundColor: "rgba(79, 67, 131, 0.445)"}}>
            <div className="main-text" style={{paddingTop: "20px", paddingLeft: "30px"}}>Core</div>
            <div
                style={{width: "100%", height: "100px", borderRadius: "20px", backgroundColor: "rgba(41, 32, 82, 0.445)", marginTop: "76px"}}>
            </div>
        </div>

    </div>
</div>
</div>
    );
}

export default Profile;