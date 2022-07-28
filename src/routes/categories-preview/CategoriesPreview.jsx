import "./categoriespreview.css";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/Spinner";
import Filters from "../../components/filters/Filters";
import { useEffect, useState } from "react";
import SearchBar from "../../components/filters/SearchBar";
import BreadCrum from "../../components/breadcrum/BreadCrum";
import ShopCard from "../shop/ShopCard";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let newArr = [];
    {
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        newArr.push(products);
      });
      setProducts(newArr.flat());
    }
  }, [categoriesMap]);
  const isLoading = useSelector(selectIsLoading);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([10, 1000]);

  const [colors, setColors] = useState([
    { id: 1, checked: false, code: "#f3f3f3", label: "white" },
    { id: 2, checked: false, code: "#000000", label: "black" },
    { id: 3, checked: false, code: "#b3bac1", label: "gray" },
    { id: 4, checked: false, code: "#c38e70", label: "brown" },
    { id: 5, checked: false, code: "#52b788", label: "green" },
    { id: 6, checked: false, code: "#a2d2ff", label: "blue" },
    { id: 7, checked: false, code: "#ffafcc", label: "pink" },
    { id: 8, checked: false, code: "#fad02e", label: "yellow" },
    { id: 9, checked: false, code: "#f5f5dc", label: "beige" },
    { id: 10, checked: false, code: "#ff2929", label: "red" },
  ]);
  const [sizes, setSizes] = useState([
    { id: 1, checked: false, label: "xs" },
    { id: 2, checked: false, label: "s" },
    { id: 3, checked: false, label: "m" },
    { id: 4, checked: false, label: "l" },
    { id: 5, checked: false, label: "xl" },
  ]);

  const [list, setList] = useState(products);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = colors;
    const changeCheckedColors = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setColors(changeCheckedColors);
  };
  const handleSizeChecked = (id) => {
    const sizeStateList = sizes;
    const changeCheckedSizes = sizeStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSizes(changeCheckedSizes);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };
  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedRating(null);
    setSelectedPrice([10, 1000]);
    setColors([
      { id: 1, checked: false, code: "#f3f3f3", label: "white" },
      { id: 2, checked: false, code: "#000000", label: "black" },
      { id: 3, checked: false, code: "#b3bac1", label: "gray" },
      { id: 4, checked: false, code: "#c38e70", label: "brown" },
      { id: 5, checked: false, code: "#52b788", label: "green" },
      { id: 6, checked: false, code: "#a2d2ff", label: "blue" },
      { id: 7, checked: false, code: "#ffafcc", label: "pink" },
      { id: 8, checked: false, code: "#fad02e", label: "yellow" },
      { id: 9, checked: false, code: "#f5f5dc", label: "beige" },
      { id: 10, checked: false, code: "#ff2929", label: "red" },
    ]);
    setSizes([
      { id: 1, checked: false, label: "xs" },
      { id: 2, checked: false, label: "s" },
      { id: 3, checked: false, label: "m" },
      { id: 4, checked: false, label: "l" },
      { id: 5, checked: false, label: "xl" },
    ]);
  };

  const applyFilters = () => {
    let updatedList = products;
    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.subcat === selectedCategory
      );
    }

    if (selectedCategory === "all") {
      updatedList = products.filter((item) => item);
    }

    // color Filter
    const colorsChecked = colors
      .filter((item) => item.checked)
      .map((item) => item.code.toLowerCase());

    if (colorsChecked.length) {
      updatedList = updatedList.filter(
        (item) =>
          item.color.filter((color) => colorsChecked.includes(color)).length > 0
      );
    }

    // size Filter
    const sizesChecked = sizes
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (sizesChecked.length) {
      updatedList = updatedList.filter(
        (item) =>
          item.size.filter((size) => sizesChecked.includes(size)).length > 0
      );
    }
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };
  useEffect(() => {
    applyFilters();
  }, [
    selectedRating,
    selectedCategory,
    colors,
    searchInput,
    selectedPrice,
    sizes,
    categoriesMap,
    setProducts,
  ]);

  return (
    <div className="shop-container">
      <BreadCrum />
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className="shop-wrapper">
        <Filters
          selectedCategory={selectedCategory}
          selectCategory={handleSelectCategory}
          selectedRating={selectedRating}
          selectedPrice={selectedPrice}
          selectRating={handleSelectRating}
          colors={colors}
          sizes={sizes}
          changeChecked={handleChangeChecked}
          changesizeChecked={handleSizeChecked}
          changePrice={handleChangePrice}
          reset={handleReset}
        />
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {/* {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                  <CategoryPreview
                    key={title}
                    title={title}
                    products={products}
                  />
                );
              })} */}
              {resultsFound ? (
                <div className="shop-products">
                  {list.map((product) => (
                    <ShopCard
                      key={product.id}
                      product={product}
                      title={product.subcat}
                    />
                  ))}
                </div>
              ) : (
                // <CategoryPreview key={list.id} products={products} />
                <div className="shop-products">
                  {products.map((product) => (
                    <ShopCard
                      key={product.id}
                      product={product}
                      title={product.subcat}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CategoriesPreview;
