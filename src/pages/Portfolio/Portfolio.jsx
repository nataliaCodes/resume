import React, { useState } from 'react';
import Slide from '../../components/Slide/Slide';

export default function Portfolio() {
  const slides = [
    {
      title: "Machu Picchu",
      description: "Adventure is never far away",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Chamonix",
      description: "Let your dreams come true",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Mimisa Rocks",
      description: "A piece of heaven",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Four",
      description: "A piece of heaven",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Five",
      description: "A piece of heaven",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];

  const [current, setCurrent] = useState(2);

  return (
    <div className="page-content">
      <div className="slides flex-row">
        <button onClick={() => current > 0 && setCurrent(current - 1)}>‹</button>

        {[...slides].map((slide, i) => {
          return <Slide slide={slide} active={current === i ? true : null} key={i} />;
        })}

        <button onClick={() => (current < slides.length - 1) && setCurrent(current + 1)}>›</button>
      </div>
    </div>
  );
}