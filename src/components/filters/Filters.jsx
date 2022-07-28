import "./filters.css";
import { categoryList } from "../../utils/constant/index.js";
import FilterListToggle from "./filterListToggle";
import PriceFilter from "./priceFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
const Filters = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  colors,
  sizes,
  changesizeChecked,
  changeChecked,
  changePrice,
  reset,
}) => {
  return (
    <div className="filter_container">
      <div className="filter_category">
        <div className="filter_title">Category</div>
        <div className="filter_category_list">
          <FilterListToggle
            options={categoryList}
            value={selectedCategory}
            selectToggle={selectCategory}
          />
        </div>
      </div>
      <div className="filter_color">
        <div className="filter_title">Colors</div>
        <div className="filter_color_list">
          {colors.map((color) => (
            <ColorFilter
              key={color.id}
              color={color}
              changeChecked={changeChecked}
            />
          ))}
        </div>
      </div>
      <div className="filter_size">
        <div className="filter_title">Size</div>
        <div className="filter_size_list">
          {sizes.map((size) => (
            <SizeFilter
              key={size.id}
              size={size}
              changesizeChecked={changesizeChecked}
            />
          ))}
        </div>
      </div>
      <div className="filter_price">
        <div className="filter_title">Price</div>
        <PriceFilter value={selectedPrice} changePrice={changePrice} />
      </div>
      <button type="button" className="clear-btn" onClick={reset}>
        clear filters
      </button>
    </div>
  );
};
export default Filters;
