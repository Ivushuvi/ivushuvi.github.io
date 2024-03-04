import { Apple, Code, Crop } from "@mui/icons-material";
import styles from "./Services.module.css"
import { useState } from "react";

export default function Services() {

    const [tabval,setTabval] = useState(0);

    const handleChange = (newValue) => {
        setTabval(newValue);
    }

    return(
        <div>
            <div className={styles.content}>
                <h1>My services</h1>
                <div className={styles.tabTitles}>
                    <div style={tabval==0 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(0)}>
                        <h2>Skills</h2>
                    </div>
                    <div style={tabval==1 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(1)}>
                        <h2>Experience</h2>
                    </div>
                    <div style={tabval==2 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(2)}>
                        <h2>Education</h2>
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