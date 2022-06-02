import "./wishlist.css";
import WishListItem from "../../components/wishlist-item/WishListItem";
import CartEmpty from "../../components/cart-empty/CartEmpty";
import { useSelector } from "react-redux";
import {
  selectWishCount,
  selectWishItems,
} from "../../store/wishlist/wish.selector";
const WishList = () => {
  const wishItems = useSelector(selectWishItems);
  const wishCount = useSelector(selectWishCount);

  return (
    <div className="wishlist-container">
      <h1>Your Wish List</h1>
      {wishCount ? (
        <div className="wishlist-wrapper">
          {wishItems.map((wishItem) => (
            <WishListItem key={wishItem.id} wishItem={wishItem} />
          ))}
        </div>
      ) : (
        <CartEmpty text="wishlist" />
      )}
    </div>
  );
};
export default WishList;
