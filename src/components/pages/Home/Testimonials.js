import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `As a vegan, I'm always on the lookout for restaurants that offer diverse plant-based options, and this place exceeded my expectations.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `I love this little gem of a restaurant tucked away in our neighborhood. It has a warm and cozy feel, and the food is consistently good. It's become our go-to spot for casual dinners and special occasions alike.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The fusion cuisine at this restaurant is a delightful surprise. I never thought I'd find such an interesting blend of flavors in one place. Each dish we tried was a harmonious combination of different culinary traditions.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `If you're a wine enthusiast, you'll be in heaven here. They have an extensive wine list with options for every palate. The sommelier was knowledgeable and helped us choose the perfect wine to complement our meal. Cheers to a fantastic wine selection!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
