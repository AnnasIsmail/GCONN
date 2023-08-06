import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailProductValorant from "../../Component/DetailProduct/DetailProductValorant";
import { get } from "../../Function/Api";
import "./DetailProductContainer.css";

function DetailProductContainer() {
  const id = useParams().id;
  const navigasi = useNavigate();
  const NavigateTo = (to) => {
    navigasi(to);
  };
  let [data, setData] = React.useState();

  React.useEffect(() => {
    get(`/accountDetail/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return <DetailProductValorant data={data} />;
}

export default DetailProductContainer;
