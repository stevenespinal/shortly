import "./Hero.css";

export default function Hero() {
    return (
        <section id="hero">
            <img src={process.env.PUBLIC_URL + "/images/illustration-working.svg"} alt="working"/>
            <div className="description">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
        </section>
    )
}
