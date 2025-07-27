import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full sm:gap-6 sm:flex-nowrap items-center justify-center">
        <div className="flex flex-col justify-start gap-2 sm:text-left sm:items-start text-center items-center w-full">
          <div>
            <h1 className="text-5xl font-bold text-black">Godefroy Lambert</h1>
            <p className="text-gray-600 text-lg">Data Scientist — Open to opportunities</p>
          </div>

          <p className="text-gray-700 text-lg mt-2 max-w-md sm:max-w-none">
            Passionate about applying data science and machine learning to solve real-world problems.
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-black">Experience</h2>
            <ul className="text-black list-disc list-inside space-y-3">
              <li>
                <span className="text-base">Data Scientist Intern – Verychic (Barcelona)</span>
                <div className="ml-5">
                  <p className="text-base text-gray-600 mt-1">
                    Performed NLP and topic modeling on product descriptions to enhance hotel recommendation algorithms.
                  </p>
                  <p className="text-base text-gray-500 mt-1 italic">
                    Python, scikit-learn, Tensorflow, spaCy, NLTK
                  </p>
                </div>
              </li>
              <li>
                <span className="text-base">Embedded software – OMWAVE (Paris)</span>
                <div className="ml-5">
                  <p className="text-base text-gray-600 mt-1">
                    Developed a Java-based Android application under AOSP for a connected henhouse project, leveraging Firebase for backend services.
                  </p>
                  <p className="text-base text-gray-500 mt-1 italic">
                    Java, Android, Firebase
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-black">Projects</h2>
            <ul className="text-gray-700 list-disc list-inside text-base">
              <li>
                Hi! Paris Hi!ckhaton –{" "}
                <a
                  href="https://www.smartcertificate.com/SmartDiploma/?1%7c05f17624-ed53-4459-bc46-eff76d464251%7c95ba7642-4a94-4f5e-9130-0a26cbd1d90f#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Honorable Mention for clean code
                </a>
              </li>
              <li>
                <a
                  href="https://www.smartcertificate.com/SmartDiploma/?1%7c7d3f566f-f474-4009-bb9f-45d06fde4177%7ceda43d06-0435-45b1-ad28-2b301da5a7f0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Hi! Paris Data Bootcamp
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-black">Education</h2>
            <ul className="text-gray-700 list-disc list-inside text-base">
              <li>Master 2 in Data Science – Institut Polytechnique de Paris (Paris)</li>
              <li>Engineering Degree – ISEP (Paris)</li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:block w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80 flex-shrink-0">
          <Image
            src="/img/me.jpeg"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
