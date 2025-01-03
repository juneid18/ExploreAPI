export default function Footer() {
    return (
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Brand Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">API Explorer</h2>
              <p className="text-sm text-white/80">
                Discover and integrate the best APIs for your projects. Over 50 APIs available at your fingertips.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/AboutUs"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#apis"
                    className="hover:text-primary transition-colors"
                  >
                    APIs
                  </a>
                </li>
                <li>
                  <a
                    href="/ContactUs"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://x.com/Juneidshaikh18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.917 4.917 0 0 0-8.384 4.482c-4.083-.2-7.697-2.158-10.125-5.134-.422.725-.666 1.562-.666 2.475 0 1.71.87 3.213 2.188 4.096a4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.921 4.921 0 0 1-2.224.084c.626 1.956 2.444 3.381 4.604 3.421a9.86 9.86 0 0 1-6.102 2.105c-.395 0-.787-.023-1.175-.067a13.905 13.905 0 0 0 7.548 2.213c9.057 0 14.004-7.514 14.004-14.034 0-.213-.004-.426-.014-.637.962-.695 1.796-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
  href="https://www.instagram.com/juneid_shaikh_18"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/80 hover:text-primary transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M12 2.163c3.13 0 3.53.012 4.777.069 1.162.061 1.914.279 2.363.469a4.825 4.825 0 0 1 1.774 1.774c.191.449.408 1.201.469 2.363.057 1.247.069 1.647.069 4.777s-.012 3.53-.069 4.777c-.061 1.162-.279 1.914-.469 2.363a4.825 4.825 0 0 1-1.774 1.774c-.449.191-1.201.408-2.363.469-1.247.057-1.647.069-4.777.069s-3.53-.012-4.777-.069c-1.162-.061-1.914-.279-2.363-.469a4.825 4.825 0 0 1-1.774-1.774c-.191-.449-.408-1.201-.469-2.363-.057-1.247-.069-1.647-.069-4.777s.012-3.53.069-4.777c.061-1.162.279-1.914.469-2.363a4.825 4.825 0 0 1 1.774-1.774c.449-.191 1.201-.408 2.363-.469 1.247-.057 1.647-.069 4.777-.069zM12 0C8.739 0 8.311.01 7.02.069c-1.23.062-2.263.299-3.15.686a6.333 6.333 0 0 0-2.335 2.335C.79 4.757.062 5.79.01 7.02.01 8.311 0 8.739 0 12s.01 3.53.069 4.777c.062 1.23.299 2.263.686 3.15a6.333 6.333 0 0 0 2.335 2.335c.887.387 1.92.624 3.15.686 1.247.057 1.667.069 4.777.069s3.53-.012 4.777-.069c1.23-.062 2.263-.299 3.15-.686a6.333 6.333 0 0 0 2.335-2.335c.387-.887.624-1.92.686-3.15.057-1.247.069-1.667.069-4.777s-.012-3.53-.069-4.777c-.062-1.23-.299-2.263-.686-3.15a6.333 6.333 0 0 0-2.335-2.335c-.887-.387-1.92-.624-3.15-.686C15.53.01 15.102 0 12 0zM12 5.84a6.16 6.16 0 1 0 6.16 6.16 6.16 6.16 0 0 0-6.16-6.16zm0 10.13a3.97 3.97 0 1 1 0-7.933 3.97 3.97 0 0 1 0 7.933zM18.406 4.172a1.444 1.444 0 1 0-2.888 0 1.444 1.444 0 0 0 2.888 0z" />
  </svg>
</a>

                <a
                  href="https://www.linkedin.com/in/juneid-shaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.06 20.452H3.338V9.035H7.06v11.417zM5.199 7.637c-1.181 0-2.138-.969-2.138-2.165 0-1.196.957-2.165 2.138-2.165 1.181 0 2.138.969 2.138 2.165 0 1.196-.957 2.165-2.138 2.165zM20.452 20.452h-3.723v-5.978c0-1.426-.026-3.262-1.987-3.262-1.987 0-2.29 1.552-2.29 3.153v6.087h-3.722V9.035h3.576v1.558h.051c.497-.943 1.711-1.937 3.526-1.937 3.771 0 4.467 2.48 4.467 5.708v6.088z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/80">
            © {new Date().getFullYear()} API Explorer. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  