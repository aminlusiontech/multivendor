import React from "react";
import logo from "../../Assests/images/logo.png"
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    footercompanyLinks,
    footerProductLinks,
    footerSupportLinks,
} from "../../static/data";

const Footer = () => {
    return (
        <div className="bg-[#000] text-white footer">
            <div className="bg-[#38513b]">
            <div className="py-7 md:flex md:justify-between md:items-center md:px-12 px-4 bg-[#38513b] fmaxw">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-[#CCBEA1]">Subscribe</span> us for get news{" "}
                    <br />
                    events and offers
                </h1>
                <div className="flex items-center relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter email"
            className=" sm:w-96 w-full text-gray-800 sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 px-2 rounded focus:outline-none "
          />

          <button
            type="submit"
            className="absolute text-black rounded-r-md bg-[#CCBEA1] px-5 py-2.5 md:w-auto duration-300 right-0 top-0">
            Submit
          </button>
        </div>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center fmaxw">
                <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                    <img
                        src={logo}
                        alt=""
                    />
                    <br />
                    <p>The home and elements needeed to create beatiful products.</p>
                    <div className="flex items-center mt-[15px]">
                        <AiFillFacebook size={25} className="cursor-pointer" />
                        <AiOutlineTwitter
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillInstagram
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillYoutube
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                    </div>
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Company</h1>
                    {footerProductLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-[#CCBEA1] duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Shop</h1>
                    {footercompanyLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-[#CCBEA1] duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Support</h1>
                    {footerSupportLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-[#CCBEA1] duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-8 pt-2 text-center text-gray-400 gap-10 items-center fmaxw"
            >
                <span>© 2025 Veteran Airsoft Ltd. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <div className="sm:block flex items-center justify-center w-full">
                    <img
                        src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;