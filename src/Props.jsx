import React from 'react';

const std=[
    {
        id:'1',
        name:'Gita'
    }
    ,
    {
        id:'3',
        name:'Ram'
    },
    {
        id:'2',
        name:'Shaym'
    }

]
export default function Props()
{
    return <div><h1>list</h1>
        {
            std.map((i)=>(<div>
            <h1>{i.name}</h1>
            <p>{i.id}</p>
            </div>))
                
        }
    </div>
}