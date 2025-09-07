import React from "react";
import { Award, Users, Star, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="metallic-text">About nickarchndesign</span>
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-silver-400 via-white to-silver-600 mx-auto mb-10 shadow-lg"
            style={{ filter: "drop-shadow(0 0 4px rgba(192, 192, 192, 0.5))" }}
          ></div>
          <p className="text-xl text-silver-200 max-w-4xl mx-auto leading-relaxed">
            A premier architectural design studio specializing in creating
            extraordinary spaces that blend innovative design with functional
            excellence, transforming visions into architectural masterpieces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-silver-400/20 to-silver-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="nickarchndesign Studio"
              className="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl filter brightness-90 group-hover:brightness-100 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white mb-8">
              <span className="metallic-text">
                Crafting Architectural Excellence
              </span>
            </h3>
            <p className="text-silver-200 mb-8 text-lg leading-relaxed">
              With over a decade of experience in architectural design and
              planning, nickarchndesign specializes in creating innovative
              residential, commercial, and institutional projects. Our expertise
              spans from conceptual design to detailed execution, ensuring every
              project reflects our commitment to excellence.
            </p>
            <p className="text-silver-200 mb-10 text-lg leading-relaxed">
              We believe in sustainable design practices, cutting-edge
              technology integration, and collaborative approaches that result
              in spaces that are not only beautiful but also functional and
              environmentally responsible.
            </p>

            <div className="grid grid-cols-2 gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-silver-600/20 to-silver-800/20 border border-silver-400/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-silver-400 transition-all duration-300 group-hover:shadow-lg">
                    <stat.icon
                      className="text-silver-300 group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3 metallic-text">
                    {stat.value}
                  </div>
                  <div className="text-silver-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
