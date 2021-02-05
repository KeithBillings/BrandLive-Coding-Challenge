import BrandLiveLogo from '../../images/BrandLiveLogo.svg';

function Header() {
  return (
    <h1>
      <a href='https://www.brandlive.com/'>
        <img src={BrandLiveLogo} alt='brandlivelogo' />
      </a>
      {` `}
      Code Challenge, done right.
    </h1>
  );
}

export default Header;