import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'



type props = {
children : React.ReactNode
}
const PageAnim: React.FC<props> = ({children}) => {

    const currentPath = useLocation().pathname
    const animRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.to(animRef.current, {
            display: "block"
        })

        timeline.from(".start", {
            height: 0,
            stagger: {
                amount: -0.3
            },
        });

        timeline.to(".start", {
            y: "100%",
            stagger: {
                amount: -0.3
            }
        });

        timeline.to(animRef.current, {
            display: "none"
        });

        timeline.to(".start", {
            y: "0%",
        });

    },[currentPath])
    
    return (
       <div>
         <div ref={animRef} className='h-screen w-full fixed z-20'>
            <div className='h-full w-full flex'>
                <div className='start h-full w-1/2 bg-black'></div>
                <div className='start h-full w-1/2 bg-black'></div>
                <div className='start h-full w-1/2 bg-black'></div>
                <div className='start h-full w-1/2 bg-black'></div>
                <div className='start h-full w-1/2 bg-black'></div>
            </div>
        </div>
            <div ref={pageRef} >
                {children}
            </div>
       </div>
    )
}

export default PageAnim;
