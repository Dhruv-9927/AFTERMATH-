import React from 'react';
import { motion } from 'framer-motion';
import { pageEnter, pageExit } from '../animations/variants';

export default function RegretEngine() {
  return (
    <motion.div variants={pageEnter} initial="initial" animate="animate" exit="exit" className="min-h-screen">
      <h1>RegretEngine</h1>
    </motion.div>
  );
}
