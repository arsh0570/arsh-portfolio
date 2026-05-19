import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';
const CTA = () => {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  return (
    <section className='cta'>
      <p className={`cta-text bg-transparent ${theme === 'night' ? 'text-white' : 'text-black'}`}>
        Currently exploring new roles in ML Engineering & RL Engineering –  <br className='sm:block hidden'/>
        let’s Connect.
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
