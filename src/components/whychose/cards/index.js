import React from "react";
import Card from "./Card";

const posts = [
  {
    title: "React Tailwind Card with Grid 1",
    img: "/assets/images/icon/web.svg",
    hoverImg: "/assets/images/all-img/brands/web-white.svg",
    content:
      "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    title: "React Tailwind Card with Grid 2",
    img: "/assets/images/icon/web.svg",
    hoverImg: "/assets/images/all-img/brands/web-white.svg",
    content:
      "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    title: "React Tailwind Card with Grid 3",
    img: "/assets/images/icon/web.svg",
    hoverImg: "/assets/images/all-img/brands/web-white.svg",
    content:
      "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
  },
];

function Cards() {
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3">
      {posts.map((post) => {
        return (
          <Card img={post?.img} title={post?.title} content={post?.content} />
        );
      })}
    </div>
  );
}

export default Cards;
