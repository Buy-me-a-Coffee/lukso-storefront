import { useState } from "react";
import { Trait } from "../Traits";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import { setNftMinted } from "../../services/state/nftMintedSlice";

interface MintData {
  name: string;
  description: string;
}

export const useStorefront = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const [inputs, setInputs] = useState<MintData>({
    name: "",
    description: "",
  });

  const [traits, setTraits] = useState<Trait[]>([]);
  const [donationAmount, setDonationAmount] = useState<number>(1);

  const [, setFile] = useState<File | null>(null);

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
    setDonationAmount(newDonation)
  }

  const handleMintNft = () => {
    // first check if name and description and image are there then proceed
    // call function inside web3folder
    // obviously user also needs to be logged in
    dispatch(setNftMinted(true));
  }

  return {
    inputs,
    updateInput,
    imageSrc,
    handleFileChange,
    handleTraitsChange,
    handleMintNft,
    handleDonationChange,
    donationAmount
  };
};
