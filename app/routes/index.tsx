import { json, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useState } from "react";
import config from "../config.json"

export default function Index() {
  const [text, setName] = useState('');
  return (
    <div className="h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="h-screen text-lg">
        <div className="grid align-content-center">
          <h1>
            <center>
              Plagiarism Checker!
            </center>
          </h1>
          <h2>
            <center>
              -----------------------
            </center>
          </h2>
          <h3>
            <center>
              Character Limit: 100
            </center>
          </h3>
        </div>
        <div className="flex items-center justify-center m-5">
          <form action="/plagiarism" method="get">
            <body>
              <textarea className="focus:border-accent-light focus:ring-accent-dark focus:outline-none focus:ring focus:ring-opacity-40 text-md bg-slate-300 text-black bg-white dark:bg-black dark:text-white p-3 rounded-3xl"
                defaultValue={"Enter text"}
                onChange={(e) => setName(e.target.value)}
                value={text}
                name="text"
              >
              </textarea>
            </body>
            <button type="submit" className="text-center w-full bg-accent-light text-black dark:bg-accent-dark dark:text-white px-3 py-1 rounded-3xl">Submit</button>
          </form>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
async function check(text: string) {
  const url = 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': config["api-key"],
      'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
    },
    body: `{"text":"${text}","language":"en","includeCitations":false,"scrapeSources":false}`
  };
  const res = await fetch(
    url,
    options
  ).then((res) => res.json());
  return res.results;
}