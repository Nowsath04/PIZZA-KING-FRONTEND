import React from "react";
import "./home.css"
import pizza from "./assets/backgroundcut_edit (5).png"
function Home() {
  return (
    <>
      <section className="home" id="home">

<div className="content">
    <h3>Fastest Pizza Delivery
    </h3>
    <p>Visit Pizza King for a tasty pizza delivery or <br/>
    takeaway near me. Order online today for a 
    <br/>piping hot pizza delivered directly to your door.</p>
    <a href="/login" className="btn">Order Now</a>
</div>

<div className="image">
    <img src={pizza}/>
</div>
</section> 

  </>

  );
}

export default Home;
