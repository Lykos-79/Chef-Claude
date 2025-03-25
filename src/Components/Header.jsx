import logo from "../assets/logo.avif";

export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <h1>Chef Lykos</h1>
      </header>
    </>
  );
}
