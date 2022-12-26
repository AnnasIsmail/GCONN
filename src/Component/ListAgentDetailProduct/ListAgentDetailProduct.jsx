import React from "react";
import { Label, Loader } from 'semantic-ui-react';
import './ListAgentDetailProduct.css';

function ListAgentDetailProduct(props){

    let [content , setContent] = React.useState();
    let [allAgent , setAllAgent ] = React.useState([]);
    let [agent , setAgent ] = React.useState([]);
    const [ loading , setLoading ] = React.useState(true);

    React.useEffect(()=>{

        fetch(`https://valorant-api.com/v1/agents`)
        .then((response) => response.json())
        .then((res)=>{
            setAllAgent(res.data);
        });

    },[]);

    React.useEffect(()=>{
        if(allAgent.length !== 0){
            props.data.forEach(data =>{
                let addArray = [];
                addArray = agent;
                const oneAgent = allAgent.find(dataAllAgent => dataAllAgent.uuid === data);
                addArray.push(oneAgent)
                setAgent(addArray);
            });
            setLoading(false)
        }
    },[allAgent]);

    return(
        (agent.length !== 0)?
            <div className="list-skin-detail-product">
                <h4>Agent</h4>
                <div className="container-list-skin-detail-product agent">
                    {(loading)?
                        <Loader style={{ marginTop: 50 }} active inline='centered' size="huge" />
                    :
                    <>
                            {agent.map((data , index)=>{
                                if(index < props.data.length){
                                    return(
                                        <Label key={index}>
                                            <img src={data.displayIconSmall} />
                                            {data.displayName}
                                        </Label> 
                                    )
                                }
                            })}
                        </>
                    }
                    
                </div>
            </div>
        :
            <></>
        
    );
}

export default ListAgentDetailProduct;