import React, { useEffect } from 'react'
import "./main.css"
import Lottie from 'react-lottie';
import loading from '../lotties/loading.json';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        window.onload = () => {
            const preloader = document.querySelector(".preloader");
            setTimeout(() => {
                preloader.style.opacity = 0;
            }, 3000);
        }
    });
    return (<div className="preloader">

        <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            speed={1.25}
        />

    </div>)
    // which have your preloader html and having class is `.preloader`
};


export default Loader
