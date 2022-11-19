import { json, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useState } from "react";
import config from "../config.json"

export default function Index() {
  const [text, setName] = useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(await check(text))
  }
  return (
    <div className="h-screen bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
      <div className="h-screen text-lg">
        <div className="grid align-content-center">
          <h1>
            <center>
              Plagarism Checker!
            </center>
          </h1>
          <h2>
            <center>
              -----------------------
            </center>
          </h2>
          <h3>
            <center>
              Character Limit: 500
            </center>
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <form action="/plagarism" method="get">
            <body>
              <textarea className="text-md bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-300 p-3 rounded-3xl"
                defaultValue={"Enter text"}
                onChange={(e) => setName(e.target.value)}
                value={text}
                name="text"
              >
              </textarea>
            </body>
            <br />
            <button type="submit" className="text-center">Submit</button>
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