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
            <div ref={ref} style={{display: showMore ? "block" : "none"}}>
                <MoreWorK/>
            </div>
            <button onClick={()=>setShowMore(!showMore)} className={styles.btn}>{showMore ? "Close" : "See more"}</button>
        </div>
    )
}