import { Apple, Code, Crop } from "@mui/icons-material";
import styles from "./Services.module.css"

export default function Services() {
    return(
        <div>
            <h1>My services</h1>
            <div className={styles.servicesList}>
                <div>
                    <Code sx={{fontSize: 50}}/>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis doloribus error consequuntur cumque perspiciatis laboriosam odio totam perferendis architecto in. Officia autem obcaecati inventore quia vitae dolorem ratione pariatur laborum?</p>
                </div>
                <div>
                    <Crop sx={{fontSize: 50}}/>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis doloribus error consequuntur cumque perspiciatis laboriosam odio totam perferendis architecto in. Officia autem obcaecati inventore quia vitae dolorem ratione pariatur laborum?</p>
                </div>
                <div>
                    <Apple sx={{fontSize: 50}}/>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis doloribus error consequuntur cumque perspiciatis laboriosam odio totam perferendis architecto in. Officia autem obcaecati inventore quia vitae dolorem ratione pariatur laborum?</p>
                </div>
            </div>
        </div>
    )
}