import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="footer__top">
        <h4>Funiro.</h4>
        <ul>
          <li>Links</li>
          <li>Help</li>
          <li>Newsletter</li>
        </ul>
      </div>
      <div className="footer__center">
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        <ul className="footer__list1">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="footer__list2">
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
        <ul className="footer__list3">
          <li>Enter Your Email Address</li>
          <li>SUBSCRIBE</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <span>2023 Funiro. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
