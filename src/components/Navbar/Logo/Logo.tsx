"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="logo"
      src={logo}
      alt="Logo"
    />
  );
};

export default Logo;
