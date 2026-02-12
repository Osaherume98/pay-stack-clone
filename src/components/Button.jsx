import { motion } from 'framer-motion';

const Button = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{
      padding: '10px 20px',
      backgroundColor: '#00A86B',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
    }}
  >
    Sign Up
  </motion.button>
);

export default Button;
