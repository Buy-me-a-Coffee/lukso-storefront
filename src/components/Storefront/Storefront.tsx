import TextField from "@mui/material/TextField";
import { useStorefront } from "./Storefront.hooks";

function Storefront() {
  const { updateInput } = useStorefront();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateInput(name, value);
  };

  return (
    <div className="col-content flex flex-col md:flex-row w-full h-full justify-between items-center">
      <div className="flex flex-col w-full justify-center items-center h-[400px]">
        test
      </div>
      <div className="flex flex-col w-full gap-[12px] justify-center items-center">
        <TextField id="standard-basic" name="name" label="Name" variant="standard" onChange={handleInputChange}/>
        <TextField id="standard-basic" name="description" label="Description" variant="standard" onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default Storefront;
