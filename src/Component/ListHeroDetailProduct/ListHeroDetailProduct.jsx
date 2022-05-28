import React from "react";
import { Header, Input, Menu } from 'semantic-ui-react';
import './ListHeroDetailProduct.css';

function ListHeroDetailProduct(){

    let [hero , setHero] = React.useState([]);
    let [content , setContent] = React.useState();
    React.useEffect(()=>{

        fetch(`http://localhost:8000/hero`)
        .then((Response)=> Response.json())
        .then((json) => {
            setHero(json)
            setContent(
                json.map((data , index)=>{
                    return(
                        <Menu compact key={index}>
                            <Menu.Item  as='a'>{data.name}</Menu.Item>
                        </Menu>
                    )
                })
            );
        })
    },[])

    function search(e){
        let search = e.target.value.toLocaleLowerCase();
        let result = [];

        hero.map((data , index)=>{
            if(data.name.toLocaleLowerCase().startsWith(search) === true){
                result.push(data);
            }
        })
        setContent(
            result.map((data , index)=>{
                return(
                    <Menu compact key={index}>
                        <Menu.Item  as='a'>{data.name}</Menu.Item>
                    </Menu>
                )
            })
        )
    }
    
    return(
        <div className="list-hero-detail-product">
            <Header as='h5' attached='top'>
                List Hero
            </Header>
            <Input placeholder='Search...' onChange={search} />
            <div className="container-list-hero">
                {content}
            </div>
        </div>
    );
}

export default ListHeroDetailProduct;