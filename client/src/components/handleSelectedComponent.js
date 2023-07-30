import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToPcBuilding } from "../redux/pcBuilder/pcBuilderSlice";
import { toast } from "react-hot-toast";


const useAddComponentToPCBuilding = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSelectedComponent = (componentName, price, category) => {
    dispatch(addToPcBuilding({ componentName, price, category }));


 const existingDataString = localStorage.getItem("selectedComponents");
  const existingData = existingDataString ? JSON.parse(existingDataString) : {};

    existingData[category] = existingData[category] || [];
    existingData[category].push({ componentName, price });


    localStorage.setItem("selectedComponents", JSON.stringify(existingData));



    router.push({
      pathname: "/pc-building",
    });
    toast.success("Component Added Successfully !!!");
  };

  return handleSelectedComponent;
};

export default useAddComponentToPCBuilding;
