'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gray-50 opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-gray-200/10 ring-1 ring-gray-200 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About INII</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            INII is a technology company committed to innovation, focusing on developing high-quality iOS and macOS applications. Our mission is to bring more convenient and efficient digital life experiences through technological innovation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-center lg:max-w-none lg:grid-cols-3"
        >
          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-gray-100 p-2 ring-1 ring-gray-200">
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Innovative Design</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              We pursue innovative design concepts to deliver unique product experiences
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-gray-100 p-2 ring-1 ring-gray-200">
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Efficient Development</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              We continuously optimize our development process to ensure product quality and stability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-gray-100 p-2 ring-1 ring-gray-200">
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">User-Centric</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              We always put user needs first to create thoughtful product features
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 