import { useState } from "react";
import ImageSlider from "./ImageSlider"
import styles from "./MoreWork.module.css"

export default function MoreWorK(){
    const images = ["https://placekitten.com/500/800","https://placekitten.com/500/800","https://placekitten.com/500/800"];

    const projects = [
        {name:"RhythmWalker",
        url:["/assets/projects/rhythmwalker/1.jpg","/assets/projects/rhythmwalker/2.jpg","/assets/projects/rhythmwalker/3.jpg","/assets/projects/rhythmwalker/4.jpg","/assets/projects/rhythmwalker/5.jpg","/assets/projects/rhythmwalker/6.jpg","/assets/projects/rhythmwalker/7.jpg","/assets/projects/rhythmwalker/8.jpg","/assets/projects/rhythmwalker/9.jpg"],
        description:"Developed using Unity3D game engine.\n\nAn AR mobile exercise game where the aim is to synchronize one's"
        +" footsteps with the beat of the music. After each walking session, the game goes into AR where the user can play fetch"
        +" with a virtual dog, or feed it different qualities of food depending on the score achieved.\n\nThe game takes inspiration"
        +" from one of the most succesful exergames, Pokemon GO, where the usage of augmented reality allows for more immersive gameplay"
        +" and attempts to achieve greater similar longevity in usage. Additionally, a pet is introduced such that the user feels attachment"
        +" and motivates them to continue playing."
        +"\n\nUser studies were conducted under two conditions:"
        +"\n- walking with music\n- walking with music AND gameplay"
        +"\nIt was found that that enjoyment, effort, and step count were all significantly increased when gameplay was introduced."},
        {name:"Kēmu Kupu",
        url:["/assets/projects/kemukupu/1.png","/assets/projects/kemukupu/2.png","/assets/projects/kemukupu/3.png","/assets/projects/kemukupu/4.png","/assets/projects/kemukupu/5.png","/assets/projects/kemukupu/6.png","/assets/projects/kemukupu/7.png"],
        description:"Developed using JavaFX and SceneBuilder."
        +"\n\nA spelling app designed for learning te reo Māori. It allows young adults to improve their knowledge of the Māori language"
        +" by quizzing on Māori word spellings as well as showing their respective English meanings."
        +"\n\nThe \"New Game\" module will test you on 5 different Māori words from a topic of your choice. During the quiz, a text-to-speech"
        +" tool is used to read out the Māori word. You can replay this prompt as many times within the time limt. There is a total of three tries"
        +" per word. After each incorrect attempt, hints are given where a random character from the prompted word is displayed in its respective position."
        +" On the third incorrect attempt or the user hits \"Don't Know\", an encouraging message is displayed and the quiz moves onto the next word."
        +" After all words have been quizzed, the result screen displays a list of the words and also shows the user's score, which is determined by how fast they answered and the amount of errors"
        +" they produced. This score is also responsible for the achievements and statistics feature."
        +"\n\nThe \"Practice\" module operates similarly, however it is endless and does not contribute to the scoring system."},
        {name:"Hackathon",
        url:["/assets/projects/hack-a-thon/1.png","/assets/projects/hack-a-thon/2.png","/assets/projects/hack-a-thon/3.png","/assets/projects/hack-a-thon/4.png","/assets/projects/hack-a-thon/5.png","/assets/projects/hack-a-thon/6.png","/assets/projects/hack-a-thon/7.png","/assets/projects/hack-a-thon/8.png"],
        description:"Developed using React JS, with Google Firebase as the backend. Routing is achieved on client-side using React Router."
        +"\n\nA non-deployed web app where users can register as hosts, such that they can host hackathon events, or sign up as a participant who can register for these hosted events, as well"
        +" as submitting their hackathon projects."
        +"\n\nOnboarding and sign-in authentication is achieved through Firebase's authentication system. As a host, you are able to create new events by providing a relevant tag and the neccesary details, such as description, start and end dates, etc."
        +" You can also design the registration and submission forms which participants must fill, which can include questions and required attachments. You can also view a list of your hosted events, where clicking on one will bring"
        +" you to the event edit page. Here you can view all the details that is currently listed on the event, as well as having the ability to edit any detail such as title, prize pool etc. You can also review any registrations and submissions, which"
        +" will show you a list of participants, along with their respective responses to the registration form they filled out, as well as any attached files that can be downloaded. The registration list allows you to approve participants to join, while the submission list also allows you to assign a winner for the event."
        +" Registration and submission forms can also be reviewed and edited."
        +"\n\nParticipants can explore through a list of events in our Firebase database, using filters, such as \"Ongoing\", and tags to narrow their searches. Clicking on an event shows a page with all the details regarding the event."
        +" Here, the user can register for the event, and when approved by the host, the user can instead submit their project. Registration and submission forms that require an attachment contain an upload button where the user can search for a file locally"
        +" to submit. This file gets uploaded into our Firebase database, which allows hosts to download from."},
        {name:"YS Tech",
        url:["/assets/projects/ystech/1.jpg","/assets/projects/ystech/2.jpg","/assets/projects/ystech/3.jpg"],
        description:"Developed using Java in Android Studio, with Google Firebase as the backend."
        +"\n\nThis android mobile app allows users to browse and search through listings of PC peripherals, where they can view the details, specifications, as well as external links"
        +" that directs the user to a store that sells the product. The listings are stored on Google Firebase, and each time a product is clicked on, the view count is updated in the database."
        +" Thus, we can display \"Top Picks\", which shows the products with the highest view counts."
        +"\n\nThe app uses a RecyclerView in order to maximise performance and efficiency, where items scrolled off screen have their views reused by items scrolling on screen."},
    ];

    const [projectNo, setProjectNo] = useState(0);

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                {projects.map((item,index) => <button style={{backgroundColor: projectNo==index ? "#444444" : null}} className={styles.btn} key={index} onClick={()=>setProjectNo(index)}>{item.name}</button>)}
            </div>
            <div className={styles.right}>
                <div style={{height:"50%"}}>
                    <ImageSlider images={projects[projectNo].url}/>
                </div>
                <div style={{height:"50%",paddingLeft: "20px",overflowY:"scroll"}}>
                    <h3>{projects[projectNo].name}</h3>
                    <p>
                        {projects[projectNo].description}
                    </p>
                </div>
            </div>
        </div>
    )
}