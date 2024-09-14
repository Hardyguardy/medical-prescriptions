import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* 1 */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, laoreet tincidunt nam ea. His eu summo
            ludus. Fuisset eloquentiam ea mea, graeco voluptatibus at nec.
            Graeci debitis et eam. Salutandi explicari mel in, cibo appetere
            comprehensam eos ne.
          </p>
        </div>

        {/* 2 */}
        <div>
          <p className="tetx-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <p className="tetx-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1 293-097-921</li>
            <li>healthymedical@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 Healthy. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
