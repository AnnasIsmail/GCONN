import React from "react";
import { useCookies } from 'react-cookie';
import { Loader, Tab } from 'semantic-ui-react';
import DoneTransaction from "../../Component/DoneTransaction/DoneTransaction";
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import OnGoingTransaction from "../../Component/OnGoingTransaction/OnGoingTransaction";
import './../../Component/OrderCustomer/OrderCustomer.css';
import './MyProfileContainer.css';


function MyProfileContainer(){
  
  const [cookies, setCookie, removeCookie] = useCookies();
  const [profile , setProfile] = React.useState({});
  const [loading , setLoading] = React.useState(true);
  const [loadingProfile , setLoadingProfile] = React.useState(true);

  const [dataOngoing , setDataOngoing] = React.useState([]);
  const [dataDone , setDataDone] = React.useState([]);
  const render = React.useRef(0);

  React.useEffect(()=>{

    fetch('https://gconn-api-node-js.vercel.app/userData', {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({_id: cookies.Cr787980}),
      }) 
  .then((response) => response.json())
  .then(function (response) {
        console.log(response)
        if(response.status === 200){
          setLoadingProfile(false);
          setProfile(response.data);
      }else{
          window.location.reload()
      }
      
    });

      fetch(`https://gconn-api-node-js.vercel.app/getTransactionByIDUser/${cookies.Cr787980}`)
      .then((response) => response.json())
      .then((res)=>{
          res.data.forEach((data, index) => {
            if(data.status === 'Waiting For Payment' || data.status === 'Waiting for Seller to Respond' || data.status === 'Seller Already Sent Credentials' || data.status === 'Waiting for Seller to Send Credentials'|| data.status === 'Waiting for the seller to accept the cancellation'){
              const dataToSet = dataOngoing;
              dataToSet.push(data)
              setDataOngoing(dataToSet);
            }else  if(data.status === 'Transaction Failed' || data.status === 'Done'){
              const dataToSet = dataDone;
              dataToSet.push(data)
              setDataDone(dataToSet);
            }
          });
          setLoading(false);
      });
    
  },[]);

  React.useEffect(()=>{
    render.current += 1;
  })

  let panes = [
    {
      menuItem: 'Ongoing Transaction',
      render: () =>
      <>
        {(dataOngoing.length > 0)?
        <> 
          {dataOngoing.map((data , index)=> <OnGoingTransaction data={data} key={index} />)}
        </>
        :
          <NoData  description='No Ongoing Transaction' goto="/market" button="Go To Market" /> 
        }
      </>
    },
    {
      menuItem: 'Done',
      render: () => 
      <>
        {(dataDone.length > 0)?
        <>
          {dataDone.map((data , index)=> <DoneTransaction data={data} key={index} />)}
        </>
        :
        <NoData description='No Transaction Completed' goto="/market" button="Go To Market" /> 
        }
      </>
    },            
  ]

    return(
        <div className="my-profile-container">
            {(loadingProfile)?
              <Loader style={{ marginTop: 50 }} active inline='centered' size="huge" />
            :
              <HeaderMyStore profile={profile} pageEdit="profile" StoreName={profile.fullName} src={(profile.photo !== "")? profile.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} balance={profile.balance} />
            }
            {(loading)?
              <Loader style={{ marginTop: 50 }} active inline='centered' size="huge" />
            :
              <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />
            }
        </div>
    );
}

export default MyProfileContainer;