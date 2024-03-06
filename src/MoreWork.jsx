import { useState } from "react";
import ImageSlider from "./ImageSlider"
import styles from "./MoreWork.module.css"

export default function MoreWorK(){
    const images = ["https://placekitten.com/500/800","https://placekitten.com/500/800","https://placekitten.com/500/800"];

    const projects = [
        {name:"RhythmWalker",
        url:["/src/assets/projects/rhythmwalker/1.jpg","/src/assets/projects/rhythmwalker/2.jpg","/src/assets/projects/rhythmwalker/3.jpg","/src/assets/projects/rhythmwalker/4.jpg","/src/assets/projects/rhythmwalker/5.jpg","/src/assets/projects/rhythmwalker/6.jpg","/src/assets/projects/rhythmwalker/7.jpg","/src/assets/projects/rhythmwalker/8.jpg","/src/assets/projects/rhythmwalker/9.jpg"],
        description:"Test"},
        {name:"Kēmu Kupu",
        url:["/src/assets/projects/kemukupu/1.png","/src/assets/projects/kemukupu/2.png","/src/assets/projects/kemukupu/3.png","/src/assets/projects/kemukupu/4.png","/src/assets/projects/kemukupu/5.png","/src/assets/projects/kemukupu/6.png","/src/assets/projects/kemukupu/7.png"],
        description:"Test"},
        {name:"Hackathon",
        url:["/src/assets/projects/hack-a-thon/1.png","/src/assets/projects/hack-a-thon/2.png","/src/assets/projects/hack-a-thon/3.png","/src/assets/projects/hack-a-thon/4.png","/src/assets/projects/hack-a-thon/5.png","/src/assets/projects/hack-a-thon/6.png","/src/assets/projects/hack-a-thon/7.png","/src/assets/projects/hack-a-thon/8.png"],
        description:"Test"},
        {name:"YS Tech",
        url:["/src/assets/projects/ystech/1.jpg","/src/assets/projects/ystech/2.jpg","/src/assets/projects/ystech/3.jpg"],
        description:"Test"},
    ];

    const [projectNo, setProjectNo] = useState(0);

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                {projects.map((item,index) => <button key={index} onClick={()=>setProjectNo(index)}>{item.name}</button>)}
            </div>
            <div className={styles.right}>
                <div style={{height:"50%"}}>
                    <ImageSlider images={projects[projectNo].url}/>
                </div>
                <p style={{height:"50%"}}>
                    Description
                </p>
            </div>
        </div>
    )
}