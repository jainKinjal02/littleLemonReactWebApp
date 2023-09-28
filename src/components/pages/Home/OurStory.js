import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Bengaluru</h2>
        <p>
        The service was impeccable, and the food was exquisite. The flavors were perfectly balanced, and the presentation was beautiful. I particularly loved the attention to detail in every dish. It's evident that the chef takes great pride in their work. I will definitely be returning for another memorable meal.
        The ambiance at this restaurant is fantastic. It's a perfect place for a romantic dinner or a celebration. The lighting and decor create a cozy and inviting atmosphere. However, while the ambiance is top-notch, the food was good but not exceptional. I'd love to see the culinary offerings match the ambiance in the future.
        This restaurant offers incredible value for the quality of food and service you receive. The portion sizes are generous, and the prices are reasonable. It's the perfect place for a satisfying meal that won't break the bank.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
