import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
// import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full sticky-bottom">
      <div className="mx-auto w-full max-w-12xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} <Link to={"/about"}>Chandu Terala </Link>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* linkedin  */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <BsLinkedin onClick={() => window.open("https://www.linkedin.com/in/poorna-chander-terala-475ba8176/", "_blank")} />
            </Typography>
            {/* Github */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <BsGithub onClick={() => window.open("https://github.com/poorna-24?tab=repositories", "_blank")} />
            </Typography>
            {/* Instagram */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <GrInstagram onClick={() => window.open("https://www.instagram.com/chandu__terala?igsh=MWRzOG53bzB1d29oZw%3D%3D&utm_source=qr", "_blank")} />
            </Typography>
            {/* whatsapp */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaWhatsapp onClick={() => window.open("https://api.whatsapp.com/send/?phone=918099057599&text&type=phone_number&app_absent=0", "_blank")} />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
