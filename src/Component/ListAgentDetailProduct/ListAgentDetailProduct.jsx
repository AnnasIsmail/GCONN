import React from "react";
import { Label } from 'semantic-ui-react';
import './ListAgentDetailProduct.css';

function ListAgentDetailProduct(props){

    let [content , setContent] = React.useState();
    let [agent , setAgent ] = React.useState([]);

    React.useEffect(()=>{
        if(agent.length !== props.data.length){
            props.data.map((data , index)=>{
                            console.log(data)
                fetch(`https://valorant-api.com/v1/agents/${data}`)
                .then((response) => response.json())
                .then((res)=>{
                    let addArray = [];
                    addArray = agent;
                    addArray.push(res.data);
                    setAgent(addArray);
                }).then(()=>{
                    setContent(
                        agent.map((data , index)=>{
                            console.log(data)
                            return(<Label as='a' key={index}>
                                <img src={data.displayIconSmall} />
                                {data.displayName}
                            </Label> )
                        })
                    )
                });
            });
        }
    },[]);

    return(
        <div className="list-skin-detail-product">
            <h4>Agent</h4>
            <div className="container-list-skin-detail-product agent">
                {content}
                
             
            </div>
        </div>
    );
}

export default ListAgentDetailProduct;