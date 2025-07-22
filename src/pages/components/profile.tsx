import Image from "next/image";

export default function Profile() {
  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white flex justify-center">
      <Image
        src="/img/me.jpeg"
        alt="Profile Picture"
        width={100}
        height={100}
        className="rounded-full object-cover"
      />
    </div>
  );
}
