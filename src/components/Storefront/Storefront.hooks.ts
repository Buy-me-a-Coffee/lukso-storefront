import { useState } from "react";
import { Trait } from "../Traits";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import {
  setNftMinted,
  setNftMintedImage,
} from "../../services/state/nftMintedSlice";

interface MintData {
  name: string;
  description: string;
}

export const useStorefront = () => {
  const dispatch = useDispatch<AppDispatch>();


  const [error, setError] = useState<string>("");
  const [inputs, setInputs] = useState<MintData>({
    name: "",
    description: "",
  });

  const [traits, setTraits] = useState<Trait[]>([]);
  const [donationAmount, setDonationAmount] = useState<number>(1);

  const [_, setFile] = useState<File | null>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const updateInput = (propertyName: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [propertyName]: value,
    }));
  };

  const handleFileChange = (file: File) => {
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setImageSrc(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTraitsChange = (newTraits: Trait[]) => {
    if (JSON.stringify(newTraits) !== JSON.stringify(traits)) {
      setTraits(newTraits);
    }
  };

  const handleDonationChange = (newDonation: number) => {
    setDonationAmount(newDonation);
  };

  const handleMintNft = () => {
    if (!inputs.description || !inputs.name || !imageSrc) {
      setError("Please fill out all fields!");
      return;
    }

    // FORM OK, continue

    // call function inside web3folder
    /**
     * example call
     * 
     * const payload = { description: description, name: name, traits: traits, file: file}
     * await MintNFT.mint(payload).then(() => {
     * 
     * 
     *     dispatch(setNftMinted(true));
        // set the image source here from the one from IPFS, so users will be able to share to twitter
           dispatch(setNftMintedImage(imageSrc))
     * })
     */

    dispatch(setNftMinted(true));

    // set the image source here from the one from IPFS, so users will be able to share to twitter
    dispatch(setNftMintedImage(imageSrc));
  };

  return {
    inputs,
    updateInput,
    imageSrc,
    handleFileChange,
    handleTraitsChange,
    handleMintNft,
    handleDonationChange,
    donationAmount,
    error,
  };
};
