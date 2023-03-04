import React from "react";
import Card from "./Card";

const posts = [
  {
    title: "Professional Mobile Painting And Sculpting",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    content: "Basic fundamentals of Interior & graphic design.",
    price: " $29.8",
    tag: "Education",
  },
  {
    title: "Professional Ceramic Moulding For Beginners",
    icon: "healthicons:i-training-class-outline",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
    price: " $29.8",
    tag: "Education",
  },
  {
    title: "Professional Ceramic Moulding For Beginners",
    icon: "healthicons:i-training-class-outline",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
    price: " $29.8",
    tag: "Education",
  },
  {
    title: "Professional Ceramic Moulding For Beginners",
    icon: "healthicons:i-training-class-outline",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
    price: " $29.8",
    tag: "Education",
  },
];

function CardIndex() {
  return (
    <div className="flex flex-wrap justify-center gap-20">
      {posts.map((post) => {
        return (
          <Card
            price={post.price}
            image={post.image}
            icon={post.icon}
            title={post.title}
            content={post.content}
            tag={post.tag}
          />
        );
      })}
    </div>
  );
}

export default CardIndex;
