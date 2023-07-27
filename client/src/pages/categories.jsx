
import { useState } from "react";
import Fuse from "fuse.js";
import BookFilter from "./ProductFilter";
import ProductCard from "./shared/ProductCard";
import MainLayout from "../layouts/mainLayout";
import { setPriceRange } from "../redux/product/productSlice";
import { useGetProductsQuery } from "../redux/product/productApi";
import { useAppDispatch, useAppSelector } from '../redux/hook';




const BookPage = () => {
  const { data, isLoading } = useGetProductsQuery (undefined, {
    refetchOnMountOrArgChange: true,
  
  });


  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [value, setValue] = useState(50);
  const dispatch = useAppDispatch();
  const { priceRange,status } = useAppSelector((state) => state.product);

  const booksData = data?.data;
  let filteredData = booksData;


  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    handleSlider([newValue]);
  };

  const handleSlider = (value) => {
    dispatch(setPriceRange(value[0]));
  };

  filteredData = data?.data?.filter((item) => {
    if (status) {
      return item.status === true && item.price < priceRange;
    }
    return priceRange > 0 ? item.price < priceRange : true;
  });

  const handleGenreFilter = () => {
    let updatedData = booksData;

    if (selectedGenre !== "") {
      updatedData = updatedData.filter((book) =>
      
        book?.category?.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }



    filteredData = updatedData;
  };

  handleGenreFilter();

  if (filteredData) {
    const options = {
      keys: ["name", "category"],
      threshold: 0.4,
    };

    const fuse = new Fuse (filteredData, options);
    const searchResults = fuse.search(searchText);
  
    filteredData =
      searchResults.length > 0
        ? searchResults.map((result) => result.item)
        : filteredData;

    if (status) {
      filteredData = filteredData.filter(
        (item) => item.status === true && item.price < priceRange
      );
    } else if (priceRange > 0) {
      filteredData = filteredData.filter((item) => item.price < priceRange);
    }
  }

  if (isLoading) {
    return <p className="py-20">Loading..........</p>;
  }


  return (
    <>
      <div className="flex static   py-24  ">
        <div className="w-1/4 z-0  py-24 bg-base-200 fixed top-0 right-0 bottom-0 ">
          {" "}
          <div className="">
            <BookFilter
              value={value}
              handleRangeChange={handleRangeChange}
              priceRange={priceRange}
              searchText={searchText}
              selectedGenre={selectedGenre}
              selectedYear={selectedYear}
              setSearchText={setSearchText}
              setSelectedGenre={setSelectedGenre}
              setSelectedYear={setSelectedYear}
            />
          </div>
        </div>
        <div className="w-3/4 flex justify-end">
          <div className="flex justify-end mx-auto px-4">
            <div className="flex justify-end px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {filteredData?.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 bg-red-500 "></div>
    </>
  );
};

export default BookPage;

BookPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
