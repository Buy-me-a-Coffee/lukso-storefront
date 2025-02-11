import { useState } from "react";

interface MintData {
  name: string;
  description: string;
}

export const useStorefront = () => {
  const [inputs, setInputs] = useState<MintData>({
    name: "",
    description: "",
  });

  const updateInput = (propertyName: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [propertyName]: value,
    }));
  };

  return { inputs, updateInput };
};
