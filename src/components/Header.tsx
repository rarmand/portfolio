import LinkedInIcon from "../assets/icons/linkedin_icon.svg";
import GithubIcon from "../assets/icons/github_icon.svg";
import MailIcon from "../assets/icons/mail_icon.png";

function Header() {
  return (
    <header className='bg-fuchsia-300 text-black'>
      <div className='container mx-auto flex flex-row items-center justify-between py-8'>
        <h1 className='flex text-4xl'>Aleksandra Holik</h1>
        <div className='flex flex-row items-center gap-8'>
          <nav>
            <ul className='flex flex-row gap-8'>
              <li>
                <a href='#about'>About me</a>
              </li>
              <li>
                <a href='#certificates'>Certificates</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
            </ul>
          </nav>

          <nav className=''>
            <ul className='flex flex-row gap-6'>
              <li>
                <img width='50' height='50' src={MailIcon} alt='Mail contact' />
              </li>
              <li>
                <img
                  width='50'
                  height='50'
                  src={LinkedInIcon}
                  alt='LinkedIn profile'
                />
              </li>
              <li>
                <img
                  width='50'
                  height='50'
                  src={GithubIcon}
                  alt='Github profile'
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
