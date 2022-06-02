import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import "./categorycomponent.css";

const CategoryComponent = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: "hats",
  //     imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //     route: "shop/hats",
  //   },
  //   {
  //     id: 2,
  //     title: "jackets",
  //     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //     route: "shop/jackets",
  //   },
  //   {
  //     id: 3,
  //     title: "sneakers",
  //     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //     route: "shop/sneakers",
  //   },
  //   {
  //     id: 4,
  //     title: "womens",
  //     imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //     route: "shop/womens",
  //   },
  //   {
  //     id: 5,
  //     title: "mens",
  //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //     route: "shop/mens",
  //   },
  // ];
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const unsub2 = onSnapshot(
      collection(db, "categories"),
      (snapShot) => {
        let list = [];

        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub2();
    };
  }, []);
  return (
    <div className="category-container">
      <h1>Categories</h1>
      <div className="category-wrapper">
        {data.map((item) => (
          <div
            className="category-card"
            key={item.id}
            onClick={() => navigate(`shop/${item.id}`)}
          >
            <div className="cat-card-left">
              <p className="cat-card-item-title">{item.title}</p>
            </div>
            <div className="cat-card-right">
              <p className="cat-card-item-quantity">
                {item.items.length} products
              </p>
              <img
                src={item.items[1].img}
                alt=""
                className="cat-card-item-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryComponent;
