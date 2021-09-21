import "./CTA.css";
export default function CTA() {
    return (
    <section id="cta" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-boost-mobile.svg)`}}>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
    </section>
    )
}
