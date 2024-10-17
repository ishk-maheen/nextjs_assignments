import Image from "next/image"
import img6 from "../data/img6.jpg"
export default function Blog6(){
    return(
       <div className="blogMainContainer">
            <div className="blogPic">
            <Image
            src={img6}
            alt="image"
            />
            </div>
            <div className="blogContantContainer">
            <h2 className="blogMainHeading">Yoga for Beginners: A Path to Physical and Mental Wellness</h2>
            <h3>Introduction</h3>
            <p>Yoga is a holistic practice that connects the mind and body through physical poses, breathing exercises, and meditation. It improves flexibility, strength, and mental clarity.</p>
            <h3>Benefits of Yoga</h3>
            <p>
            &nbsp; &nbsp; &ndash; <b>Physical:</b> Increases flexibility, strengthens muscles, and improves posture. <br />
            &nbsp; &nbsp; &ndash; <b>Mental:</b> Reduces stress, enhances focus, and promotes relaxation. <br />
            </p>
            <h3>Beginner-Friendly Yoga Poses</h3>
            <p>
            &nbsp; &nbsp; 1. <b>Downward Dog </b>&ndash; A pose that stretches the entire body. <br /> 
            &nbsp; &nbsp; 2. <b>Child Pose </b>&ndash; Restorative pose for relaxation. <br />
            &nbsp; &nbsp; 3. <b>Mountain Pose </b>&ndash; A simple standing pose to improve posture. <br />
            </p>
            <h3>Conclusion</h3>
            <p className="footertop">Whether you are looking to improve physical health or find peace of mind, yoga offers a pathway to overall wellness.</p>
            </div>
       </div>
    )
}