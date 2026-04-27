import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({  text, link, btnText}) => (
 <div className = "info-box neo-brutalism-orange"> 
    <p className='font-medium sm:text-x1 text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
    {btnText}
    <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
    
</div>
)


const renderContent ={
    1: (
        <div> 
        <h2 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-orange py-3 px-6 text-white mx-5'>
        Welcome to my portfolio! I'm <span className='font-bold'>Arsh</span>.
        <br/>
        A Machine Learning and Reinforcement Learning Engineer. 
        <p className='text-center text-sm mt-2 font-semibold' style={{ color: '#4169E1' }}>
            Scroll down/up to explore.
          </p>
        </h2>, 
        
        </div>
    ),
    2: (
        <InfoBox 
            text="I'm passionate about building intelligent systems that can learn and adapt to their environment."
            link="/about"
            btnText="Learn More"
        
        />
    ),
    3: (
        <InfoBox 
            text="Check out my projects to see how I've applied machine learning and reinforcement learning to solve real-world problems."
            link="/projects"
            btnText="View My Projects"
        
        />
    ),
    4: (
        <InfoBox 
            text="I'm open to new opportunities and collaborations. Feel free to reach out if you'd like to work together."
            link="/contact"
            btnText="Let's Connect"
        
        />
    ),
}


const HomeInfo = ({ currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
