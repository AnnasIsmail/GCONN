import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import DetailProductMobileLegend from "../../Component/DetailProduct/DetailProductMobileLegend";
import DetailProductPUBG from "../../Component/DetailProduct/DetailProductPUBG";
import DetailProductValorant from "../../Component/DetailProduct/DetailProductValorant";
import './DetailProductContainer.css';

function DetailProductContainer(){

    const id = useParams().id;
    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{navigasi(to)}
    let [content , setContent] = React.useState();

    React.useEffect(()=>{
        fetch(`http://localhost:8000/account?id=${id}`)
        .then((response) => response.json())
        .then((res)=>{
            res.map((data , index)=>{
                load(data);
            })
        });
    },[]);

    function load(data){
        if(data.game === "valorant"){
            setContent(<DetailProductValorant data={data} />);
        }else if(data.game === "mobile legend"){
            setContent(<DetailProductMobileLegend data={data}  />)
        }else if(data.game === "pubg"){
            setContent(<DetailProductPUBG data={data}  />)
        }        
    }

    return(
        <>
            {content}
        </>
    );  
}

export default DetailProductContainer;