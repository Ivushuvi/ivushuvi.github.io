import { Tabs, Tab, Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import styles from "./AboutMe.module.css"

export default function AboutMe() {
    const [tabval,setTabval] = useState(0);

    const handleChange = (newValue) => {
        setTabval(newValue);
    }

    return(
        <div className={styles.container}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <img style={{flexBasis:"30%"}} src="http://placekitten.com/200/200"/>
                <div style={{flexBasis:"65%",border: "5px solid black"}}>
                    <h3>
                        About me
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum veniam culpa fuga deleniti voluptas, voluptatem voluptatibus assumenda sit impedit dicta ut sapiente obcaecati nam! Quae hic neque error nemo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis autem recusandae natus tempora nihil temporibus illo corporis alias explicabo mollitia ducimus eaque, voluptas neque libero. Aspernatur ipsum esse labore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur ipsum aliquid dignissimos beatae veritatis illum accusantium cumque! Placeat vitae repellendus sed commodi laudantium similique eius quidem quaerat sequi earum?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet soluta voluptatibus nemo tempora temporibus tenetur at distinctio nobis, aspernatur quod perferendis pariatur, officiis cum nam dicta dolorem velit delectus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla praesentium voluptas, culpa iste suscipit quibusdam aliquam magni obcaecati eos fugit labore optio in officiis consectetur sapiente officia id harum! Reprehenderit!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, dolorum voluptate, possimus hic quas modi nulla nostrum amet voluptas, at natus sit molestiae! Eaque dolorum nostrum, consequuntur eligendi vero velit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum in corporis a adipisci pariatur repellendus, hic repellat id! Id ipsam distinctio sapiente nihil ducimus cum quia incidunt veniam quas.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptas mollitia aperiam cum. Ut, possimus dicta aut id soluta iusto officia assumenda ipsum dolorem quae esse ab nulla quisquam nisi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia itaque, neque iure laborum et beatae molestiae corrupti recusandae quod ratione obcaecati totam at velit dolorem perspiciatis adipisci asperiores dolor!
                    </p>
                    <div className={styles.tabTitles}>
                        <p className={`${styles.tabLinks} ${tabval==0 && styles.activeLink}`} onClick={(e) => handleChange(0)}>Skills</p>
                        <p className={`${styles.tabLinks} ${tabval==1 && styles.activeLink}`} onClick={(e) => handleChange(1)}>Experience</p>
                        <p className={`${styles.tabLinks} ${tabval==2 && styles.activeLink}`} onClick={(e) => handleChange(2)}>Education</p>
                    </div>
                    <div className={`${styles.tabContents} ${tabval==0 && styles.activeTab}`}>
                        <ul>
                            <li><span>TitleA</span><br/>Description</li>
                            <li><span>TitleB</span><br/>Description</li>
                            <li><span>TitleC</span><br/>Description</li>
                        </ul>
                    </div>
                    <div className={`${styles.tabContents} ${tabval==1 && styles.activeTab}`}>
                        <ul>
                            <li><span>TitleD</span><br/>Description</li>
                            <li><span>TitleE</span><br/>Description</li>
                            <li><span>TitleF</span><br/>Description</li>
                        </ul>
                    </div>
                    <div className={`${styles.tabContents} ${tabval==2 && styles.activeTab}`}>
                        <ul>
                            <li><span>TitleG</span><br/>Description</li>
                            <li><span>TitleH</span><br/>Description</li>
                            <li><span>TitleI</span><br/>Description</li>
                        </ul>
                    </div>
                    {/* <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab className={styles["tabs"]} label="Item One"/>
                            <Tab label="Item Two"/>
                            <Tab label="Item Three"/>
                        </Tabs>
                    </Box> */}
                    
                </div>
            </div>
        </div>
    )
}