import "./Header.css";

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Shortly"/>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + "/images/hamburger.svg"} alt="Hamburger Menu"/>
                </li>
                {/* <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Login</li>
                <li>Sign Up</li> */}
            </ul>
        </nav>
    )
}
