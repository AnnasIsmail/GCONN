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
        fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${id}`)
        .then((response) => response.json())
        .then((res)=>{
                load(res.data);
        });
    },[]);

    function load(data){
        if(data.game === "Valorant"){
            setContent(<DetailProductValorant data={data} />);
        }else if(data.game === "Mobile Legend"){
            setContent(<DetailProductMobileLegend data={data}  />)
        }else if(data.game === "PUBG"){
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