import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import banner from "../../../Assests/images/banner.jpg"

const Hero = () => {
    return (
        <div
            className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
            style={{
                backgroundImage:
                    `url(${banner})`
            }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
                <h1
                    className={`text-[34px] 800px:text-[60px] font-[600] capitalize text-[#fff] leading-[1.2] `}
                >
                    Ready to give your <br />
                    Equipment a second life?
                </h1>
                <p className="pt-5 font-[500] font-Poppins text-[16px] text-[#fff]">
                    Sell your unwanted Airsoft items and buy that gear you always wanted!
                </p>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5`}>
                        <span className="text-[#fff] font-[Poppins] text-[18px]">
                            Shop Now
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Hero