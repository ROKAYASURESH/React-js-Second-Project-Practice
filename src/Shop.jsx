import React from 'react';
import Product from './Product';
import { category } from './Home';

export default function 
()
 {
  return <div>
	 
         <h1>This is Shop Page</h1>
         <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam a sint praesentium eum consequuntur eaque quibusdam deserunt quis similique id accusantium assumenda amet ipsam modi impedit maiores possimus, non repudiandae, tempora sequi tempore voluptatum labore nesciunt. Nemo iusto, iste amet ad, facere nesciunt qui quas vitae, consectetur officia fuga expedita dolor. Molestias perspiciatis in officiis tempore quis provident sequi quas neque dolorum, necessitatibus officia eius iure fuga ducimus laudantium veritatis quibusdam repellendus debitis corporis dicta rerum? Blanditiis sequi incidunt obcaecati saepe, nihil quibusdam dolorum asperiores voluptate ipsam non deserunt reprehenderit fugiat animi est. Tenetur provident dolor eos reprehenderit, quaerat molestiae totam tempora cupiditate, ab, quam et? Enim quo in distinctio corrupti. Odit exercitationem quasi fugiat natus optio cum facere, et recusandae deleniti repellendus rerum. Molestias soluta, natus voluptatem modi necessitatibus similique deleniti deserunt, iusto sed magni velit ab facilis perferendis cum sit incidunt adipisci, consequatur aliquid et. Inventore ullam tempora iste. Dicta aperiam debitis libero voluptatum magnam facere, eaque fugiat voluptatibus porro mollitia corporis nobis voluptatem, maiores, sed molestiae ipsa quis dolores eum molestias. Ab libero necessitatibus, nobis at omnis ea ullam ratione maxime, cumque eveniet eos incidunt labore rem?
                </div>
            </div>
        </div>
</p>
  </div>;
}
