import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreakLine from "./BreakLine";

const Navbar = () => {
  const currentUser = true;
  return (
    <>
      <div className="grid grid-cols-3 px-28 py-3 ">
        <div className="flex items-center justify-start">currentUser</div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src={"/logo3.jpg"} alt="" width={100} height={100} />
          </Link>
        </div>
        <ul className="flex items-center justify-end gap-5">
          {!currentUser ? (
            <li>Connect Wallet</li>
          ) : (
            <>
              <li className="min-w-fit">
                <Link href="/mint">Mint</Link>
              </li>
              <li className="min-w-fit">
                <Link href="/collect">Collect</Link>
              </li>
              <li className="min-w-fit">
                <Link href="/my-collections">My Collection</Link>
              </li>
              <li className="min-w-fit">Log Out</li>
            </>
          )}
        </ul>
      </div>
      <BreakLine />
    </>
  );
};

export default Navbar;
