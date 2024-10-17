import Image from "next/image"
import img4 from "../data/img4.jpg"
export default function Blog4() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img4}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">Understanding Sleep: Why Quality Rest is Crucial for Health</h2>
                <h3>Introduction</h3>
                <p>Sleep is essential for restoring both the body and mind. Without quality rest, your health can deteriorate, affecting mood, focus, and even immunity.</p>
                <h3>The Science Behind Sleep</h3>
                <p>During sleep, the body repairs itself, processes information, and balances hormones. A lack of sleep can lead to chronic conditions such as heart disease and obesity.</p>
                <h3>Improving Sleep Hygiene</h3>
                <p> 
                &nbsp; &nbsp; &ndash; Stick to a regular sleep schedule. <br />
                &nbsp; &nbsp; &ndash; Avoid screens an hour before bed. <br />
                &nbsp; &nbsp; &ndash; Create a calming bedtime routine. <br />
                </p>
                <h3>Conclusion</h3>
                <p className="footertop">Prioritizing good sleep habits leads to improved mental clarity, mood stability, and physical health.</p>
            </div>
        </div>
    )
}