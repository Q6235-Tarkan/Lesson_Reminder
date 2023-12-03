import logo from "../../img/Clarusway_Logo.png"

function Header() {
  return (
    <div className="headerdiv">
    <img src={logo} alt="logo" className="logo"/>
      <h1 className="baslik">Clarusway</h1>
      
    </div>
  );
}
export default Header
