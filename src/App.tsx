import Header from "./components/Header/Header";
import Storefront from "./components/Storefront/Storefront";
import { useSelector } from "react-redux";
import { RootState } from "./services/store";

function App() {
  const { nftMinted, nftMintedImage } = useSelector(
    (state: RootState) => state.nftMinted
  );

  const handleShare = () => {
    // const text = 'hey';
    // const tweetText = `${text} ${encodeURIComponent(imageUrl)}'}`;
    // const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    // window.open(twitterUrl, '_blank');
  };

  return (
    <>
      {nftMinted && (
        <div className="flex flex-col h-full w-full gap-[48px] mb-[24px] border-b border-solid border-2 shadow-lg rounded-lg bg-white p-6">
          <div className="global-main-grid-layout relative flex flex-col gap-[24px] justify-center items-center">
            <span className="col-content font-bold text-[24px] text-center">
              Thanks for the coffee!
            </span>
            <div className="flex flex-col w-full justify-center items-center h-auto md:h-[400px]">
              <img
                src={nftMintedImage!}
                alt="Uploaded Preview"
                style={{ maxWidth: "400px", width: "100%" }}
              />
            </div>
            <span onClick={handleShare}>Share on X</span>
          </div>
        </div>
      )}
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
