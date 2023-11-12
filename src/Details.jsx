import React from 'react';
import { useParams} from "react-router-dom";
import {ProductList} from './Product';

export default function Details() 

{
  let {id } = useParams();
  const found=ProductList.find(element=> element.id == id);
  return <div>This IS Detail Page {id} 
<h1> {found.pname}</h1>
  {found.pprice}
  </div>;
}
