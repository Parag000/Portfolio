import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
       variants={fadeIn("right","spring",index*0.5,0.75)}
       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 10,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
           flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-20 h-20 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>



      
  )
  
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]">
          Hi, I’m Parag Deshpande—a curious thinker, a relentless problem-solver, and someone who finds joy in connecting the dots, whether in data or life. 
          <br></br>
          <br></br>
          My journey began with a love for puzzles and chess, sparking a passion for solving complex problems. Now, as a Master’s student in Data Analytics at San Jose State University, I combine this curiosity with expertise in Python, R, Flask, Power BI, PySpark, databases, and AWS. I’m passionate about transforming raw data into impactful insights and building innovative, scalable solutions that make a difference.
            <br></br>
            <br></br>
          Outside the numbers and algorithms, I’m the kind of person who finds inspiration in nature—nothing clears my head like a long hike with breathtaking views. Whether it's strategizing on a trail, over a chessboard, or in a data model, I’m always seeking balance between precision and creativity. 
          <br></br>
          <br></br>If there’s a story to uncover or a problem to solve, I’m all in. Let’s connect and see where our stories intersect!

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');