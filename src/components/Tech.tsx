import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc/SectionWrapper';

const TechWrapper = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} map={technology.map} />
        </div>
      ))}
    </div>
  );
};

export const Tech = SectionWrapper(TechWrapper, '');
