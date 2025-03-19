'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/inii.tech' : '';

const features = [
  {
    name: 'ColorCard',
    description: 'Palette tool for designers.',
    icon: <Image src="/colorcard.png" alt="ColorCard" width={48} height={48} className="object-contain rounded-xl" />,
    color: 'bg-[#C1D82F]',
    link: 'https://apps.apple.com/us/app/id1207354572',
  },
  {
    name: 'iFrame',
    description: 'Add frames to screenshots.',
    icon: <Image src="/iframe.png" alt="iFrame" width={48} height={48} className="object-contain rounded-xl" />,
    color: 'bg-[#87CEEB]',
    link: 'https://apps.apple.com/us/app/id1209610705',
  },
  {
    name: 'Progress',
    description: 'Manage your task progress.',
    icon: <Image src="/progress.png" alt="Progress" width={48} height={48} className="object-contain rounded-xl" />,
    color: 'bg-[#FFD700]',
    link: 'https://apps.apple.com/us/app/id1460584174',
  },
  {
    name: 'Menu AI',
    description: 'Ask AI in menu bar.',
    icon: <Image src="/menuai.png" alt="Menu AI" width={48} height={48} className="object-contain rounded-xl" />,
    color: 'bg-[#1B4B8C]',
    link: 'https://apps.apple.com/us/app/id6740474816',
  },
];

export default function Hero() {
  return (
    <div className="relative isolate bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl ubuntu-bold tracking-tight text-[#120652] sm:text-4xl">
              Create <span className="text-[#FFAC3C]">to</span> Innovate:
              <br />
              <span className="text-[#FFAC3C]">〰〰〰〰</span>
              <br />
              AI, Health, Efficiency.
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto grid max-w-lg grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                whileHover={{ y: -8 }}
                className={`rounded-3xl ${feature.color} px-8 py-10 cursor-pointer`}
                style={{
                  color: feature.color === 'bg-[#C1D82F]' || feature.color === 'bg-[#FFD700]' ? '#1E1B4B' : 'white'
                }}
                onClick={() => window.open(feature.link, '_blank')}
              >
                <div className="flex flex-col items-center gap-y-3">
                  <div className="w-12 h-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg ubuntu-medium leading-8">{feature.name}</h3>
                </div>
                <p className="mt-2 text-sm ubuntu-light leading-6 opacity-90 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 