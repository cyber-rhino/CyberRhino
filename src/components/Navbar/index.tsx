import "./style.css";
import { ReactComponent as OpenMenu } from "../../assets/img/open-menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/img/close-menu.svg";
import { ReactComponent as NavLogo } from "../../assets/img/nav-logo.svg";
import SocialLinks from "../SocialLinks";


function Navbar() {
  return (
    <nav id="navigation">
      <div className="logo">
      <a onClick={removeMenu} href="#home-page">
      <NavLogo />
</a>
      </div>
      <div className="menu">
      <ul>
        <li className="item">
          <a onClick={removeMenu} href="#home-page">Início</a>
        </li>
        <li className="item">
          <a onClick={removeMenu} href="#services-page">Serviços</a>
        </li>
        <li className="item">
          <a onClick={removeMenu} href="#qmsomos-page">Quem somos?</a>
        </li>
        <li>
        <div className="nav-button">
            <a onClick={removeMenu} href="#contact-page">
                Contate-nos
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7952 3.19734C16.7256 1.13707 13.9756 0 11.0465 0C5.00944 0 0.0930994 4.89047 0.0930994 10.9002C0.089518 12.8215 0.594401 14.6964 1.55404 16.3503L0 22L5.80794 20.4815C7.40495 21.3513 9.20964 21.8075 11.043 21.8111H11.0465C17.0837 21.8111 21.9964 16.9206 22 10.9073C22 7.99514 20.8613 5.25762 18.7952 3.19734ZM11.0465 19.9682H11.043C9.41016 19.9682 7.80599 19.5298 6.40951 18.7064L6.0765 18.5104L2.62826 19.4086L3.5485 16.0651L3.33366 15.7229C2.42057 14.2793 1.94076 12.6111 1.94076 10.9002C1.94076 5.90635 6.02637 1.84284 11.0501 1.84284C13.4814 1.84284 15.766 2.78743 17.4847 4.49838C19.2035 6.2129 20.1488 8.48704 20.1488 10.9073C20.1488 15.9047 16.0632 19.9682 11.0465 19.9682ZM16.0381 13.1815C15.766 13.046 14.4196 12.3866 14.1689 12.2975C13.9183 12.2048 13.7357 12.162 13.5531 12.4329C13.3704 12.7074 12.8477 13.3205 12.6865 13.5023C12.529 13.6805 12.3678 13.7054 12.0957 13.57C11.82 13.4345 10.9391 13.1458 9.89355 12.2155C9.08073 11.4955 8.5293 10.6008 8.37175 10.3299C8.21061 10.0554 8.35384 9.90927 8.48991 9.77382C8.61523 9.65263 8.76563 9.45658 8.90169 9.29618C9.03776 9.13934 9.08431 9.02528 9.17741 8.84349C9.26693 8.6617 9.22038 8.5013 9.15234 8.36585C9.08431 8.2304 8.53646 6.88658 8.30729 6.34122C8.08529 5.81011 7.8597 5.88496 7.69141 5.87427C7.53385 5.86714 7.35124 5.86714 7.16862 5.86714C6.986 5.86714 6.6888 5.93487 6.43815 6.20933C6.1875 6.48023 5.4821 7.13966 5.4821 8.47991C5.4821 9.82016 6.46322 11.1176 6.59928 11.2994C6.73535 11.4776 8.5293 14.2294 11.2757 15.4093C11.9274 15.6909 12.4359 15.8584 12.8333 15.9832C13.4886 16.1899 14.0866 16.1614 14.5592 16.0936C15.0856 16.0152 16.1777 15.4342 16.4069 14.7962C16.6325 14.1617 16.6325 13.6163 16.5645 13.5023C16.4964 13.3882 16.3138 13.3205 16.0381 13.1815Z" fill="white"/>
</svg>
            </a>
        </div>
        </li>
        <li className="social-links">
          <SocialLinks />
        </li>
      </ul>
      </div>
      <button onClick={openMenu} className="open-menu">
        <OpenMenu />
      </button>
      <button onClick={removeMenu} className="close-menu">
        <CloseMenu />
      </button>

<div className="nav-expanded">
      <ul>
        <li><a href="#home-page">Início</a></li>
        <li><a href="#services-page">Serviços</a></li>
        <li><a href="#qmsomos-page">Quem Somos?</a></li>
        <li>
          <div className="nav-button-expanded">
            <a onClick={removeMenu} href="#contact-page">
              Contate-nos
            </a>
        </div>
        </li>
      </ul>
      </div>


    </nav>
  );
}

export default Navbar;

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function removeMenu() {
  document.body.classList.remove("menu-expanded");
}