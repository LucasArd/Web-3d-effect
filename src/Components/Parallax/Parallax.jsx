import React from "react";
import "./Parallax.css";
import { useEffect} from "react";



const Parallax = () => {

    useEffect(() => {

        let xValue = 0, yValue = 0;
        let rotateDegree = 0;

        const main = document.querySelector("main");

        if (window.innerWidth >= 725 ){
            main.style.maxHeight =  `${window.innerWidth * 0.8}px`
        }else {
            main.style.maxHeight =  `${window.innerWidth * 1.6}px`
        }
        
        const parallax_el = Array.from(
            document.querySelectorAll('.parallax')
        );

        function update(cursosPosition) {
            parallax_el.forEach(el => {
                let speedx = el.dataset.speedx;
                let speedy = el.dataset.speedy;
                let speedz = el.dataset.speedz;
                let rotateSpeed = el.dataset.rotation;

                rotateDegree = (xValue / (window.innerHeight / 2)) * 20;

                let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

                let zValue = (cursosPosition- parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

                el.style.transform = `translateX(calc(-50% + ${-xValue * speedx 
                }px)) rotateY(${rotateDegree * rotateSpeed}deg)  translateY(calc(-50% + ${yValue * speedy
                }px)) perspective(2300px) translateZ(${zValue * speedz
                }px)`;
    
            })
        }

        update(0);

        window.addEventListener("mousemove", (e) => {
            xValue = e.clientX - window.innerWidth / 2;
            yValue = e.clientY - window.innerHeight / 2;

           update(e.clientX);
        });

    },[])




    return(
        <main>
            <div className="vignette" ></div>
            <img src={require('../../Assets/background.png')} alt="background" data-speedx="0.3" data-speedy="0.38" data-speedz='0' data-rotation="0"  className="parallax bg-img" />
            <img src={require('../../Assets/fog_7.png')} alt="background" data-speedx="0.27" data-speedy="0.32" data-speedz='0'data-rotation="0"   className="parallax fog-7"/>
            <img src={require('../../Assets/mountain_10.png')} alt="background" data-speedx="0.195" data-speedy="0.305" data-speedz='0' data-rotation="0"   className="parallax mountain-10"/>
            <img src={require('../../Assets/fog_6.png')} alt="background" data-speedx="0.25" data-speedy="0.28" data-speedz='0' data-rotation="0"  className="parallax fog-6"/>
            <img src={require('../../Assets/mountain_9.png')} alt="background" data-speedx="0.125" data-speedy="0.155" data-speedz='0.15' data-rotation="0.02"  className="parallax mountain-9"/>
            <img src={require('../../Assets/mountain_8.png')} alt="background" data-speedx="0.1" data-speedy="0.11" data-speedz='0' data-rotation="0.02"  className="parallax mountain-8"/>
            <img src={require('../../Assets/fog_5.png')} alt="background" data-speedx="0.16" data-speedy="0.105" data-speedz='0' data-rotation="0"  className="parallax fog-5"/>
            <img src={require('../../Assets/mountain_7.png')} alt="background" data-speedx="0.1" data-speedy="0.09" data-speedz='0' data-rotation="0.09"  className="parallax mountain-7"/>
            <div data-speedx="0.07" data-speedy="0.07" data-rotation="0.11"  className="text parallax">
                <h2>Argentina</h2>
                <h1>Lucas Aranda</h1>
            </div>
            <img src={require('../../Assets/mountain_6.png')} alt="background" data-speedx="0.065" data-speedy="0.05" data-speedz='0.05' data-rotation="0.12"  className="parallax mountain-6"/>
            <img src={require('../../Assets/fog_4.png')} alt="background" data-speedx="0.135" data-speedy="0.05" data-speedz='0' data-rotation="0"  className="parallax fog-4"/>
            <img src={require('../../Assets/mountain_5.png')} alt="background" data-speedx="0.08" data-speedy="0.038" data-speedz='0.13' data-rotation="0.1"  className="parallax mountain-5"/>
            <img src={require('../../Assets/fog_3.png')} alt="background" data-speedx="0.11" data-speedy="0.018" data-speedz='0' data-rotation="0"  className="parallax fog-3"/>
            <img src={require('../../Assets/mountain_4.png')} alt="background" data-speedx="0.059" data-speedy="0.024" data-speedz='0.35' data-rotation="0.14"  className="parallax mountain-4"/>
            <img src={require('../../Assets/mountain_3.png')} alt="background" data-speedx="0.04" data-speedy="0.018" data-speedz='0.32' data-rotation="0.05"  className="parallax mountain-3"/>
            <img src={require('../../Assets/fog_2.png')} alt="background" data-speedx="0.15" data-speedy="0.0115" data-speedz='0' data-rotation="0"  className="parallax fog-2"/>
            <img src={require('../../Assets/mountain_2.png')} alt="background" data-speedx="0.0235" data-speedy="0.013" data-speedz='0.42'data-rotation="0.15"  className="parallax mountain-2"/>
            <img src={require('../../Assets/mountain_1.png')} alt="background" data-speedx="0.027" data-speedy="0.018" data-speedz='0.53' data-rotation="0.2" className="parallax mountain-1"/>

            <img src={require('../../Assets/sun_rays.png')} alt="background" className="sun-rays"/>
            <img src={require('../../Assets/black_shadow.png')} alt="background" className="black-shadow"/>

            <img src={require('../../Assets/fog_1.png')} alt="background" data-speedx="0.12" data-speedy="0.01" className="parallax fog-1"/>

        </main>
    )
}

export default Parallax;