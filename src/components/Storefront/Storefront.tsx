import TextField from "@mui/material/TextField";
import { useStorefront } from "./Storefront.hooks";
import ImageUploadButton from "../ImageUploadButton";
import TraitList from "../Traits";
import { Button } from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";

function Storefront() {
  const {
    updateInput,
    handleFileChange,
    imageSrc,
    handleTraitsChange,
    handleMintNft,
  } = useStorefront();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateInput(name, value);
  };

  return (
    <div className="col-content flex flex-col md:flex-row w-full h-full justify-between items-center gap-[8px]">
      {imageSrc && (
        <div className="flex flex-col w-full justify-center items-center h-[400px]">
          <img
            src={imageSrc}
            alt="Uploaded Preview"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </div>
      )}

      <div className="flex flex-col w-full gap-[12px] justify-center items-center">
        <TextField
          id="standard-basic"
          name="name"
          className="w-full"
          label="Name *"
          variant="standard"
          onChange={handleInputChange}
          color="secondary"
        />

        <TextField
          id="standard-basic"
          name="description"
          className="w-full"
          label="Description *"
          variant="standard"
          color="secondary"
          onChange={handleInputChange}
        />

        <ImageUploadButton onFileChange={handleFileChange}></ImageUploadButton>

        <div className="flex flex-col w-full items-start justify-start text-left gap-[4px] mt-[12px] mb-[12px]">
          <span className="font-bold text-[20px]">Properties</span>
          <span>Optionally add traits to your NFT</span>
        </div>

        <TraitList onTraitsChange={handleTraitsChange}></TraitList>

        <div className="self-center mt-[30px]">
          <Button
            startIcon={<PublishIcon />}
            variant="contained"
            onClick={handleMintNft}
            color="secondary"
            sx={{ maxWidth: "140px" }}
          >
            Mint NFT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Storefront;
