import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { ArrowBack, ArrowForward, Forward } from "@mui/icons-material";

export default function ImageSlider({images}){
    
    const [imgInd,setImgInd] = useState(0);

    const leftImage = () => {
        if(imgInd == 0) return setImgInd(images.length-1);
        return setImgInd(imgInd-1);

    }

    const rightImage = () => {
        if(imgInd == images.length-1) return setImgInd(0);
        return setImgInd(imgInd+1);
    }
    
    return(
        <div style={{height:"100%",width:"100%",position:"relative",overflow:"hidden"}}>
            <div style={{height:"100%",width:"100%",display: "flex", translate: `-${imgInd*100}%`, transition: "translate 0.5s"}}>
                {images.map((item,index) => <img style={{height:"100%",minWidth:"100%",maxWidth:"100%",objectFit:"contain",backgroundColor:"white"}} src={item} key={index}/>)}
            </div>
            <button className={styles.imgButton} style={{left:0}} onClick={()=>leftImage()}><Forward sx={{stroke:"white",fill:"black",fontSize:"40px",scale:"-1"}}/></button>
            <button className={styles.imgButton} style={{right:0}} onClick={()=>rightImage()}><Forward sx={{stroke:"white",fill:"black",fontSize:"40px"}}/></button>
        </div>
    )
}