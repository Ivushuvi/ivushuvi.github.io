import ImageSlider from "./ImageSlider"
import styles from "./MoreWork.module.css"

export default function MoreWorK(){
    const images = ["https://placekitten.com/500/800","https://placekitten.com/500/800","https://placekitten.com/500/800"];

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <button>Project 1</button>
                <button>Project 2</button>
                <button>Project 3</button>
                <button>Project 4</button>
                <button>Project 5</button>
                <button>Project 6</button>
            </div>
            <div className={styles.right}>
                <div style={{height:"50%"}}>
                    <ImageSlider images={images}/>
                </div>
                <p style={{height:"50%"}}>
                    Description
                </p>
            </div>
        </div>
    )
}