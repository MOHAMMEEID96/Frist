import logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} width="40px" alt="" />
        <h2>react facts</h2>
        <h3>react course-project1</h3>
      </nav>
    </>
  );
}
