import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreakLine from "./BreakLine";
import useCurrentUser from "../hooks/useCurrentUser";
import * as fcl from "@onflow/fcl";

const Navbar = () => {
  const currentUser = useCurrentUser();
  // const currentUser = true;
  console.log(currentUser);
  return (
    <>
      <div className="grid grid-cols-3 px-28 py-3 ">
        <div className="flex items-center justify-start">
          {currentUser.addr}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src={"/logo3.jpg"} alt="" width={100} height={100} />
          </Link>
        </div>
        <ul className="flex items-center justify-end gap-5">
          {!currentUser.loggedIn ? (
            <li onClick={fcl.authenticate} className="cursor-pointer">
              Connect Wallet
            </li>
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
              <li
                className="min-w-fit cursor-pointer"
                onClick={fcl.unauthenticate}
              >
                Log Out
              </li>
            </>
          )}
        </ul>
      </div>
      <BreakLine />
    </>
  );
};

export default Navbar;
