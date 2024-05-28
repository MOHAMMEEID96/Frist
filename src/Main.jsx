import logo from "./assets/logo.png";
export default function Main() {
  return (
    <>
      <main className="content">
        <h1>Why i Should learn react ?</h1>
        <u className="list">
          <li>makes site more pretty</li>
          <li>provides components</li>
          <li>reusable</li>
        </u>
        <img src={logo} alt="" className="logo" />
      </main>
      ;
    </>
  );
}
