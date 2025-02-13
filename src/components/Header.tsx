import logo from "../assets/react.svg";
import { usePrivy } from "@privy-io/react-auth";
import { Button, CircularProgress } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function AuthButton() {
  const { login, user, logout, ready } = usePrivy();

  if (!ready) return <CircularProgress color="secondary" />;

  return user ? (
    <Button
      startIcon={<LogoutIcon />}
      variant="contained"
      onClick={logout}
      color="secondary"
    >
      Logout
    </Button>
  ) : (
    <Button
      startIcon={<LoginIcon />}
      variant="contained"
      onClick={login}
      color="secondary"
    >
      Connect Wallet
    </Button>
  );
}

function Header() {
  return (
    <div className="global-main-grid-layout relative">
      <div className="col-content h-10 w-full items-center justify-between flex">
        <img src={logo} alt="logo" width={56} height="auto" />
        <AuthButton />
      </div>
    </div>
  );
}

export default Header;
