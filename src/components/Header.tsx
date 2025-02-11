import { usePortfolio } from "../hooks/usePortfolio";
import { formatEthBalance, formatEurBalance } from "../utils/formatter";

function Header() {
  const { ethBalance, eurBalance } = usePortfolio();
  return (
    <div className="global-main-grid-layout relative">
      <div className="col-content h-20 w-full items-center justify-between flex">
        <img src="../public/logo.png" alt="logo" width={56} height={52} />
        <div className="flex flex-col text-[12px] h-[52px] text-right">
          WALLET CONNECT
        </div>
      </div>
    </div>
  );
}

export default Header;
