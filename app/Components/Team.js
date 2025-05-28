import Image from "next/image"
import { Linkedin, Twitter, Github, Award, Coffee, Heart } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former elementary teacher with 10+ years in EdTech. Sarah founded QuizMaster to make learning fun and accessible for every child.",
      achievements: "Harvard Education, Child Safety Expert",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dad of two who loves creating safe, engaging digital experiences for kids. Michael ensures our platform is both fun and secure.",
      achievements: "MIT Graduate, Child-Safe Tech Specialist",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Content Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former teacher and mom who creates educational content that kids actually enjoy. Emily makes sure every question is both fun and educational.",
      achievements: "Stanford Education PhD, Published Author",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Child psychology enthusiast who designs interfaces that are intuitive for kids. David makes sure QuizMaster is easy and delightful to use.",
      achievements: "Child UX Specialist, Design Award Winner",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-red-200/50 mb-8 shadow-lg">
            <Heart className="h-4 w-4 text-red-600 mr-2" />
            <span className="text-red-700 text-sm font-medium">Meet Our Team</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              The Caring Team Behind
            </span>
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">QuizMaster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate group of educators, parents, and child development experts working together to create the
            safest and most engaging learning experience for kids.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-red-200/50 hover:border-red-300/50 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/80 shadow-lg hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating Achievement Badge */}
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xl rounded-full p-2 border border-red-200/50 shadow-lg">
                    <Award className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Coffee className="h-3 w-3 mr-1" />
                    {member.achievements}
                  </div>

                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const icons = {
                        linkedin: Linkedin,
                        twitter: Twitter,
                        github: Github,
                      }
                      const IconComponent = icons[platform]
                      const colors = {
                        linkedin: "hover:text-blue-600",
                        twitter: "hover:text-sky-500",
                        github: "hover:text-gray-800",
                      }

                      return (
                        <a
                          key={platform}
                          href={url}
                          className={`text-gray-400 ${colors[platform]} transition-all duration-300 hover:scale-110`}
                          aria-label={`${member.name} ${platform}`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-100/20 to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 rounded-3xl p-12 backdrop-blur-xl border border-red-200/50 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Want to Join Our Mission?</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're always looking for passionate educators, developers, and child advocates who share our mission of
                making learning fun, safe, and accessible for every child.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  View Open Positions
                </button>
                <button className="border-2 border-red-400/50 text-red-600 hover:bg-red-50 hover:border-red-500 px-8 py-4 rounded-xl font-medium transition-all duration-300">
                  Learn About Our Mission
                </button>
              </div>

              <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-500" />
                  Child-focused
                </div>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 mr-2 text-yellow-600" />
                  Great benefits
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-green-600" />
                  Make a difference
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
