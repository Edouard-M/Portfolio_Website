import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const variants_move = { hidden: { opacity: 0, y: 75}, visible: { opacity: 1, y: 0},};
const variant_cover = { hidden: { left: 0}, visible: { left: "100%"},};

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const moveControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            moveControls.start("visible");
            slideControls.start("visible");
        }
        else{
            moveControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView, moveControls, slideControls]);




    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}} >
            <motion.div
                variants={variants_move}
                initial="hidden"
                animate={moveControls}
                transition={{duration: 0.5, delay: 0.25}}
            >
                {children}</motion.div>
            <motion.div
                variants={variant_cover}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5, ease: "easeIn"}}

                style={{
                    content: "",
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--color-main)",
                    zIndex: 20,
                }}
            />
        </div>
    );
};

export default Reveal