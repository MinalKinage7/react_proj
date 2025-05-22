import './navbar.scss';
function Navbar(){
    return (
      <>
        <nav>
          <div className="left">
            <a href="" className='logo'>
            <img src="/logo.png" alt="" />
            <span>RealEstate</span>
            </a>
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">Others</a>
          </div>
          <div className="right">
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
          <div className="menuIcon">
          <img src="/menu.png" alt="" />
          </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;