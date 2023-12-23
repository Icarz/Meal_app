import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
    const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

    if (loading) {
        return (
            <section className="section">
                <h4>loading...</h4>
            </section>
        );
    }
    if (meals.length < 1) {
        return (
            <section className="section">
                <h4>No meal matched your search term,please try again</h4>
            </section>
        );
    }

    return (
        <section className="section-center">
            {meals.map((singleMeal) => {
                const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
                return (
                    <article key={idMeal} className="single-meal">
                        <img
                            src={image}
                            className="img"
                            onClick={() => selectMeal(idMeal)}
                            alt="mealImage"
                            style={{ width: "351px" }}
                        />
                        <footer>
                            <h5>{title}</h5>
                            <button className="like-btn" onClick={() => addToFavorites(idMeal)}>
                                <BsHandThumbsUp />
                            </button>
                        </footer>
                    </article>
                );
            })}
        </section>
    );
};

export default Meals;
