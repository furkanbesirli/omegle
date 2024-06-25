"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Login = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/admin/adminLogin" }); // Oturumu kapatma işlemi
  };

  return (
    <div>
      {session ? (
        <div className="flex items-center">
          <div
            className="capitalize text-white font-bold py-1 px-3 w-26 h-10 rounded flex items-center justify-center mr-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {session.user?.name || session.user?.email}
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="bg-orange-500 text-white p-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-orange-400 text-white font-bold py-1 px-3 w-26 h-10 rounded flex items-center justify-center">
          <Link href={"/ftf"}>Log in</Link>
        </div>
      )}
    </div>
  );
};

export default Login;
