import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'



type Props = {
    children: React.ReactNode
}

const PageAnim: React.FC<Props> = ({ children }) => {

    const currentPath = useLocation().pathname
    const animRef = useRef<HTMLDivElement | null>(null);
    const pageRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!animRef.current) return;

        const timeline = gsap.timeline();

        timeline.set(animRef.current, {
            display: 'block'
        })

        timeline.from('.start', {
            height: 0,
            stagger: {
                amount: -0.3
            },
        });

        timeline.to('.start', {
            y: '100%',
            stagger: {
                amount: -0.3
            }
        });

        timeline.set(animRef.current, {
            display: 'none'
        });

        timeline.to('.start', {
            y: '0%',
        });

        if (pageRef.current) {
            gsap.from(pageRef.current, {
                opacity: 0,
                scale: 1.2,
                delay:1
            })
        }

    }, [currentPath])

    return (
        <div>
            <div ref={animRef} className='h-screen w-full fixed z-30 top-0'>
                <div className='h-full w-full flex'>
                    <div className='start h-full w-1/2 bg-black'></div>
                    <div className='start h-full w-1/2 bg-black'></div>
                    <div className='start h-full w-1/2 bg-black'></div>
                    <div className='start h-full w-1/2 bg-black'></div>
                    <div className='start h-full w-1/2 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}

export default PageAnim;
