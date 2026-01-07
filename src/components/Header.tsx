function Header() {
  return (
    <header className='flex flex-row items-center justify-between py-8 '>
      <h1 className='flex text-4xl font-bold'>Aleksandra Holik</h1>
      <nav>
        <ul className='flex flex-row gap-4'>
          <li>
            <a href='#about'>About me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
