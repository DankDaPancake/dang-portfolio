import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          minhdanglee2006@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2026 Ly Huynh Minh Dang. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-2 sm:mt-0">
          Design inspired by{" "}
          <a
            href="https://www.youtube.com/watch?v=Y2kGqbzvAn4"
            target="_blank"
            className="underline hover:text-gray-700"
          >
            GreatStack
          </a>
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/DankDaPancake">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dang-ly-huynh-minh-pancake"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/pancake.dang/">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
