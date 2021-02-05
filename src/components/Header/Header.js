import BrandLiveLogo from '../../images/BrandLiveLogo.svg';
import "./Header.styles.scss"

function Header() {
  return (
    <h1>
      <a href='https://www.brandlive.com/'>
        <img id='brandliveLogo' src={BrandLiveLogo} alt='brandlivelogo' />
      </a>
      {` `}
      Code Challenge, done right.
    </h1>
  );
}

export default Header;
