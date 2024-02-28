import styles from "./Header.module.css";

export default function Header(){
    return(
        <div className={styles.header}>
            <div>
                <nav>
                    <img src="http://placekitten.com/200/100"/>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <h1>
                Hi, I am <span>Shuvi</span>.
            </h1>
        </div>
    )
}