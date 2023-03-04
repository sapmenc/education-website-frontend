import Card from "./Card";
import React from "react";
const posts = [
  {
    title: "Joy of Learning",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    content: "Basic fundamentals of Interior & graphic design.",
    price: " $29.8",
    tag: "Art and Design",
  },
  {
    title: "Think Outside the Box",
    icon: "healthicons:i-training-class-outline",
    image:
      "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
    price: " $29.8",
    tag: "Art and Design",
  },
  // {
  //   title: "Limitless possibilities",
  //   icon: "fluent:handshake-32-regular",
  //   content:
  //     "Say Goodbye to Limiting Education and Hello to Unlimited Learning!",
  // },
];

function CardIndex() {
  console.log("posts", posts);
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
          />
        );
      })}
    </div>
  );
}

export default CardIndex;
