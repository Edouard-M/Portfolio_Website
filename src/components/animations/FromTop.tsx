import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export function FromTop ({ children, width = "fit-content" }: Props){

    const variants_move = { hidden: { opacity: 0, y: -100}, visible: { opacity: 1, y: 0},};

    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const moveControls = useAnimation();

    useEffect(() => {
        if(isInView){
            moveControls.start("visible");
        }
        else{
            moveControls.start("hidden");
        }
    }, [isInView, moveControls]);




    return (
        <div ref={ref} style={{position: "relative", width}}>
            <motion.div ref={ref}
                variants={variants_move}
                initial="hidden"
                animate={moveControls}
                transition={{duration: 0.5}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default FromTop