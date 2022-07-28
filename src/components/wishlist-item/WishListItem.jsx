import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import "../../routes/wish/wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { clearItemFromWish } from "../../store/wishlist/wish.action";
import { selectWishItems } from "../../store/wishlist/wish.selector";
import { useEffect, useState } from "react";
const WishListItem = ({ wishItem }) => {
  console.log(wishItem);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const wishItems = useSelector(selectWishItems);
  const [selectSize, setSelectSize] = useState(wishItem?.size[0]);
  const [selectColor, setSelectColor] = useState(wishItem?.color[0]);
  const [newItem, setNewItem] = useState(wishItem);
  useEffect(() => {
    setNewItem((prev) => ({ ...prev, size: selectSize, color: selectColor }));
  }, []);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, newItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromWish(wishItems, newItem));
  return (
    <div className="wishlist-card" key={wishItem.id}>
      <div className="wishlist-card-top">
        <img src={wishItem.img} alt="" />
      </div>
      <div className="wishlist-card-mid">
        <p>{wishItem.name}</p>
        <div className="wish-card-mid-row">
          <span>$ {wishItem.price}</span>
          <div>
            {wishItem.color.map((color) => (
              <p
                key={color}
                style={{ backgroundColor: `${color}` }}
                className="wishlist-card-color"
              ></p>
            ))}
          </div>
        </div>
      </div>
      <div className="wishlist-card-bottom">
        <RiDeleteBin6Line
          onClick={clearItemHandler}
          className="wishlist_trash"
        />
        <BsCartPlus onClick={addProductToCart} className="wishlist-cart-icon" />
      </div>
    </div>
  );
};
export default WishListItem;
