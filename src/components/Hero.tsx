import { FaTwitter } from 'react-icons/fa';
import { styles } from '../styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TbFileCv } from 'react-icons/tb';
import { resume } from '../assets';

export const Hero = () => {
  return (
    <section className={`absolute w-full mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Jameem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop things for the web.
          </p>
          <br className='sm:block hidden' />
          <div className='flex gap-5 '>
            <FaGithub
              className='cursor-pointer'
              size={30}
              onClick={() => window.open('https://github.com/Jameem', '_blank')}
              title='Github'
            />
            <FaLinkedin
              className='cursor-pointer'
              size={30}
              onClick={() =>
                window.open('https://www.linkedin.com/in/jameem/', '_blank')
              }
              title='Linkedin'
            />
            <FaTwitter
              className='cursor-pointer'
              size={30}
              onClick={() =>
                window.open('https://twitter.com/jameem_mohd', '_blank')
              }
              title='Twitter'
            />
            <TbFileCv
              className='cursor-pointer'
              size={30}
              onClick={() => window.open(resume, '_blank')}
              title='Resume'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
