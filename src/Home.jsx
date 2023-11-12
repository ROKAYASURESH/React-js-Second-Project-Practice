import React from 'react';
import Product from './Product';

const category = [
    {
        id: 1,
        cname: "MEN'S WEAR"
    }
    ,
    {
        id: 2,
        cname: "WOMEN'S WEAR"
    }
    ,
    {
        id: 3,
        cname: "SPORTS WEAR"
    }
    ,
    {
        id: 4,
        cname: "OFFICE WEAR"
    }
    ,
    {
        id: 5,
        cname: "GIRLY STYLE"
    }

    ,
    {
        id: 6,
        cname: "BUSINESS CASUAL"
    }
    , {
        id: 7,
        cname: "PARTY WEAR"
    }
]

export default function Home() {
    return <div>
        <div className="container">
            <div className="row py-3">
                <div className="col-lg-3">
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">PRODUCT CATEGORIES</li>
                        {category.map((r) => (
                            <li className="list-group-item">{r.cname}{r.id}</li>
                        ))}

                    </ul>

                </div>
                <div className="col-lg-9">
                    <img src="https://icms-image.slatic.net/images/ims-web/77f04cbd-c0b1-408a-87af-06ae490ec03b.jpg" alt="ss" width="100%" />
                </div>
            </div>
        </div>

        <Product />
        {/* <h1>This is Second Websit Of Suresh Rokaya</h1> */}
        </div>;
}
