import * as React from 'react';
import { motion } from "framer-motion";

import "./animationSection.css";

const AnimationSection = () => {
    return (
        <div className="animation-content">
            <div className="animation-section">
            <motion.div animate={{ 
                            rotate: [0, 200, 200, 0], 
                            x: [0, 200, 200, 0, -200, -200, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}>  
            </motion.div>
        </div>
        </div>
    )
}

export default AnimationSection;