import Testimony from "./Testimony";
import Customer1 from '../icons_assets/customer1.jpg';
import Customer2 from '../icons_assets/customer3.jpeg';
import Customer3 from '../icons_assets/customer2.jpg';
import './Testimonial.css';

function Testimonial() {
    let testimonies = [
        {
            id:1,
            name:"James",
            rating: 5,
            image:Customer1,
            review: "Excellent service and a lovely atmosphere"
        },
        {
            id: 2,
            name:"Carol",
            rating: 4,
            image: Customer2,
            review: "Greek salad is the best I have had"
        },
        {
            id:3,
            name:"Love",
            rating: 4,
            image: Customer3,
            review:"The service was the great! Try the Lemon Desert. It is out of this world!"
        }
    ]
    return (
        <section className="testimonial-section">
            <h2>Testimonials</h2>
            <div className="testimonial-group">
                {testimonies.map(testimony => {
                    return <Testimony key={testimony.id} name={testimony.name} review={testimony.review} image={testimony.image} rating={testimony.rating} />
                })}
            </div>
        </section>
    )
}

export default Testimonial;