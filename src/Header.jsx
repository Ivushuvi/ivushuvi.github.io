import styles from "./Header.module.css";

export default function Header(){
    return(
        <div className={styles.header} id="home">
            <div className={styles.headerText}>
                <h1 style={{color:"black"}}>
                    Hi, I am <span>Drason</span>
                </h1>
                <div style={{backgroundColor:"white",display:"inline-block"}}>
                    <p>Quick Navigation</p>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#details">Details</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}