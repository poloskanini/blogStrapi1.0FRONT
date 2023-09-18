import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function TextReveal() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "Découvrez notre engagement envers la transparence et l'équité dans nos tarifs et honoraires aoinaein aponae pnaen aibe aaa  aorn a aone " 

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top",
                    end: "bottom 85%"

                },
                color: "#2A2A2A",
                duration: 5,
                stagger: 5,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);

    return (
        <>
            <div className="reveal mt-40">
                <div >
                    {text.split("").map((letter, index) => (
                        <span className="reveal-text" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
            <div className="spacing"></div>
            
        </>
    )
}

export default TextReveal