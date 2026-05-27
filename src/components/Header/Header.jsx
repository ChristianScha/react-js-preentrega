import logo from "../../assets/react.svg";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link>
          <img src={logo} />
          <span>Ractiva</span>
        </Link>
      </div>
    </header>
  );
};
