import React from 'react';
import Image from 'next/image';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

import Box from '../ui/box';

interface HeroProps {
  title?: string;
  description: string;
  primaryAction: () => void;
  secondaryAction?: () => void | undefined;
}

const Hero = ({
  title,
  description,
  primaryAction,
  secondaryAction
}: HeroProps) => {
  return (
    <Box className="relative bg-transparent rounded-lg shadow-md overflow-hidden ">
      <Box className="grid gap-4 justify-between sm:grid-cols-1 sm:items-center md:grid-cols-2 md:justify-between">
        <Box className="w-full">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title ? (
              title
            ) : (
              <>
                <p>Sync Seamlessly,</p>
                <p>Meet Effortlessly</p>
              </>
            )}
          </h1>
          <br />

          <p className="text-orange-300 mb-6">{description}</p>

          <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button
              onClick={primaryAction}
              className="flex h-full w-8/12 select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-400/25 to-orange-600/75 p-6 no-underline outline-none focus:shadow-md hover:animate-breathing"
            >
              Get Started
              <Icons.rocket />
            </Button>

            {secondaryAction && (
              <Button
                onClick={secondaryAction}
                className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Secondary Action
              </Button>
            )}
          </div>
        </Box>
        <div className="relative flex place-items-center mx-auto before:absolute before:h-[500px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image src="/Conveen-NOBG.png" alt="Hero" width={500} height={500} />
        </div>
      </Box>
    </Box>
  );
};

export default Hero;
