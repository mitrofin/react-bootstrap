import React from "react";
import s from "./Home.module.scss";

export default function Jumbotron() {
  return (
    <div className="mt-3">
      <div className={s.jumbo}>
        <div className={s.overlay}>
          <h1 className={s.jumboTitle}>React-Bootstrap</h1>
          <p className={s.jumboText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            hic rerum cum iste! Repellat tempore optio temporibus blanditiis
            exercitationem asperiores vel explicabo reiciendis. Aut aliquid,
            pariatur fugit voluptas culpa rerum!Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Explicabo hic rerum cum iste! Repellat
            tempore optio temporibus blanditiis exercitationem asperiores vel
            explicabo reiciendis. Aut aliquid, pariatur fugit voluptas culpa
            rerum!
          </p>
        </div>
      </div>
    </div>
  );
}
