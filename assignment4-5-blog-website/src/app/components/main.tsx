import Image from "next/image";
import Link from "next/link";
import image1 from "../data/img1.jpg"
import image2 from "../data/img2.jpg"
import image3 from "../data/img3.jpg"
import image4 from "../data/img4.jpg"
import image5 from "../data/img5.jpg"
import image6 from "../data/img6.jpg"
export default function Main() {
    return (
        <div className="main">
            <div>
                <h1 className="heading">Path to a Healthier You: Insights on Mind, Body, and Wellness</h1>
                <p className="para">Discover the importance of mental health in todays fast-paced world, learn how to boost your immune system with superfoods, and explore the benefits of daily exercise. Dive deeper into topics like sleep hygiene, hydration, and yoga for beginners, guiding you toward optimal physical and mental well-being.</p>
            </div>
        <div id="blogSection" className="parentContainer">
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image1}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">The Importance of Mental Health in Today's Busy World</h2>
                <p className="description">The growing significance of mental health, ways to manage stress, and tips on maintaining emotional well-being amidst daily challenges.</p>
                <div>
                    <Link href="/blog1">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image2}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Top 10 Superfoods for Boosting Your Immune System</h2>
                <p className="description">Nutrient-rich superfoods like berries, green vegetables, and nuts that can help strengthen your immune system and improve overall health.</p>
                <div>
                <Link href="/blog2">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image3}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">The Benefits of Daily Exercise for a Healthy Heart</h2>
                <p className="description">Regular exercise can improve heart health, reduce the risk of cardiovascular diseases, and enhance overall fitness. Lets prioritize movement for a healthier future!</p>
                <div>
                <Link href="/blog3">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image4}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Understanding Sleep: Quality Rest is Crucial for Health</h2>
                <p className="description">Delve into the science behind sleep, the importance of sleep hygiene, and how quality rest impacts physical and mental health.</p>
                <div>
                <Link href="/blog4">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image5}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Staying Hydrated: The Key to Optimal Health</h2>
                <p className="description">The benefits of staying hydrated, how water supports vital bodily functions, and tips for ensuring proper hydration throughout the day.</p>
                <div>
                <Link href="/blog5">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image6}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Yoga for Beginners: A Path to Physical and Mental Wellness</h2>
                <p className="description"> The basics of yoga, its benefits for the mind and body, and simple poses can try at home for relaxation and flexibility. Give yourself the gift of inner peace and physical vitality!</p>
                <div>
                <Link href="/blog6">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}