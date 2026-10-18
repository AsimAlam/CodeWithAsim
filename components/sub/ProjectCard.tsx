import Image from 'next/image';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  src: string;
  title: string;
  description: string;
  address: string;
  demo?: string;
}

function ProjectCard({ src, title, description, address, demo }: Props) {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0F0728]/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-purple-900/20">
      <div className="flex flex-1 flex-col">
        <div className="overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>

        <div className="flex-grow p-5">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            {title}
          </h2>
          <p className="mt-3 text-justify leading-relaxed text-gray-300">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 p-5 pt-0">
        <a
          href={address}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          <FaGithub className="text-lg" />
          <span>View Code</span>
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-400/60 bg-transparent px-5 py-2.5 text-center text-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
