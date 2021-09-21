import './StatisticCard.css';
export default function StatisticCard({imagePath, title, text}) {
    return (
        <div id="statisticCard">
            <figure className="statisticCircle">
                <img src={`${process.env.PUBLIC_URL}/images/${imagePath}`} alt="Brand Recognition" />
            </figure>
            <div className="cardDescription">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
