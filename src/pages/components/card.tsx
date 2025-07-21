import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
};

export default function Card({ name, description, githubUrl, websiteUrl }: CardProps) {
  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold text-black mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4 justify-center mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition min-w-[80px]"
          >
            <Image
              src="/icon/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition min-w-[80px]"
          >
            <Image
              src="/icon/web.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>
        )}
      </div>
    </div>
  );
}
