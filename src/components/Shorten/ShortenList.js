import "./ShortenList.css";
import { useState } from "react";

export default function ShortenList({urlLinks}) {

    const [clickedUrl, setClickedUrl] = useState({});

    const copyText = (link, index) => {
        navigator.clipboard.writeText(link.result.short_link);
        setClickedUrl({index, clicked: true});
        const timeout = setTimeout(() => {
            setClickedUrl({});
        }, 3000);

        return () => clearTimeout(timeout);
    }


    return (
        <section id="shortenCard">
            {urlLinks.map((link,index) => {
                return (
                    <div key={index} style={{marginTop: 24}}>
                        <h6>{link.result.original_link}</h6>
                        <p>{link.result.short_link}</p>
                        <button className={clickedUrl.clicked && clickedUrl.index === index ? "clicked" : ""} onClick={() => copyText(link, index)}>{clickedUrl.clicked && clickedUrl.index === index ? "Copied!" : "Copy"}</button>
                    </div>
                )
            })}
        </section>
    )
}
