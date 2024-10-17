import Image from "next/image"
import img5 from "../data/img5.jpg"
export default function Blog5() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img5}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">Staying Hydrated: The Key to Optimal Health</h2>
                <h3>Introduction</h3>
                <p>Water is essential for life, making up 60% of our body. Staying hydrated helps regulate body temperature, maintain skin health, and aid digestion.</p>
                <h3>Why Hydration is Important</h3>
                <p>Water supports every cell in the body, keeps joints lubricated, and flushes out toxins.</p>
                <h3>Tips for Staying Hydrated</h3>
                <p>
                &nbsp; &nbsp; &ndash; Drink at least 8 glasses of water a day. <br />
                &nbsp; &nbsp; &ndash; Add fruits like lemon or mint for flavor. <br />
                &nbsp; &nbsp; &ndash; Keep a water bottle with you throughout the day. <br />
                </p>
                <h3>Conclusion</h3>
                <p className="footertop">Proper hydration is the foundation of good health. Make water intake a priority to stay energized and maintain bodily functions.</p>
            </div>
        </div>
    )
}