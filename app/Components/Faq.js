"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Is QuizMaster safe for kids?",
      answer:
        "QuizMaster is designed with child safety as our top priority. We have strict moderation, no chat features with strangers, and all content is age-appropriate and educational.",
    },
    {
      question: "What age group is QuizMaster designed for?",
      answer:
        "QuizMaster is perfect for kids aged 6-16. We have different difficulty levels and categories that adapt to different age groups, ensuring everyone can enjoy learning at their own pace.",
    },
    {
      question: "How do kids get started with QuizMaster?",
      answer:
        "Getting started is super easy! Kids can click 'Start Quiz' and parents can help create a safe account. No personal information is required from children, and parents maintain full control over the account.",
    },
    {
      question: "Can parents track their child's progress?",
      answer:
        "Yes! Parents have access to detailed progress reports showing their child's learning journey, strengths, areas for improvement, and time spent learning. It's a great way to celebrate achievements together!",
    },
    {
      question: "What subjects and topics are covered?",
      answer:
        "We cover a wide range of kid-friendly topics including Science, Math, History, Geography, Animals, Space, Sports, and Fun Facts. All questions are carefully reviewed by educators to ensure they're appropriate and engaging.",
    },
    {
      question: "Is there a cost to use QuizMaster?",
      answer:
        "QuizMaster offers a generous free plan that includes access to many quizzes and basic features. We also have a family-friendly premium plan with additional content, detailed analytics, and special features.",
    },
    {
      question: "Can kids play with their friends?",
      answer:
        "Yes! Kids can create private quiz rooms and invite their friends to join. All multiplayer features are designed to be safe, fun, and educational, with no direct communication between players.",
    },
    {
      question: "How do you ensure the content is educational?",
      answer:
        "All our content is created and reviewed by certified educators and child development experts. We focus on making learning fun while ensuring every question contributes to a child's educational growth.",
    },
  ]

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-red-200/50 mb-8 shadow-lg">
            <HelpCircle className="h-4 w-4 text-red-600 mr-2" />
            <span className="text-red-700 text-sm font-medium">Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Got</span>
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"> Questions?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about QuizMaster. Parents and kids can learn everything they need
            to know to get started!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}>
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-red-200/50 hover:border-red-300/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/40 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-red-700 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`h-5 w-5 text-red-600 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent mb-6"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 rounded-2xl p-8 backdrop-blur-xl border border-red-200/50 shadow-lg">
            <Sparkles className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our friendly support team is here to help parents and kids get the most out of QuizMaster.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
