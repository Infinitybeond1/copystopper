import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios"
import config from "../../config.json"

export default function Index() {
    const data = useLoaderData();
    return (
        <div>
            <h1>Sources: {data.sources.lenght > 0 ? data.sources : "None"}</h1>
            <h2>Percent Plagarized: {data.percent}</h2>
        </div>
    );
}
export async function loader({ request }) {
    try {
        const url = new URL(request.url);
        const search = new URLSearchParams(url.search);
        if (!search.get("text")) return redirect("/");
        const text = search.get("text");
        if (text?.length > 100) {
            return redirect("/error")
        }
        const options = {
            method: 'POST',
            url: 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': config["api-key"],
                'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
            },
            data: `{"text":"${text}","language":"en","includeCitations":false,"scrapeSources":false}`
        };
        const res = await axios.request(options)
        console.log(res.data);
        return { sources: res.data.sources, percent: res.data.percentPlagiarism }
    } catch (err) {
        console.error(err);
        redirect("/");
        return {};
    }
}