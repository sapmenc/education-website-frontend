import Card from "./Card";
import React from "react";

const posts = [
  {
    title: "Joy of Learning",
    icon: "codicon:globe",
    content:
      "Experience the joy of learning with our engaging and interactive approach that makes education fun and exciting.",
  },
  {
    title: "Think Outside the Box",
    icon: "healthicons:i-training-class-outline",
    content:
      "Develop a more creative, forward-thinking thought process towards everything around you.",
  },
  {
    title: "Limitless possibilities",
    icon: "fluent:handshake-32-regular",
    content:
      "Say Goodbye to Limiting Education and Hello to Unlimited Learning!",
  },
];

function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-14">
      {posts.map((post) => {
        return (
          <Card icon={post?.icon} title={post?.title} content={post?.content} />
        );
      })}
    </div>
  );
}

export default Cards;
