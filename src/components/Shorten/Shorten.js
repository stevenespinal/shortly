import "./Shorten.css";
import { useState } from "react";
import ShortenList from "./ShortenList";

export default function Shorten() {
    const [url, setUrl] = useState("");
    const [urlLinks, setUrlLinks] = useState([]);
    const [focusOut, setFocusOut] = useState(false);

    const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        console.log(data);
        setUrlLinks([...urlLinks, data]);
    }

    return (
        <>
            <section id="shorten">
                <input className={!url && focusOut ? "focusOut" : "focusIn"} type="text" placeholder="Shorten a link here..." onChange={({target: {value}}) => setUrl(value)} onBlur={() => setFocusOut(true)} onFocus={() => setFocusOut(false)}/>
                <button onClick={shortenLink}>Shorten it!</button>
            </section>
            {urlLinks.length > 0 && <ShortenList urlLinks={urlLinks}/>}
        </>
    )
}
