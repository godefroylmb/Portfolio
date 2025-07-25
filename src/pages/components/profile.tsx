import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex items-center justify-between gap-6 flex-wrap sm:flex-nowrap w-full">
      <div className="flex flex-col justify-start gap-2 text-left max-w-[60%]">
        <div>
          <h1 className="text-3xl font-semibold text-black">Godefroy Lambert</h1>
          <p className="text-gray-600 text-base">Data Scientist — Open to opportunities</p>
        </div>
        <div className="mt-4">
          <h2 className="text-md font-bold text-black">Experience</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Data Science Intern – Verychic (Barcelona)</li>
            <li>Embedded software – OMWAVE (Paris)</li>
          </ul>
        </div>
        <div className="mt-2">
          <h2 className="text-md font-semibold text-black">Education</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Master 2 in Data Science – Institut Polytechnique de Paris (Paris)</li>
            <li>Engineering Degree – ISEP (Paris)</li>
          </ul>
        </div>
      </div>

      <div className="w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80 flex-shrink-0">
        <Image
          src="/img/me.jpeg"
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}
