import { Outlet } from "@remix-run/react";
var errorJson = {"message": "Text to long, please try again with only 100 charecters"}

export default function Error() {
  return (
    <>
      {JSON.stringify(errorJson)}
    </>
  );
}