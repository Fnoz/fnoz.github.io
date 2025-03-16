'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const iosApps = [
  {
    name: 'ColorCard',
    description: 'An elegant color picking tool for efficient design workflow',
    image: '/colorcard.png',
    link: '#',
  },
  {
    name: 'iFrame',
    description: 'Professional photo enhancement tool for stunning visuals',
    image: '/iframe.png',
    link: '#',
  },
  {
    name: 'Progress',
    description: 'Clean and simple progress tracking for clear goal achievement',
    image: '/progress.png',
    link: '#',
  },
];

const macosApps = [
  {
    name: 'Menu AI',
    description: 'Intelligent menu bar assistant for enhanced productivity',
    image: '/menuai.png',
    link: '#',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AppShowcase() {
  return (
    <>
      {/* iOS Apps Section */}
      <section id="ios-apps" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">iOS Apps</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Carefully crafted iOS applications that bring more possibilities to your mobile devices
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {iosApps.map((app) => (
              <motion.div
                key={app.name}
                variants={item}
                className="group relative"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={app.image}
                    alt={app.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900">
                  {app.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{app.description}</p>
                <a
                  href={app.link}
                  className="mt-4 inline-block text-purple-600 hover:text-purple-500"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* macOS Apps Section */}
      <section id="macos-apps" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">macOS Apps</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Smart tools designed for Mac users to enhance your workflow
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-2xl lg:mx-0"
          >
            {macosApps.map((app) => (
              <motion.div
                key={app.name}
                variants={item}
                className="group relative"
              >
                <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={app.image}
                    alt={app.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900">
                  {app.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{app.description}</p>
                <a
                  href={app.link}
                  className="mt-4 inline-block text-purple-600 hover:text-purple-500"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
} 