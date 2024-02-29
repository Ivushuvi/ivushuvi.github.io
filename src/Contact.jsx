import { Facebook, Instagram, LinkedIn, Phone, Send, X } from "@mui/icons-material";
import styles from "./Contact.module.css";

const iconSx = {
    textDecoration:"none",
    fontSize:"30px",
    marginRight:"15px",
    color:"#ababab",
    display:"inline-block",
    transition:"transform 0.5s",
    "&:hover":{
        color: "#ff004f",
        transform: "translateY(-5px)"
    }
};

export default function Contact(){
    return(
        <div>
            <div className={styles.row}>
                <div className={styles.contactLeft}>
                    <h1>Contact Me</h1>
                    <p><Send sx={{color: "#ff004f",marginRight: "15px",fontSize: "25px"}}/>contact@example.com</p>
                    <p><Phone sx={{color: "#ff004f",marginRight: "15px",fontSize: "25px"}}/>0123456789</p>
                    <div>
                        <a href=""><Facebook sx={iconSx}/></a>
                        <a href=""><X sx={iconSx}/></a>
                        <a href=""><Instagram sx={iconSx}/></a>
                        <a href=""><LinkedIn sx={iconSx}/></a>
                    </div>
                    <a href="src/assets/SoftwareCV.pdf" download className={styles.btn}>Download CV</a>
                </div>
                <div className={styles.contactRight}>
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"/>
                        <button className={styles.btn} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}