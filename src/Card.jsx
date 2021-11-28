import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/s1.jpg"
const Card=(props) => {
    return(<>
   
                <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                    <img class="card-img-top" src={props.imgsrc} className="card-img-top" alt={props.title} />
                    <div class="card-body">
                        <h5 class="card-title font-weigth-bold">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                    </div>
                </div>
                
            
        </>
    );
};

export default Card;