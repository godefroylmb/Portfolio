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
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
}
