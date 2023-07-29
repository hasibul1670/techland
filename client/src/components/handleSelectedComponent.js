import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToPcBuilding } from "../redux/pcBuilder/pcBuilderSlice";
import { toast } from "react-hot-toast";


const useAddComponentToPCBuilding = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSelectedComponent = (componentName, price, category) => {
    dispatch(addToPcBuilding({ componentName, price, category }));
    router.push({
      pathname: "/pc-building",
    });
    toast.success("Component Added Successfully !!!");
  };

  return handleSelectedComponent;
};

export default useAddComponentToPCBuilding;
