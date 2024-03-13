import { useEffect, useRef, useState } from "react"
import MoreWorK from "./MoreWork"
import styles from "./MyWork.module.css"

export default function MyWork() {
    const [showMore,setShowMore] = useState(false);

    const ref = useRef();

    useEffect(() => {
        if(showMore){
            ref.current.scrollIntoView({behavior:"smooth", block:"center",inline:"nearest"});
        }
    },[showMore]);

    return(
        <div className={styles.body} id="portfolio">
            <h1>My Work</h1>
            <div className={styles.workList}>
                <div className={styles.work}>
                    <img src="src\assets\projects\rhythmwalker\5.jpg"/>
                    <div className={styles.layer}>
                        <h3>RhythmWalker</h3>
                        <p>An AR mobile exergame, where you walk to the beat of the music.</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <img src="src\assets\projects\kemukupu\display.png"/>
                    <div className={styles.layer}>
                        <h3>Kēmu Kupu</h3>
                        <p>A te reo Māori spelling game.</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <img src="src\assets\projects\hack-a-thon\display.png"/>
                    <div className={styles.layer}>
                        <h3>Hackathon Web App</h3>
                        <p>A web app for people to either host hackathon events, or participate in them.</p>
                    </div>
                </div>
            </div>
            <div ref={ref} style={{display: showMore ? "block" : "none", marginTop: "50px"}}>
                <MoreWorK/>
            </div>
            <button onClick={()=>setShowMore(!showMore)} className={styles.btn}>{showMore ? "Close" : "See more"}</button>
        </div>
    )
}