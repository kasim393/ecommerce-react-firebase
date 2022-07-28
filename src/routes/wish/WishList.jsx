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
      <div className="wishlist-wrapper-top">
        {wishCount ? (
          <div className="wishlist-title">
            <span className="wishlist-title-bg">Favorite</span>
            <h1>Wish List</h1>
          </div>
        ) : (
          ""
        )}
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
    </div>
  );
};
export default WishList;
