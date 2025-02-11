
import Header from "./components/Header/Header";
import Storefront from "./components/Storefront/Storefront";

function App() {
  return (
    <>
      <div className="flex flex-col h-full w-full gap-[24px] mb-[24px]">
        <Header></Header>
        <div className="global-main-grid-layout relative">
          <Storefront></Storefront>
        </div>
      </div>
    </>
  );
}

export default App;
