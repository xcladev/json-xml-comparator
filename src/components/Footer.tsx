import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-br from-blue-950 to-purple-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white mb-3">
              JSON & XML Comparator
            </h3>
            <p className="text-xs text-gray-400">
              A free online tool for comparing JSON and XML files with ease. No
              registration required, 100% client-side processing.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="text-xs space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#00c3ff] transition-colors duration-200"
                  prefetch={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#00c3ff] transition-colors duration-200"
                  prefetch={true}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/xcladev/json-xml-comparator"
                  target="_blank"
                  className="text-gray-400 hover:text-[#00c3ff] transition-colors duration-200"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-white mb-3">About</h3>
            <p className="text-xs text-gray-400">
              Developed by{" "}
              <a
                href="https://github.com/xcladev"
                className="text-[#00c3ff] hover:text-[#00c3ff]/80 transition-colors duration-200"
              >
                xcladev
              </a>
              <br />
              Released under MIT License
            </p>
          </div>
        </div>
        <div className="border-t border-white/5 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} JSON & XML Comparator • All code
            processed locally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
