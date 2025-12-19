import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-12 flex items-center gap-2">
      <Link href={"/"}>
        <Image
          alt={"Rajdeep Das"}
          className="rounded-full"
          height={40}
          src={"/me.webp"}
          width={40}
        />
      </Link>
      <div>
        <h1 className="font-medium text-lg">Rajdeep Das</h1>
        <p className="text-[0.9375rem] text-gray-600">
          React & TypeScript Engineer
        </p>
      </div>
    </header>
  );
}
