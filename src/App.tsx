import Header from "./components/Header/Header";
import Storefront from "./components/Storefront/Storefront";
import { useSelector } from "react-redux";
import { RootState } from "./services/store";

function App() {
  const { nftMinted } = useSelector((state: RootState) => state.nftMinted);

  console.log(nftMinted, " lol!");
  return (
    <>
      {nftMinted && <div>Great success!</div>}
      {!nftMinted && (
        <div className="flex flex-col h-full w-full gap-[48px] mb-[24px] border-b border-solid border-2 shadow-lg rounded-lg bg-white p-6">
          <Header></Header>

          <div className="global-main-grid-layout relative">
            <span className="col-content font-bold text-[24px] text-center">
              Buy me a coffee
            </span>
          </div>
          <div className="global-main-grid-layout relative mb-[24px]">
            <Storefront></Storefront>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
