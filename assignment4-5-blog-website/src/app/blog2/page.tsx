import Image from "next/image"
import img2 from "../data/img2.jpg"
export default function Blog2() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img2}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">Top 10 Superfoods for Boosting Your Immune System</h2>
                <h3>Introduction</h3>
                <p>A strong immune system is key to staying healthy. Superfoods are packed with essential nutrients that help boost immunity and fight off illness.</p>
                <h3>Top Superfoods to Include</h3>
                <p> 
                    &nbsp; &nbsp; 1. <b> Blueberries</b> &ndash; Rich in antioxidants. <br />
                    &nbsp; &nbsp; 2. <b> Spinach</b> &ndash; High in vitamins A and C. <br />
                    &nbsp; &nbsp; 3. <b> Almonds</b> &ndash; Packed with vitamin E. <br />
                    &nbsp; &nbsp; 4. <b> Avocado</b> &ndash; Full of healthy fats. <br />
                    &nbsp; &nbsp; 5. <b> Turmeric</b> &ndash; Powerful anti-inflammatory properties. <br />
                    &nbsp; &nbsp; 6. <b> Ginger</b> &ndash; Aids in digestion and immunity. <br />
                    &nbsp; &nbsp; 7. <b> Kale</b> &ndash; Nutrient-dense green. <br />
                    &nbsp; &nbsp; 8. <b> Garlic</b> &ndash; Natural immune booster. <br />
                    &nbsp; &nbsp; 9. <b> Yogurt</b> &ndash; Contains probiotics for gut health. <br />
                    &nbsp; &nbsp; 10. <b> Salmon</b> &ndash;  Rich in omega-3 fatty acids. <br /></p>
                <h3>Conclusion</h3>
                <p className="footertop">Incorporating these superfoods into your diet can significantly improve your immune system and overall well-being.</p>
            </div>
        </div>
    )
}