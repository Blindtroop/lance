import { FaWhatsapp } from "react-icons/fa";

export default function Chat() {
  return (
    <>
      {/* Desktop */}
      <a
        href="https://wa.me/254115112760"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl z-50 hover:scale-105 transition"
      >
        <FaWhatsapp size={28} />
        <span className="font-medium">Chat With Me</span>
      </a>

      {/* Mobile */}
      <a
        href="https://wa.me/254115112760"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}