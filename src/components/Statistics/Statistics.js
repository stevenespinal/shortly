import StatisticCard from "./StatisticCard";
import "./Statistics.css";

export default function Statistics() {
    return (
        <section id="statistics">
            <div style={{marginBottom: "48px"}}>
                <h4>Advanced Statistics</h4>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div id="cardContainer">
                <StatisticCard imagePath={'/icon-brand-recognition.svg'} title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."/>
                <span className="vl"/>
                <StatisticCard imagePath={'/icon-detailed-records.svg'} title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                <span className="vl"/>
                <StatisticCard imagePath={'/icon-fully-customizable.svg'} title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."/>
            </div>
        </section>
    )
}
