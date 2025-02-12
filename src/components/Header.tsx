import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/react.svg";
import { AppDispatch, RootState } from "../services/store";
import { setAuthenticated } from "../services/state/authenticatedSlice";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const { authenticated } = useSelector((state: RootState) => state);

  const setLoggedInStatus = (status: boolean) => {
    // when you log in, call this dispatch and set it to true
    dispatch(setAuthenticated(status));
  };

  return (
    <div className="global-main-grid-layout relative">
      <div className="col-content h-10 w-full items-center justify-between flex">
        <img src={logo} alt="logo" width={56} height={52} />

        {!authenticated ? (
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
