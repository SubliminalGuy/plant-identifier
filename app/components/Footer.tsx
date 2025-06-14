import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 text-center text-white">
      <p>
        &copy; 2025 BuGa Pflanzenscanner Demo. Cloned with ❣️ from{" "}
        <Link href={"https://www.linkedin.com/in/aasim-bhat-b4726b115/"}>
          Bhat Aasim
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
