import './Highlights.css';
import Special from './Special';
import Greek_Salad from '../icons_assets/greek_salad.jpg';
import Bruchetta from '../icons_assets/bruchetta.webp';
import Lemon_Dessert from '../icons_assets/lemon_dessert.jpg';
function Highlights() {
    let specials = [
        {
            name:"Greek Salad",
            price:"$14.99",
            id:1,
            description:"A salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives.",
            image:Greek_Salad
        },
        {
            id:2,
            name:"Bruchetta",
            price:"$12.99",
            description:"Bruschetta is an Italian antipasto consisting of grilled bread often topped with olive oil and salt.",
            image:Bruchetta
        },
        {
            id: 3,
            name:"Lemon Dessert",
            description:"The tender lemon cake and fluffy pink frosting make this cake as tasty as it is pretty.",
            price:"$5.99",
            image:Lemon_Dessert
        }
    ]

    return (
        <section className="section-highlights">
            <div className="highlights-header">
                <div className="highlights-h2">
                    <h2>Specials</h2>
                </div>
                <div className="highlights-btn">
                    <button>Online Menu</button>
                </div>
            </div>
            <div className="highlights-specials">
                {specials.map(special => {
                    return <Special key={special.id} description={special.description} name={special.name} price={special.price} image={special.image}/>
                })}
            </div>
        </section>
    )
}

export default Highlights;