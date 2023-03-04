import React from "react";
import Card from "./Card";

const posts = [
  {
    title: "Professional Mobile Painting And Sculpting",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/blog-1.0d0fee253eac7f64c14e.png",
    content: "Basic fundamentals of Interior & graphic design.",
    price: " $29.8",
    tag: "Education",
  },
  {
    title: "Professional Ceramic Moulding For Beginners",
    icon: "healthicons:i-training-class-outline",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/blog-2.d35b741fbd893c467fd7.png",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
    price: " $29.8",
    tag: "Education",
  },
  {
    title: "Professional Ceramic Moulding For Beginners",
    icon: "healthicons:i-training-class-outline",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/blog-3.1e9bd9c2365fcb8058fa.png",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
    price: " $29.8",
    tag: "Education",
  },
];

function CardIndex() {
  return (
    <div className="flex flex-wrap justify-center sm:w-full">
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
