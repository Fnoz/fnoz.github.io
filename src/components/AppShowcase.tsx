'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/inii.tech' : '';

const testimonials = [
  {
    content: "ColorCard has transformed my design workflow with its intuitive color scheme management.",
    author: "Emily Parker",
    role: "UI Designer",
    app: "ColorCard",
    avatar: "/avatar/emily.jpg"
  },
  {
    content: "As a developer, Progress helps me track project milestones with its clean and straightforward interface.",
    author: "Marcus Anderson",
    role: "iOS Developer",
    app: "Progress"
  },
  {
    content: "iFrame makes my screenshots look more professional. Clients love it!",
    author: "Sofia Rodriguez",
    role: "Product Manager",
    app: "iFrame",
    avatar: "/avatar/sofia.jpg"
  },
  {
    content: "Menu AI boosts my productivity with its convenient menu bar AI features.",
    author: "James Wilson",
    role: "Freelancer",
    app: "Menu AI"
  },
  {
    content: "The gradient library in ColorCard is a goldmine of creative inspiration. Absolutely recommended!",
    author: "Isabella Martinez",
    role: "Graphic Designer",
    app: "ColorCard",
    avatar: "/avatar/isabella.jpg"
  },
  {
    content: "The widget feature in Progress is fantastic! I can track my goals right from my home screen.",
    author: "Oliver Thompson",
    role: "Student",
    app: "Progress"
  },
  {
    content: "The batch processing feature in iFrame saves me hours of work. Such a time-saver!",
    author: "Mia Johnson",
    role: "Content Creator",
    app: "iFrame",
    avatar: "/avatar/mia.jpg"
  },
  {
    content: "Menu AI's natural language interaction is superb. It's become an essential tool in my workflow.",
    author: "Lucas Bennett",
    role: "Tech Writer",
    app: "Menu AI"
  },
  {
    content: "ColorCard's export options are perfect for my design team collaboration. We use it every day!",
    author: "Rachel Chen",
    role: "Art Director",
    app: "ColorCard",
    avatar: "/avatar/rachel.jpg"
  }
];

// Split testimonials into pages of 3 items each
const itemsPerPage = 3;
const testimonialPages = testimonials.reduce((acc, item, index) => {
  const pageIndex = Math.floor(index / itemsPerPage);
  if (!acc[pageIndex]) {
    acc[pageIndex] = [];
  }
  acc[pageIndex].push(item);
  return acc;
}, [] as typeof testimonials[]);

export default function AppShowcase() {
  const [currentPage, setCurrentPage] = useState(0);

  // Helper function to highlight app names
  const highlightAppNames = (content: string) => {
    const appNames = ["ColorCard", "iFrame", "Progress", "Menu AI"];
    let highlightedContent = content;
    appNames.forEach(appName => {
      highlightedContent = highlightedContent.replace(
        new RegExp(appName, 'g'),
        `<span class="text-[#FFAC3C]">${appName}</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonialPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              {testimonialPages[currentPage].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[360px] bg-transparent p-6 rounded-2xl border-2 border-gray-100 relative"
                >
                  <span className="absolute text-6xl text-[#FFAC3C] opacity-20 left-4 top-2">"</span>
                  <p className="text-gray-600 text-base leading-relaxed h-[96px] overflow-hidden font-semibold italic">
                    {highlightAppNames(testimonial.content)}
                  </p>
                  <span className="absolute text-6xl text-[#FFAC3C] opacity-20 right-4 bottom-16 rotate-180">"</span>
                  <div className="mt-6 flex items-center gap-3">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-500">
                          {testimonial.author[0]}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-6 gap-2">
            {testimonialPages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentPage === index ? 'bg-[#FFAC3C]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}