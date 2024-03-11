import { useRef, useState } from "react";
import styles from "./AboutMe.module.css"
import { useParallax } from "react-scroll-parallax";

export default function AboutMe() {
    const [isOrigin, setIsOrigin] = useState(true);

    const target = useRef();
    
    const leftRef = useRef();
    const rightRef = useRef();

    const parallax = useParallax({
        onProgressChange: (progress) => {
            if(parallax.ref.current){
                if(progress < 0.5){
                    if (progress <= 0.3){
                        parallax.ref.current.style.setProperty("--progress",progress/0.3);
                        parallax.ref.current.style.setProperty("scale",(progress/3.0)+0.9);
                    }
                    if(!isOrigin){
                        leftRef.current.style.setProperty("transform",`translateX(0)`);
                        rightRef.current.style.setProperty("transform",`translateX(0)`);
                        setIsOrigin(true);
                    }
                }else{
                    parallax.ref.current.style.setProperty("--progress",(1-progress)/0.5);
                    leftRef.current.style.setProperty("transform",`translateX(${((progress-0.5)/0.5)*-50}vw)`);
                    rightRef.current.style.setProperty("transform",`translateX(${((progress-0.5)/0.5)*50}vw)`);

                    if(isOrigin){
                        setIsOrigin(false);
                    }
                }
            }
        },
        targetElement: target.current,
    });

    return(
        <div className={styles.container}>
            <div ref={parallax.ref} className={styles.content}>
                <img ref={leftRef} style={{flexBasis:"30%"}} src="http://placekitten.com/200/200"/>
                <div ref={rightRef} style={{flexBasis:"65%",border: "5px solid black"}}>
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
                </div>
            </div>
            <div className={styles.filler} ref={target}/>
        </div>
    )
}