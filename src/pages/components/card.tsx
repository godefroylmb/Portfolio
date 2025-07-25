import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  language?: string;
  stack?: string;
};

export default function Card({ name, description, githubUrl, websiteUrl, language, stack }: CardProps) {
  return (
    <div className="rounded-2xl p-4 shadow-md bg-[#fffefe] flex flex-col h-full">
      <h2 className="text-xl font-semibold text-[#1c1c1f] mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      {language && (
        <div className="flex items-center text-gray-700 mb-3 space-x-2">
          <Image src="/icon/terminal.svg" alt="Terminal" width={20} height={20} />
          <span>{language}</span>
        </div>
      )}

      {stack && (
        <div className="flex items-center text-gray-700 mb-4 space-x-2">
          <Image src="/icon/cog.svg" alt="Stack" width={20} height={20} />
          <span>{stack}</span>
        </div>
      )}

      <div className="flex space-x-4 justify-center mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition min-w-[80px]"
          >
            <Image src="/icon/github.svg" alt="GitHub" width={20} height={20} />
          </a>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition min-w-[80px]"
          >
            <Image src="/icon/web.svg" alt="Website" width={20} height={20} />
          </a>
        )}
      </div>
    </div>
  );
}