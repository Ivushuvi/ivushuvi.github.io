import { Apple, Code, Crop } from "@mui/icons-material";
import styles from "./Services.module.css"
import { useRef, useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Services() {

    const [tabval,setTabval] = useState(0);

    const handleChange = (newValue) => {
        setTabval(newValue);
    }

    const parallax = useParallax({
        onProgressChange: (progress) => {
            if(parallax.ref.current){
                if(progress < 0.7){
                    parallax.ref.current.style.setProperty("translate",`0 -${400*((0.7-progress)/0.7)}%`);
                    parallax2.current.style.setProperty("translate",`0 -${300*((0.7-progress)/0.7)}%`);
                    parallax3.current.style.setProperty("translate",`0 -${200*((0.7-progress)/0.7)}%`);
                }else{
                    parallax.ref.current.style.setProperty("translate",`0 0`);
                }
            }
        }
    });

    const parallax2 = useRef();
    const parallax3 = useRef();

    return(
        <div>
            <div className={styles.content}>
                <h1>My services</h1>
                <div className={styles.tabTitles}>
                    <div ref={parallax.ref} style={{translate:"0 -400%"}}>
                        <div style={tabval==0 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(0)}>
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div ref={parallax2} style={{translate:"0 -300%"}}>
                        <div style={tabval==1 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(1)}>
                            <h2>Experience</h2>
                        </div>
                    </div>
                    <div ref={parallax3} style={{translate:"0 -200%"}}>
                        <div style={tabval==2 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(2)}>
                            <h2>Education</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.tabContents}>
                    <ul className={`${styles.tab} ${tabval==0 && styles.activeTab}`}>
                        <li><h3>TitleA</h3>Description</li>
                        <li><h3>TitleB</h3>Description</li>
                        <li><h3>TitleC</h3>Description</li>
                    </ul>
                    <ul className={`${styles.tab} ${tabval==1 && styles.activeTab}`}>
                        <li><h3>TitleD</h3>Description</li>
                        <li><h3>TitleE</h3>Description</li>
                        <li><h3>TitleF</h3>Description</li>
                    </ul>
                    <ul className={`${styles.tab} ${tabval==2 && styles.activeTab}`}>
                        <li><h3>TitleG</h3>Description</li>
                        <li><h3>TitleH</h3>Description</li>
                        <li><h3>TitleI</h3>Description</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}