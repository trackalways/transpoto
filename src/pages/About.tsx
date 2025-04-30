
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Users, Globe, Calendar, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  {
    year: "2015",
    title: "Founded in Nairobi",
    description: "Transpoto was established by Sahil Singh to solve logistics challenges for Kenyan businesses."
  },
  {
    year: "2017",
    title: "East African Expansion",
    description: "Expanded operations to Tanzania, Uganda, and Rwanda with dedicated shipping routes."
  },
  {
    year: "2019",
    title: "Pan-African Network",
    description: "Extended logistics network to West and Southern African markets and major economic hubs."
  },
  {
    year: "2021",
    title: "International Routes",
    description: "Launched global shipping services connecting African businesses to international markets."
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented advanced tracking technology and logistics platform for enhanced efficiency."
  }
];

const teamMembers = [
  {
    name: "Sahil Singh",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80", // Professional business portrait
  },
  {
    name: "Shivangi Jain",
    position: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80", // Professional business portrait
  },
  {
    name: "Prateek Jain",
    position: "Head of African Operations",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", // Professional business portrait
  },
  {
    name: "Shivam Taneja",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=200&q=80", // Professional business portrait
  }
];

const values = [
  {
    icon: <Globe className="h-12 w-12 text-transpoto-600" />,
    title: "Pan-African Focus",
    description: "Deep understanding of African markets and logistics challenges."
  },
  {
    icon: <Users className="h-12 w-12 text-transpoto-600" />,
    title: "Customer-First",
    description: "Dedicated to understanding and meeting unique business needs."
  },
  {
    icon: <Award className="h-12 w-12 text-transpoto-600" />,
    title: "Excellence",
    description: "Committed to delivering the highest quality logistics services."
  },
  {
    icon: <Truck className="h-12 w-12 text-transpoto-600" />,
    title: "Reliability",
    description: "Consistent and dependable service you can count on."
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-transpoto-50 to-seafoam-50" aria-labelledby="about-hero-title">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5 text-transpoto-600" />
                <span className="text-sm font-medium text-transpoto-600">Based in Nairobi, Kenya</span>
              </div>
              <h1 id="about-hero-title" className="text-4xl md:text-5xl font-bold mb-6">About Transpoto</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded by Sahil Singh in 2015, Transpoto is a leading logistics company connecting African businesses to the world with reliable, efficient shipping solutions.
              </p>
              <Button size="lg">Our Story</Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="lg:flex items-center gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Transpoto, our mission is to empower African businesses by providing reliable, accessible logistics solutions that bridge the gap between local entrepreneurs and global markets.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe in removing barriers to trade and enabling businesses of all sizes across Africa to compete in the global marketplace through efficient shipping and logistics services.
                </p>
                <p className="text-lg text-muted-foreground">
                  Led by our founder Sahil Singh, we are committed to leveraging technology and local expertise to transform logistics across the African continent.
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Transpoto Team Meeting" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide every aspect of our business
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <article
                  key={index}
                  className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                  aria-label={value.title}
                >
                  <div className="mb-5 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the experts behind Transpoto's success
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <article
                  key={index}
                  className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  aria-label={`Team member: ${member.name}`}
                >
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={`Photo of ${member.name}, ${member.position}`} 
                      className="w-full h-full object-cover rounded-lg border"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in Transpoto's growth across Africa
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto" role="list" aria-label="Company milestones timeline">
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-transpoto-100 transform md:translate-x-[-0.5px]"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <article 
                    key={index} 
                    className={`relative ${index % 2 === 0 ? 'md:ml-[50%]' : 'md:mr-[50%] md:pl-0'}`}
                    aria-label={`Milestone: ${milestone.title}`}
                  >
                    <div className="flex md:flex-row gap-4 md:gap-8">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-transpoto-600 rounded-full flex items-center justify-center relative z-10">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <div className="text-2xl font-bold text-transpoto-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
