import React from "react";
import { Header, Segment } from 'semantic-ui-react';
import './ListSkinDetailProduct.css';

function ListSkinDetailProduct(props){

    let [content , setContent] = React.useState();
    let [skin , setSkin ] = React.useState([]);

    React.useEffect(()=>{ 

        if(skin.length !== props.data.length){
            props.data.map((data , index)=>{
                fetch(`https://valorant-api.com/v1/weapons/skins/${data}`)
                .then((response) => response.json())
                .then((res)=>{
                        let addArray = [];
                        addArray = skin;
                        addArray.push(res.data);
                        setSkin(addArray);
                }).then(()=>{
                    setContent(
                        skin.map((data , index)=>{
                            return(
                            <Segment attached key={index}>
                                <img src={data.displayIcon} />
                                {data.displayName}
                            </Segment>
                            )
                        })
                    )
                })
            });
        }
    },[]);

    function load(){
            
    }

    return(
        <div className="list-skin-detail-product">
            <Header as='h5' attached='top'>
                List Skin
            </Header>
            <div className="container-list-skin-detail-product">
                {content}
            
            </div>
            {/* <h4>Skin</h4>
                <Label as='a'>
                    <img src='https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png' />
                    Glitchpop Odin
                </Label> 
                <Label as='a'>
                    <img src='https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png' />
                    Glitchpop Odin
                </Label>        
                <Label as='a'>
                    <img src='https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png' />
                    Glitchpop Odin
                </Label>  
                <Label as='a'>
                    <img src='https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png' />
                    Glitchpop Odin
                </Label>  
                <Label as='a'>
                    <img src='https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png' />
                    Glitchpop Odin
                </Label>  
                <Label as='a'>
                    <img src='https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png' />
                    Glitchpop Odin
                </Label> 
            </div> */}
        </div>
    );
}

export default ListSkinDetailProduct;