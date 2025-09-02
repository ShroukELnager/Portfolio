import { MdOutlineWeb } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <MdOutlineWeb size={28} className="text-[#0b0e17]" />, // الأزرق الغامق
      title: "Web Development Services",
      desc: "Creating user-friendly and visually stunning websites.",
    },
    {
      id: 2,
      icon: <FaPencilAlt size={28} className="text-[#0b0e17]" />,
      title: "Portfolio Websites",
      desc: "Creating portfolio websites for clients.",
    },
    {
      id: 3,
      icon: <FaShoppingBag size={28} className="text-[#0b0e17]" />,
      title: "E-commerce Services",
      desc: "Creating e-commerce websites to sell products.",
    },
    {
      id: 4,
      icon: <FaTachometerAlt size={28} className="text-[#0b0e17]" />,
      title: "Dashboard Website",
      desc: "Creating dashboard websites to manage your business.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#0b0e17]">Services</h2>
      <p className="text-gray-500 mt-2 mb-8">My services as a frontend developer.</p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-2 bg-[#a3b9cc] rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >
            <div>{service.icon}</div>
            <h3 className="font-semibold text-[#0b0e17]">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
