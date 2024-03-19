import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";
import {Circle, Forward } from "@mui/icons-material";

export default function ImageSlider({images}){

    const iconSx = {stroke:"white",fill:"black",fontSize:"40px"};
    
    const [imgInd,setImgInd] = useState(0);

    const leftImage = () => {
        if(imgInd == 0) return setImgInd(images.length-1);
        return setImgInd(imgInd-1);

    }

    const rightImage = () => {
        if(imgInd == images.length-1) return setImgInd(0);
        return setImgInd(imgInd+1);
    }

    useEffect(()=>{
        setImgInd(0);
    },[images]);
    
    return(
        <div style={{height:"100%",width:"100%",position:"relative",overflow:"hidden"}}>
            <div style={{height:"100%",width:"100%",display: "flex", translate: `-${imgInd*100}%`, transition: "translate 0.5s"}}>
                {images.map((item,index) => <img style={{height:"100%",minWidth:"100%",maxWidth:"100%",objectFit:"contain",backgroundColor:"#626d71"}} src={item} key={index}/>)}
            </div>
            <button className={`${styles.imgButton} ${styles.left}`} style={{left:0}} onClick={()=>leftImage()}><Forward sx={{...iconSx,scale:"-1 1"}}/></button>
            <button className={`${styles.imgButton} ${styles.right}`} style={{right:0}} onClick={()=>rightImage()}><Forward sx={iconSx}/></button>
            <div className={styles.dotNavigate}>
                {images.map((item,index) =>
                    <button className={styles.dotButton} key={index} onClick={()=>setImgInd(index)}>
                        {index==imgInd ? <Circle sx={{color:"grey",stroke:"black"}}/> : <Circle sx={{color:"lightgrey",stroke:"black"}}/>}
                    </button>)}
            </div>
        </div>
    )
}