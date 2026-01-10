// TODO: add responsive menu for mobile devices
// TODO: info about languages to work with

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-slate-50'>
      <div className='container mx-auto flex flex-row items-center justify-between py-8'>
        <h1 className='flex text-2xl'>Aleksandra Holik</h1>
        <nav className='flex flex-row items-center gap-8'>
          <ul className='flex flex-row gap-8'>
            <li>
              <a href='#about'>About me</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#education'>Education</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
