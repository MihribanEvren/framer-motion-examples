import { motion } from 'framer-motion';
import girl from '/confident.png';
import planet from '/planet.png';

function GirlAnimation() {
  return (
    <div className="relative flex items-center justify-center w-64  bg-red-200 h-screen">
      <div className="absolute z-40 bottom-16">
        <img className="w-40" src={girl} alt="girl image" />
      </div>
      <motion.svg
        className="absolute left-1/4 z-30 "
        width="68"
        height="92"
        viewBox="0 0 108 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.8648 36.2047C83.8648 36.2047 95.1215 34.5719 98.0958 46.4706C109.003 50.4368 106.028 62.3344 106.028 62.3344C106.028 62.3344 111.506 71.6818 100.624 76.4702C99.7527 86.047 88.8711 84.3052 88.8711 84.3052C88.8711 84.3052 86.259 91.7057 77.9883 88.659C69.0651 95.5997 58.4334 87.1237 58.4334 87.1237C58.4334 87.1237 48.5184 91.0899 44.5533 87.1237C35.629 90.0981 25.7129 79.1912 25.7129 79.1912C25.7129 79.1912 20.1424 80.6061 16.1762 71.6818C5.81629 73.2894 -5.50222 60.0858 3.9874 47.7399C-2.23773 37.8857 4.85769 32.0687 4.85769 32.0687C4.85769 32.0687 2.89923 9.43286 18.5704 6.38623C26.6221 -5.80259 44.0351 3.99203 44.0351 3.99203C44.0351 3.99203 55.5703 1.59785 59.7062 11.6103C72.5956 13.5929 71.9914 20.678 72.9832 26.6279C84.5173 27.2804 83.8648 36.2047 83.8648 36.2047Z"
          fill="black"
          animate={{
            rotateX: [0, -25],
            rotateZ: [0, 9],
            transition: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
              ease: 'easeInOut',
            },
          }}
        />
      </motion.svg>
      <div className="absolute z-20">
        <img className="w-52" src={planet} alt="planet" />
      </div>
    </div>
  );
}

export default GirlAnimation;
