import { useHeader } from "./Header.hooks";
import logo from "../../assets/react.svg"

function Header() {
  const { loggedIn, setLoggedInStatus } = useHeader();

  return (
    <div className="global-main-grid-layout relative">
      <div className="col-content h-20 w-full items-center justify-between flex">
        <img src={logo} alt="logo" width={56} height={52} />

        {!loggedIn ? (
          <div
            className="flex flex-col text-[12px] h-[52px] text-right justify-center"
            onClick={() => setLoggedInStatus(true)}
          >
            WALLET CONNECT
          </div>
        ) : (
          <span> my data</span>
        )}
      </div>
    </div>
  );
}

export default Header;
