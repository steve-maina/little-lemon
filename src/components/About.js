import Owners1 from "../icons_assets/Mario_and_Adrian_A.jpg";
import Owners2 from "../icons_assets/Mario_and_Adrian_b.jpg";
import "./About.css";
function About() {
    return (
        <section className="about-section">
            <div className="about-description">
                <h2>Little Lemon</h2>
                <p id="first-p">Chicago</p>
                <p>
                Little Lemon is a charming, small restaurant that brings the vibrant flavors of the Mediterranean to the heart of the neighborhood. With its warm, inviting decor and cozy ambiance, it’s the perfect spot for a casual meal or a special occasion. The menu features a delightful array of fresh, homemade dishes, including zesty salads, handmade pastas, and succulent grilled meats, all crafted with high-quality ingredients and a touch of love.
                </p>
                <p>
                Guests can also indulge in a selection of tempting desserts that change seasonally, ensuring there's always something new to try. The friendly, attentive staff are dedicated to providing a memorable dining experience, making every visit feel like a special occasion. Whether you’re stopping by for a quick lunch or enjoying a leisurely dinner with friends and family, Little Lemon is a hidden gem that celebrates the joy of good food and good company.
                </p>
                <p>
                Guests can also indulge in a selection of tempting desserts that change with the seasons, from rich baklava drizzled with honey to light, refreshing citrus tarts. Each dessert is made in-house, guaranteeing freshness and a burst of flavor that perfectly rounds off any meal. The friendly, attentive staff are dedicated to providing a memorable dining experience, making every visit feel like a special occasion. They are always happy to recommend pairings from the carefully curated wine list, enhancing your culinary journey through the Mediterranean.
                </p>
                <p>
                Little Lemon also hosts special events and themed nights, allowing guests to immerse themselves in the culture and traditions of the Mediterranean. Whether it's a wine tasting evening or a cooking class, there’s always something happening that fosters a sense of community and celebration.
                </p>
            </div>
            <div className="about-img">
                <div>
                <img src={Owners1} height="400" width="400" className="hero-img"/>
                </div>
                <div>
                <img src={Owners2} height="400" width="400" className="hero-img"/>
                </div>
            </div>
        </section>
    )
}

export default About;