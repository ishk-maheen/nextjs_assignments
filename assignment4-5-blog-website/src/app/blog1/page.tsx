import Image from "next/image"
import img1 from "../data/img1.jpg"
export default function Blog1() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img1}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">The Importance of Mental Health in Today's Busy World</h2>
                <h3>Introduction</h3>
                <p>In todays fast-paced society, mental health is more important than ever. The demands of work, social life, and personal responsibilities often lead to stress, anxiety, and burnout.</p>
                <h3>Understanding Mental Health</h3>
                <p>Mental health affects how we think, feel, and act. Maintaining emotional well-being is crucial for a balanced life.</p>
                <h3>Ways to Manage Stress</h3>
                <p>Incorporate mindfulness practices such as meditation, breathing exercises, or journaling into your daily routine to manage stress effectively.</p>
                <h3>Conclusion</h3>
                <p className="footertop">Prioritizing mental health can improve your quality of life and lead to better relationships, productivity, and overall happiness</p>
            </div>
        </div>
    )
}