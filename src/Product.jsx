import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const ProductList =[
    {id:1,
    pname:"Black Coat",
    pprice:"Price:22",
    pdesc:"is a long establish fact that reader",
    image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product1-300x300.jpg"
    },
    {id:2,
        pname:"black Dress",
        pprice:"Price:8984",
        pdesc:"",
        image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product4-300x300.jpg"
        }
        ,  {id:3,
            pname:"Hero dress",
            pprice:"Price:234",
            pdesc:"hjdskfhkjdhg",
            image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product5-300x300.jpg"
            },
            {id:4,
                pname:"Black Coat",
                pprice:"292",
                pdesc:"is a long establish fact that reader",
                image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product6-300x300.jpg"
                },
                {id:5,
                    pname:"Black Coat",
                    pprice:"Price:272",
                    pdesc:"is a long establish fact that reader",
                    image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product2-300x300.jpg"
                    },
                    {id:6,
                        pname:"Black Coat",
                        pprice:"Price: 2266",
                        pdesc:"is a long establish fact that reader",
                        image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product3-300x300.jpg"
                        },
                        {id:7,
                            pname:"Black Coat",
                            pprice:"Price: 22888",
                            pdesc:"is a long establish fact that reader",
                            image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product6-300x300.jpg"
                            },
                            {id:8,
                                pname:"Black Coat",
                                pprice:"Price: 2453",
                                pdesc:"is a long establish fact that reader",
                                image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product7-300x300.jpg"
                                },

                                {id:9,
                                    pname:"Black Coat",
                                    pprice:"price:292",
                                    pdesc:"is a long establish fact that reader",
                                    image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product8-300x300.jpg"
                                    },
                                    {id:10,
                                        pname:"Black Coat",
                                        pprice:"price:292",
                                        pdesc:"is a long establish fact that reader",
                                        image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product9-300x300.jpg"
                                        },
                                        {id:11,
                                            pname:"Black Coat",
                                            pprice:"Price:292",
                                            pdesc:"is a long establish fact that reader",
                                            image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product1-300x300.jpg"
                                            },
                                            {id:12,
                                                pname:"Black Coat",
                                                pprice:"Price:2292",
                                                pdesc:"is a long establish fact that reader",
                                                image:"https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2022/01/bosa-shop-img11-345-570.png"
                                                },

]
export default function Product() {
  return <div>
      <div className="container">
          <h2>Product List</h2>
          <div className="row">
          {ProductList.map((pp)=>(
          <div className="col-lg-3">
              <img src={pp.image} className='img-fluid' />
                <Link to= {'/details/${pp.id}'} >
                   <h4> {pp.pname} </h4> 
                 </Link>
                 <h5> {pp.pprice} </h5>
              </div>
              ))}
          </div>
          <div className="constructor">
              <div className="row">
                  <div className="col-lg-12">
                      {/* <img src="https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2022/01/bosa-shop-img11-345-570.png" alt="" width="100%" height="500px"/> */}
                  </div>
              </div>
          </div>
      </div>
  </div>;
}
