import React from "react";
import { useCookies } from 'react-cookie';
import { Tab } from 'semantic-ui-react';
import DoneTransaction from "../../Component/DoneTransaction/DoneTransaction";
import NoData from "../../Component/NoData/NoData";
import OnGoingTransaction from "../../Component/OnGoingTransaction/OnGoingTransaction";
import './MyProfileContainer.css';


function PanelMyProfile(){
  
  const [cookies, setCookie, removeCookie] = useCookies();

  const [dataOngoing , setDataOngoing] = React.useState([]);
  const [dataDone , setDataDone] = React.useState([]);


  React.useEffect(()=>{

      if(dataDone.length === 0 && dataOngoing.length === 0){
        fetch(`https://gconn-api-node-js.vercel.app/getTransactionByIDUser/${cookies.Cr787980}`)
        .then((response) => response.json())
        .then((res)=>{
            res.data.forEach((data, index) => {
              if(data.status === 'Waiting For Payment' || data.status === 'Waiting for Seller to Respond' || data.status === 'Account in Progress'){
                const dataToSet = dataOngoing;
                dataToSet.push(data)
                setDataOngoing(dataToSet);
              }else  if(data.status === 'Transaction Failed' || data.status === 'Done'){
                const dataToSet = dataDone;
                dataToSet.push(data)
                setDataDone(dataToSet);
              }
            });
        });
      }

  
    
  },[]);

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
        <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />
    );
}

export default PanelMyProfile;