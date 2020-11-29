import React from "react";

import "./Card.css";

export default function Card() {
  const skils = [
    { id: 1, name: "Comunicação", value: 48 },
    { id: 2, name: "Aprendizagem", value: 70 },
    { id: 3, name: "Prestativo", value: 80 },
    { id: 4, name: "Desafios", value: 86 },
    { id: 5, name: "Liderança", value: 62 },
    { id: 6, name: "Extrovertido", value: 20 },
    { id: 7, name: "Prazos", value: 74 },
    { id: 8, name: "Inglês", value: 50 },
  ];

  return (
    <div className="card" name="aboutme">
      <div className="photo">
        <img
          src="https://avatars1.githubusercontent.com/u/59588123?s=400&u=7d48db9f02a42e6766aaaaad8af4d233021c1a79&v=4"
          alt="Minha foto"
        />
        <h1 className="name">WESLEY PRAÇA</h1>
      </div>
      <div className="skils">
        {skils.map((skill) => (
          <div key={skill.id} className="skill">
            <label>{skill.name}</label>
            <div className="progress">
                <div className="progress--bar" style={{width: `${skill.value}%`}}>
                  <p>{skill.value}%</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
