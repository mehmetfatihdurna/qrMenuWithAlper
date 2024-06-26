import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion';



export default function Reveal({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            console.log(isInView);
        }

    }, [isInView]);


    return (
        <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
            >{children}</motion.div>
        </div>
    )
}
