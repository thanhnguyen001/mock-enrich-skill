import News from "components/News/News";
import MainLayout from "layout/Main/MainLayout";
import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";

const HomePage: React.FC = (props) => {
  const list = [
    {
      title: "VSCode Custom Colors Per A Project",
    },
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam perferendis cumque aperiam voluptate excepturi, id non facere soluta dolorum tempora voluptatem! Voluptas molestiae odit consequatur dicta impedit possimus, quasi pariatur!",
    },
    {
      title: "Using a Netlify Edge Worker to cut down on header bloat by removing HTML-only headers from static assets",
    },
    {
      title: "The Complete Full-Stack Guide to Getting Started with Zero-Knowledge Proofs using Circom and ZK-Snarks - Part 1",
    },
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam perferendis cumque aperiam voluptate excepturi, id non facere soluta dolorum tempora voluptatem! Voluptas molestiae odit consequatur dicta impedit possimus, quasi pariatur!",
    },
  ];

  const [newsList, setNewsList] = useState(list);

  useEffect(() => {
    // get list news
  }, [newsList]);

  return (
    <div className="home">
      <div className="home-heading"></div>
      <div className="home-body">
        <div className="home-news-list">
          {newsList.map((item, index) => (
            <News key={index} title={item.title} tabIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
