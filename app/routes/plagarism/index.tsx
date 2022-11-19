import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";

export async function loader({ request }) {
    try {
        const url = new URL(request.url);
        const search = new URLSearchParams(url.search);
        if (!search.get("text")) return redirect("/");
        const text = search.get("text");
        const options = {
            method: 'POST',
            url: 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'bb0f4ded99mshe259f59845b58a4p11bd55jsnc5484e03bb3b',
                'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
            },
            data: `{"text":"${text}","language":"en","includeCitations":false,"scrapeSources":false}`
        };
        const res = await axios.request(options)
        console.log(res.data);
        return {sources: res.data.sources, percent: res.data.percentPlagiarism}
    } catch (err) {
        console.error(err);
        redirect("/");
        return {};
    }
}

export default function Index() {
    const data = useLoaderData();
    return (
        <div>
            <h1>Sources: {data.sources.lenght > 0 ? data.sources : "None"}</h1>
            <h2>Percent Plagarized: {data.percent}</h2>
        </div>
    );
}