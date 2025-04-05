import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-3 bg-gradient-to-br from-blue-950 to-purple-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-3 text-sm">
          <Link
            href="https://github.com/xcladev/json-xml-comparator"
            target="_blank"
            className="text-white/90 hover:text-[#00c3ff] transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg
              height="18"
              width="18"
              viewBox="0 0 16 16"
              className="fill-current opacity-90"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </Link>
          <span className="text-white/20 select-none">|</span>
          <span className="text-white/90">
            Developed by{" "}
            <span className="text-[#00c3ff] font-medium hover:text-[#00c3ff]/80 transition-colors duration-200">
              <a href="https://github.com/xcladev">xcladev</a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
