import Link from "next/link";
import React from "react";
import { Ubuntu } from "next/font/google";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="px-6 bg-[#FFFFFF30]">
      {/**
       * 
       * 
       * <div className="container p-6">
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">Link 1</Link>
              </li>
              <li>
                <Link href="#!">Link 2</Link>
              </li>
              <li>
                <Link href="#!">Link 3</Link>
              </li>
              <li>
                <Link href="#!">Link 4</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">Link 1</Link>
              </li>
              <li>
                <Link href="#!">Link 2</Link>
              </li>
              <li>
                <Link href="#!">Link 3</Link>
              </li>
              <li>
                <Link href="#!">Link 4</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">Link 1</Link>
              </li>
              <li>
                <Link href="#!">Link 2</Link>
              </li>
              <li>
                <Link href="#!">Link 3</Link>
              </li>
              <li>
                <Link href="#!">Link 4</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">Link 1</Link>
              </li>
              <li>
                <Link href="#!">Link 2</Link>
              </li>
              <li>
                <Link href="#!">Link 3</Link>
              </li>
              <li>
                <Link href="#!">Link 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
       * 
       * 
       * 
       */}

      {/* Copyright section */}
      <div className="w-full bg-black/5 p-4 text-center">
        © 2024 Copyright:{" "}
        <Link href="https://tw-elements.com/">
          TW Elements
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
