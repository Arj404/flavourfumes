export default function Header(props: any) {
  return (
    <header>
      <a className="navicon" href="/">
        FlavourFumes
      </a>
      <nav className="navbar">
        <a className="navitem uppercase text-30" href="/shop/">
          Shop
        </a>
        <a className="navitem uppercase text-30" href="/account/">
          Account
        </a>
        <a className="navitem uppercase text-30" href="/about/">
          About
        </a>
      </nav>
    </header>
  );
}
