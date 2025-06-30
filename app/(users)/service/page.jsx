import Image from "next/image";
import style from "./service.module.css";

export const metadata = {
  title: "Service Page",
  description: "this is my service page of my website",
  authors: [
    { name: "manish kumar" },
    { name: "manish kumar", url: "mkmanish.com" },
  ],
  keywords: ["nextjs", "reactjs", "fullstack"],
};

const Services = () => {
  return (
    <section className="font-roboto">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
          {/* Repeatable Team Member Card */}
          {[
            {
              name: "Manish Kumar",
              role: "Fullstack Developer",
              skills: "React & TypeScript",
              image: "/mk.jpg",
              color: "bg-blue-200",
            },
            {
              name: "Vinay Mahto",
              role: "Data Analyst",
              skills: "React & TypeScript & Node.js",
              image: "/vin.jpg",
              color: "bg-blue-200",
            },
            {
              name: "Pankaj Kumar",
              role: "Backend Developer",
              skills: "Node.js & Python",
              image: "/pan.jpg",
              color: "bg-purple-200",
            },
            {
              name: "Pawan Mahto",
              role: "Product Manager",
              skills: "Strategy & Analytics",
              image: "/paw.jpg",
              color: "bg-pink-200",
            },
            {
              name: "Kamlesh Kumar Mahto",
              role: "DevOps Engineer",
              skills: "AWS & Docker",
              image: "/kam.jpg",
              color: "bg-orange-200",
            },
            {
              name: "Ayush Gupta",
              role: "QA Engineer",
              skills: "Testing & Automation",
              image: "/ayu.jpg",
              color: "bg-teal-200",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-24 h-24 ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
              >
                <Image
                  src={member.image}
                  width={500}
                  height={500}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-full rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                {member.role}
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                {member.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
