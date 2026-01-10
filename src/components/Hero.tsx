import LinkedInIcon from "../assets/icons/linkedin_icon.svg";
import GithubIcon from "../assets/icons/github_icon.svg";
import MailIcon from "../assets/icons/mail_icon.png";

function Hero() {
  return (
    <section id='hero' className='h-screen flex'>
      <div className='container m-auto flex flex-col items-center'>
        <div>
          <h3>Hello!</h3>
          <h1>I'm Ola</h1>
          <h3>I am a Frontend Developer</h3>
        </div>
        <nav className='flex my-8'>
          <ul className='flex flex-row gap-6'>
            <li>
              <a target='_blank' href='mailto:holik.alek@gmail.com'>
                <img width='32' height='32' src={MailIcon} alt='Mail contact' />
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
              </a>
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
          </ul>
        </nav>
        <div>
          <a
            href='/resume/CV_Holik_Aleksandra.pdf'
            download
            className='block bg-teal-500 rounded text-white uppercase font-semibold py-2 px-8 shadow-sm border-0 btn-primary'
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
