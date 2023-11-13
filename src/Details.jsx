import React from 'react';
import { useParams } from "react-router-dom";
import { ProductList } from './Product';

export default function Details() {
  let { id } = useParams();
  const found = ProductList.find(element => element.id == id);
  return <>
    <div className="container">
      <div className="row m-3">
        <div className="col-lg-4">
          <div class="card" style={{ width:"22em" }}>
            <img src={found.image} className="card-img-top" alt="" style={{ width:"100%",height: "300px" }} />
            <div className="card-body">
              <h5 className="card-title">{found.pname}</h5>
              <h4>{found.pprice}</h4>
              <p class="card-text">{found.pdesc}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 m-2">
        {found.det}
        </div>
      </div>
    </div>

  
  </>
}
