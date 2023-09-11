import "./Shop.scss";
import { Link } from "react-router-dom";
import Nota from "../../assets/nota.png";
import Tochka from "../../assets/tochka.png";
import Selecter from "../../assets/selecter.png";
import ShopProductList from "../../components/ShopProductList/ShopProductList";
import Cup from "../../assets/cup.png";
import CheckMark from "../../assets/checkMark.png";
import Calendar from "../../assets/calendar.png";
import CallCentar from "../../assets/callCenter.png";

const Shop = () => {
  return (
    <div className="Shop">
      <div className="Hero__shop">
        <div className="Hero__shop-block">
          <h2>Shop</h2>
          <div>
            <ul>
              <Link to="/">Home</Link>
              <li>||</li>
              <Link>Shop</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="Shop__filter">
        <div className="shop__filterBG">
          <ul className="shop__list1">
            <li>
              <img src={Nota} alt="filter" />
            </li>
            <li>Filter</li>
            <li>
              <img src={Tochka} alt="Tochka" />
            </li>
            <li>
              <img src={Selecter} alt="Selecter" />
            </li>
            <li>|</li>
            <li>Showing 1–16 of 32 results</li>
          </ul>
          <ul className="shop__list2">
            <li>Show</li>
            <li>
              <input type="number" placeholder="16" />
            </li>
            <li>Short by</li>
            <input type="text" placeholder="Default" />
          </ul>
        </div>
      </div>

      <div className="ShopProductList">
        <ShopProductList />
      </div>

      <div className="achievement">
        <ul>
          <li>
            <img src={Cup} alt="cup icons" />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </li>
          <li>
            <img src={CheckMark} alt="cup icons" />
            <div>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </li>
          <li>
            <img src={Calendar} alt="cup icons" />
            <div>
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </li>
          <li>
            <img src={CallCentar} alt="cup icons" />
            <div>
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
