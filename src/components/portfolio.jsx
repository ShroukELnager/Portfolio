import whatsapp from "../assets/whatsapp.png";
import ecommerce from "../assets/e-commerce.png";
import portofolio from "../assets/portofolio.png";

const portfolioItems = [
  {
    title: "WhatsApp Clone",
    category: "React",
    image: whatsapp,
    link: "https://whats-app-clone-silk-alpha.vercel.app/",
  },
  {
    title: "E-commerce Website",
    category: "React",
    image: ecommerce,
    link: "https://e-commerce-website-ten-peach.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    category: "React",
    image: portofolio,
    link: "https://portfolio-three-psi-hu4qrmcdbj.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="px-6 md:px-16 py-12" data-aos="fade-up">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#0b0e17]">Portfolio</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mb-8 text-sm md:text-base">
        Here are some of my selected projects, each designed with a focus on responsiveness,
        performance, and clean user experience.
        Every piece reflects attention to detail and modern development practices.
      </p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative rounded-lg overflow-hidden shadow-md bg-white transition transform hover:-translate-y-1 hover:shadow-xl duration-300">
            
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 px-4 py-2 bg-[#0b0e17] text-white font-medium rounded-md shadow-md hover:opacity-80 transition"
                >
                  Live Preview
                </a>
              </div>
            </div>

            {/* Project Title */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#0b0e17] group-hover:text-blue-500 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
