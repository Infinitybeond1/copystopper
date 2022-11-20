import { Outlet } from "@remix-run/react";
var errorJson = {"message": "No text was provided, please go back to the homepage and enter some text"}

export default function Error() {
  return (
    <>
      {JSON.stringify(errorJson)}
    </>
  );
}