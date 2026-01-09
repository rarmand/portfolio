import LinkedInIcon from "../assets/icons/linkedin_icon.svg";
import GithubIcon from "../assets/icons/github_icon.svg";
import MailIcon from "../assets/icons/mail_icon.png";
import ResumeIcon from "../assets/icons/resume_icon.png";

function Header() {
  return (
    <header className='text-black shadow-xl sticky top-0'>
      <div className='container mx-auto flex flex-row items-center justify-between py-8'>
        <h1 className='flex text-2xl'>Aleksandra Holik</h1>
        <div className='flex flex-row items-center gap-8'>
          <nav>
            <ul className='flex flex-row gap-8'>
              <li>
                <a href='#about'>About me</a>
              </li>
              {/* <li>
                <a href='#experience'>My experience</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li> */}
            </ul>
          </nav>

          <nav className=''>
            <ul className='flex flex-row gap-6'>
              <li>
                <a target='_blank' href='mailto:holik.alek@gmail.com'>
                  <img
                    width='32'
                    height='32'
                    src={MailIcon}
                    alt='Mail contact'
                  />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/aleksandra-holik/'
                >
                  <img
                    width='32'
                    height='32'
                    src={LinkedInIcon}
                    alt='LinkedIn profile'
                  />
                </a>{" "}
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/rarmand'
                >
                  <img
                    width='32'
                    height='32'
                    src={GithubIcon}
                    alt='Github profile'
                  />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='/resume/CV_Holik_Aleksandra.pdf'
                  download
                >
                  <img
                    width='32'
                    height='32'
                    src={ResumeIcon}
                    alt='Resume PDF file'
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
