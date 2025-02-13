import Storefront from "./components/Storefront/Storefront";
import { useSelector } from "react-redux";
import { RootState } from "./services/store";
import Header from "./components/Header";

function App() {
  const { nftMinted, nftMintedImage } = useSelector(
    (state: RootState) => state.nftMinted
  );

  return (
    <div className="flex flex-col h-full w-full gap-[14px] bg-white p-[0.2rem] overflow-y-auto h-screen">
      {nftMinted && (
        <div className="global-main-grid-layout relative flex flex-col gap-[24px] justify-center items-center">
          <span className="col-content font-bold text-[24px] text-center">
            Thanks for the coffee!
          </span>
          <div className="flex flex-col w-full justify-center items-center h-auto md:h-[400px]">
            <img
              src={nftMintedImage!}
              alt="Uploaded Preview"
              style={{ maxWidth: "140px", width: "100%" }}
            />
          </div>
        </div>
      )}
      {!nftMinted && (
        <>
          <Header></Header>

          <div className="global-main-grid-layout relative">
            <span className="col-content font-bold text-[24px] text-center">
              Buy me a coffee
            </span>
          </div>
          <div className="global-main-grid-layout relative mb-[24px]">
            <Storefront></Storefront>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
