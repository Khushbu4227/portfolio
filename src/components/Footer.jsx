import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Khushbu Mukati. All Rights Reserved.
        </p>

        <p className="mt-3 text-gray-500 flex justify-center items-center gap-2">
          Made with <FaHeart className="text-red-500" /> using React &
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;