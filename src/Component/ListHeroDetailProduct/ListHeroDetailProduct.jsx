import React from "react";
import { useParams } from 'react-router-dom';
import { Header, Input, Menu } from 'semantic-ui-react';
import './ListHeroDetailProduct.css';

function ListHeroDetailProduct(){

    let [hero , setHero] = React.useState([]);
    let [content , setContent] = React.useState();
    let { id } = useParams();
    console.log(id)
    React.useEffect(()=>{

        fetch(`http://localhost:8000/account?id=${id}`)
        .then((Response)=> Response.json())
        .then((json) => {
            json.map((data , index)=>{
                setHero(data.hero)
                setContent(
                data.hero.map((data , index)=>{
                        return(
                            <Menu compact key={index}>
                                <Menu.Item  as='a'>{data}</Menu.Item>
                            </Menu>
                        )
                    })
                    );
                })
        })
    },[])

    function search(e){
        let search = e.target.value.toLocaleLowerCase();
        let result = [];

        hero.map((data , index)=>{
            if(data.toLocaleLowerCase().startsWith(search) === true){
                result.push(data);
            }
        })
        setContent(
            result.map((data , index)=>{
                return(
                    <Menu compact key={index}>
                        <Menu.Item  as='a'>{data}</Menu.Item>
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