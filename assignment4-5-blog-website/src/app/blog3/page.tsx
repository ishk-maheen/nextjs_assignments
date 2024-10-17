import Image from "next/image"
import img3 from "../data/img3.jpg"
export default function Blog3() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img3}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">The Benefits of Daily Exercise for a Healthy Heart</h2>
                <h3>Introduction</h3>
                <p>Exercise plays a vital role in maintaining heart health. Regular physical activity can strengthen the heart, improve circulation, and lower the risk of cardiovascular disease.</p>
                <h3>How Exercise Improves Heart Health</h3>
                <p className="keypoints">
                    Daily exercise helps in: <br />
                   &nbsp; &nbsp; &ndash; Lowering blood pressure <br />
                   &nbsp; &nbsp; &ndash; Reducing bad cholesterol levels <br />
                   &nbsp; &nbsp; &ndash; Increasing oxygen flow to the heart <br />
                </p>
                <h3>Exercise Tips for Beginners</h3>
                <p>Start with light activities like brisk walking, jogging, or cycling for 30 minutes a day.</p>
                <h3>Conclusion</h3>
                <p className="footertop">Consistent exercise not only improves heart health but also enhances mental clarity and energy levels.</p>
            </div>
        </div>
    )
}