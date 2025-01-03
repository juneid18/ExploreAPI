'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function AboutUs() {
  return (
    <>
    {/* Navigation Section */}
    <NavBar />
      <section className=" py-16">
      <div className="container mx-auto px-6 md:px-12 text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 text-center">
          About Us
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-tertiary mb-8 leading-relaxed text-center">
          Learn more about the creator of this project and how you can contribute to the open-source community.
        </p>

        {/* Creator Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-100 mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Meet the Creator
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Hello, I'm <strong>Juneid Mansur Shaikh</strong>, a passionate developer focused on creating meaningful web applications and open-source contributions. With a background in <em>[mention your tech stack, degree, or relevant experience]</em>, I aim to build tools that simplify complex processes for developers and enthusiasts alike.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            This project was born out of my desire to make it easier for developers and creators to explore and integrate APIs into their projects. I believe that open-source collaboration is the key to creating valuable tools for the global community.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            This project is open-source, so everyone is welcome to contribute, suggest improvements, and help us make it better. Together, we can build something truly special!
          </p>
        </div>

        {/* How to Contribute Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-100 max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            How You Can Contribute
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project is open-source, and contributions are more than welcome! Here’s how you can get involved:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
            <li>Report bugs or suggest new features.</li>
            <li>Submit pull requests to fix issues or improve functionality.</li>
            <li>Help improve documentation or translate it into other languages.</li>
            <li>Share your ideas for new APIs to add to the project.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-4">
            To get started, fork the repository, make your changes, and submit a pull request. For more information on how to contribute, check the <a href="https://github.com/juneid18/ExploreAPI" className="text-tertiary hover:text-secondary">GitHub repository</a>.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-100 max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions or want to discuss potential collaborations, feel free to reach out. I’d love to hear from you!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Email: <a href="mailto:juneidshaikh18@gmail.com" className="text-tertiary hover:text-secondary">prof.juneidshaikh18@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            GitHub: <a href="https://github.com/juneid18" className="text-tertiary hover:text-secondary">https://github.com/juneid18</a>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/juneid18"
            className="inline-block px-8 py-3 text-white bg-tertiary hover:bg-secondary rounded-lg shadow-lg text-lg transition duration-300"
          >
            Visit GitHub Repository
          </a>
        </div>
      </div>
    </section>  
    {/* Footer Section */}
    <Footer />
    </>
    
  );
}
