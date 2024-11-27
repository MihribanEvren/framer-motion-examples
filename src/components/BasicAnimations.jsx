import { motion } from 'framer-motion';

function BasicAnimations() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" fill="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF00CC" />
            <stop offset="100%" stopColor="#00FFCC" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0 100 Q50 250, 100 100 T200 100 T300 100 T400 100 T500 100 T600 100 T700 100 T800 100"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          initial={{
            pathLength: 0,
            pathOffset: 1,
          }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF00CC" />
            <stop offset="100%" stopColor="#00FFCC" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 50 50 H 350 V 350 H 50 Z"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{
            pathLength: 0,
            pathOffset: 1,
          }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}

export default BasicAnimations;
