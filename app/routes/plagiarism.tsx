import { Outlet } from "@remix-run/react";
export default function Plagiarism() {
  return (
    <div className="grid h-screen place-items-center bg-white dark:bg-black">
      <div className="p-5 rounded-3xl text-lg bg-accent-light text-black dark:bg-accent-dark dark:text-white">
        <h1>Plagiarism Checker</h1>
        <Outlet />
      </div>
    </div>
  );
}