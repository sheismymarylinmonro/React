function Navbar(){
    return(
    <div style={{display: "flex", flexDirection: "column", width: "15%", marginLeft: "20px"}}>
    <div id="logo">
        Collab.io
    </div>
    <ul className="nav-list">
        <li>Выпадающий список</li>
        <li style={{color: "rgba(79, 67, 131, 0.849)"}}><i className="bx bx-menu"></i>Dashboard</li>
        <li>Backlog</li>
        <li>Active Sprint</li>
        <li>Reports</li>
        <li>Pages</li>
        <li>Settings</li>
    </ul>
    <div style={{backgroundColor:"rgba(79, 67, 131, 0.445)", width:"70%", height:"40px", borderRadius:"15px", textAlign:"center"}}>Add New task</div>
</div>
    );
}
export default Navbar;