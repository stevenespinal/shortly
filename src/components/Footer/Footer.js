import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <img src={process.env.PUBLIC_URL + "/images/white-logo.svg"} alt="Shortly Logo" />
            <ul>
                <h6>Features</h6>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <h6>Resources</h6>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul>
                <h6>Company</h6>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <section id="social">
                <img src={process.env.PUBLIC_URL + "/images/icon-facebook.svg"} alt="fb" />
                <img src={process.env.PUBLIC_URL + "/images/icon-twitter.svg"} alt="twitter" />
                <img src={process.env.PUBLIC_URL + "/images/icon-pinterest.svg"} alt="pinterest" />
                <img src={process.env.PUBLIC_URL + "/images/icon-instagram.svg"} alt="ig" />
            </section>
        </footer>
    )
}
