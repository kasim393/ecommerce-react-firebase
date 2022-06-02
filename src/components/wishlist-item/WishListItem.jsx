import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import "../../routes/wish/wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { clearItemFromWish } from "../../store/wishlist/wish.action";
import { selectWishItems } from "../../store/wishlist/wish.selector";
const WishListItem = ({ wishItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const wishItems = useSelector(selectWishItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, wishItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromWish(wishItems, wishItem));
  return (
    <div className="wishlist-card" key={wishItem.id}>
      <div className="wishlist-card-top">
        <RiDeleteBin6Line
          onClick={clearItemHandler}
          className="wishlist_trash"
        />
        <BsCartPlus onClick={addProductToCart} className="wishlist-cart-icon" />
      </div>
      <div className="wishlist-card-bottom">
        <img src={wishItem.img} alt="" />
        <p>{wishItem.name}</p>
        <span>$ {wishItem.price}</span>
      </div>
    </div>
  );
};
export default WishListItem;
