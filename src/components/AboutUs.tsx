const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-pink-900 to-pink-600 min-h-screen">
      <div className="container mx-auto px-4 py-16 flex">
        {/* Left Side - About Content */}
        <div className="w-1/2 pr-12">
          {/* About Us Heading */}
          <h2 className="text-6xl font-bold text-white italic mb-8">
            ABOUT US
          </h2>

          {/* Content with Vertical Line and Two-Column Layout */}
          <div className="text-white space-y-6 text-lg pl-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-white"></div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <p>
                  Established in 2006, Flamingo Car Care Tech Co., Ltd is a
                  professional manufacturer and exporter which co-founded by
                  Guangdong Hosen New Material Industrial Co.,Ltd. and Flamingo
                  Car Care Tech Inc., engaged in researching, producing and
                  selling of car care products, spray paint, special coating,
                  industrial cleaning and surface treating agent.
                </p>

                <p className="mt-6">
                  Through 17 years of precipitation and accumulation, Flamingo
                  owns the profound understanding of car care products, world's
                  leading research and development ability, excellent planning
                  team and manufacturing experience for nearly a century, which
                  prosper the selling of Flamingo car care products in North
                  America. To make more car lovers around the world to recognize
                  and use Flamingo products, Flamingo Car Care Tech Inc.
                  collaborates with Guangdong Hosen New Material Industrial Co.,
                  Ltd for the establishment of research and production base,
                  promoting the Flamingo car care products to all over the
                  world.
                </p>
              </div>

              {/* Right Column */}
              <div>
                <p>
                  The new production base is located in Wengyuan, Guangdong.
                  With beautiful environment and convenient transportation, it
                  covers an area of nearly 30,000 square meters, equipped with
                  advanced experimental and production equipment specially
                  introduced from USA, German and Switzerland. At present it
                  owns 6 fully-automatic production line for aerosol, 1 for
                  paste filling,1 for liquid filling and 1 for emulsifying wax,
                  with an daily production capacity of 150,000 cans. The
                  production base has obtained the qualification for aerosol
                  production in China, and passed the ISO9001 quality system
                  certification and ISO14001 environment system certification.
                  Owning leading USA technical standard and large production
                  capacity, the base produces the Flamingo car care products, at
                  the same maintains long-term friendly cooperative relations
                  with many international well-known companies, and provides
                  them with professional, complete OEM and ODM service.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Image and COMPANY PRINCIPLE Section */}
          <div className="flex mt-12 gap-8">
            {/* Profile Image */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                alt="Profile"
                className="w-72 h-96 object-cover grayscale"
              />
            </div>

            {/* COMPANY PRINCIPLE Section */}
            <div className="flex-1 text-white">
              <h3 className="text-3xl font-bold mb-4 italic">
                COMPANY PRINCIPLE
              </h3>
              <p className="italic">
                Innovation, Professional, Reliable,
                <br />
                To Create Value for Customers!
              </p>
            </div>
          </div>

          {/* Website Link */}
          <div className="mt-8">
            <a
              href="https://www.flamingocartech.com"
              className="text-white text-xl hover:text-pink-200 transition-colors"
            >
              www.flamingocartech.com
            </a>
          </div>
        </div>

        {/* Right Side - Certifications */}
        <div className="w-1/2 pl-12">
          <h2 className="text-4xl font-bold text-white text-center italic mb-12">
            CERTIFICATION
          </h2>

          {/* Certificate Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-2 shadow-lg transform hover:scale-105 transition-transform"
              >
                <img
                  src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200&h=300`}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-40 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Certification Logos */}
          <div className="grid grid-cols-4 gap-8 mt-16">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=100`}
                  alt={`Certification Logo ${index + 1}`}
                  className="w-16 h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
