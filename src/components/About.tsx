// TODO: add animations or pictures for deeper engagement
import MePhoto from "../assets/images/ho1.jpg";
import MePhoto2 from "../assets/images/ho2.jpeg";

function About() {
  return (
    <section id='about' className='h-screen flex'>
      <div className='container m-auto flex flex-col gap-10'>
        <p className='font-bold'>Thank you for checking out my portfolio!</p>

        <p className='text-2xl'>
          My name is <b>Aleksandra</b> (Ola for short).
        </p>

        <div className='flex flex-row items-center justify-center mt-10 gap-16'>
          <div className='flex-1 justify-items-end'>
            <img
              src={MePhoto2}
              alt='Aleksandra Holik photo'
              width='400px'
              className='rounded-3xl shadow-xl'
            />
          </div>

          <div className='flex flex-col flex-1 gap-10 text-left '>
            <p>
              I'm a <b>frontend developer with 2+ years</b> of professional
              experience and a graduate of AGH University of Science and
              Technology in Krakow, Poland.
            </p>

            <p>
              I build responsive websites with a strong focus on clean code,
              modern design and thoughtful user experience. I love turning ideas
              into a live project and presenting the unique value of a product.
            </p>

            <p>
              I work with a React library, JavaScript and TypeScript, HTML5 and
              Sass - "CSS with superpowers".
            </p>

            <p>
              I enjoy learning new technologies and expanding my knowledge in
              the field of web development. I'm fascinated by the cybersecurity
              concepts and how they can be applied to protect digital assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
