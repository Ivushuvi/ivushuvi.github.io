import MoreWorK from "./MoreWork"
import styles from "./MyWork.module.css"

export default function MyWork() {
    return(
        <div className={styles.body}>
            <h1>My Work</h1>
            <div className={styles.workList}>
                <div className={styles.work}>
                    <img src="https://placekitten.com/500/800"/>
                    <div className={styles.layer}>
                        <h3>Social Media App</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <img src="https://placekitten.com/500/800"/>
                    <div className={styles.layer}>
                        <h3>Music App</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <img src="https://placekitten.com/500/800"/>
                    <div className={styles.layer}>
                        <h3>Online Shopping App</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <a href="#" className={styles.btn}>See more</a>
            <MoreWorK/>
        </div>
    )
}