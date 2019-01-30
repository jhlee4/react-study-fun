import React from 'react';

const ItemPage = (props) =>{
    console.log(props);
    const id= props.match.params.id;
    return (
        <div>
        <h1>Here is wrok i have done</h1>
          <h1>This is item page {id}</h1>
        </div>
 );
}

export default ItemPage;