import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = ({ onContactOpen }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "#" },
    { name: "Twitter", icon: <FaTwitter />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
  ];

  return (
    <footer className="bg-[#008080] text-white text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Logo */}
          <div className="max-w-6xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold text-white tracking-[-0.02em]"
        >
          lance<span className="text-accent">.</span>
        </a>
        </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-neutral-300">
                <MdEmail className="flex-shrink-0" />
                <a href="mailto:kaluhilance4@gmail.com" className="hover:text-white transition">
                  kaluhilance4@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <MdPhone className="flex-shrink-0" />
                <a href="tel:+254115112760" className="hover:text-white transition">
                  +254 115 112760
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-300">
                <MdLocationOn className="flex-shrink-0 mt-0.5" />
                <span>Moi Avenue, Nairobi CBD, Kenya</span>
              </li>
            </ul>
          </div>

          

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-white">
              Get Involved
            </h3>
            <button
              onClick={onContactOpen}
              className="bg-[#F4E1C1] border border-[#F4E1C1] cursor-pointer text-black text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-2.5 rounded-sm hover:bg-[#008080] hover:text-neutral-900 transition"
            >
              Get a Quote
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;