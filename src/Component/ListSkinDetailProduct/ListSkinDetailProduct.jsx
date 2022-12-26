import React from "react";
import { Header, Loader, Segment } from 'semantic-ui-react';
import './ListSkinDetailProduct.css';

function ListSkinDetailProduct(props){

    let [content , setContent] = React.useState();
    let [skin , setSkin ] = React.useState([]);
    let [allSkin , setAllSkin ] = React.useState([]);
    const [ loading , setLoading ] = React.useState(true);

    React.useEffect(()=>{ 
        fetch(`https://valorant-api.com/v1/weapons/skins`)
        .then((response) => response.json())
        .then((res)=>{
            setAllSkin(res.data);
        })
    },[]);

    React.useEffect(()=>{
        if(allSkin.length > 0){
            props.data.forEach(data => {
                let addArray = [];
                addArray = skin;
                const oneSkin = allSkin.find(dataAllSkin => dataAllSkin.uuid === data);
                addArray.push(oneSkin)
                setSkin(addArray);
            })
            setLoading(false)
        }
    });

    return(
    (skin.length !== 0)?
        <div className="list-skin-detail-product">
            <Header as='h5' attached='top'>
                List Skin
            </Header>
            <div className="container-list-skin-detail-product">
            {(loading)?
                <Loader style={{ marginTop: 50 }} active inline='centered' size="huge" />
            :
                <>
                        {skin.map((data , index)=>{
                            if(index < props.data.length){
                                return(
                                    <Segment attached key={index}>
                                        <img src={(data.displayIcon !== null)? data.displayIcon :(data.chromas[0].displayIcon !== null)? data.chromas[0].displayIcon:data.chromas[0].fullRender} />
                                        {data.displayName}
                                    </Segment>
                                )
                            }
                        })}
                </>
            }           
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
         :
         <></>
    );
}

export default ListSkinDetailProduct;