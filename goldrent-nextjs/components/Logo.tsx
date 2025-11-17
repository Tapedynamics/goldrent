import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.jpg"
        alt="Gold Rent Italia - Noleggio Auto Lungo Termine"
        width={240}
        height={100}
        className="h-14 w-auto"
        priority
      />
    </Link>
  );
}
