import React from "react";
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Loader, Modal } from 'semantic-ui-react';
import { SocketIO } from '../../App';
import Produk from "../../Component/Produk/Produk";
import FormatMoney from "../../Function/FormatMoney";
import '../PaymentContainer/PaymentContainer.css';
import './BillContainer.css';

// let panels = [];
function BillContainer(){
    
    const navigasi = useNavigate();
    const NavigateTo =(to)=>{
        navigasi(to)
    }
    let { id } = useParams();
    const [loading , setLoading] = React.useState(true);
    let [transaction , setTransaction] = React.useState();
    const socket = React.useRef(React.useContext(SocketIO));
    const [cookies, setCookie, removeCookie] = useCookies();
    const [account , setAccount] = React.useState();
    const [modalCredentials , setModalCredentials] = React.useState(false);
    const [ panels , setPanels ] = React.useState();

    React.useEffect(()=> {
        getTransaction();
    },[]);

    function getTransaction(){
        fetch(`https://gconn-api-node-js.vercel.app/getTransaction/${id}`)
        .then((response) => response.json())
        .then((res)=>{
            setTransaction(res.data);
            fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${res.data.idAccount}`)
            .then((response) => response.json())
            .then((res)=>{
                setAccount(res.data);
                setLoading(false);
            });
        });
    }

    function checkPayment(){
        fetch(`https://gconn-api-node-js.vercel.app/checkPayment/${id}/${transaction.response_midtrans.order_id}`)
        .then((response) => response.json())
        .then((res)=>{
            if(res.status === 200){
                setLoading(true);
                getTransaction();
            }
        });
    }

    function goToChat(){
        fetch(`https://gconn-api-node-js.vercel.app/addChat`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                myID: transaction.idUser,
                idSeller: transaction.idSeller,
                transactionID: transaction._id
            })
        })
        .then((response) => response.json())
        .then((json) => {
            socket.current.emit("goToDirectMessage", json);
        });   
    }

    function changeStatus(status){
        setLoading(true);
        fetch(`https://gconn-api-node-js.vercel.app/changeStatusPayment`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id, status, idAccount: transaction.idAccount, statusNow: transaction.status, idCustomer: transaction.idUser, idSeller: transaction.idSeller, totalTransaction: transaction.totalTransaction})
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 200){
                getTransaction();
            }
        });   
    }

    function submitCredentials(){
        const username = document.getElementById('usernameCredential').value;
        const password = document.getElementById('passwordCredential').value;
        const credentials = { username, password }

        if(username !== '' && password !== ''){
            fetch(`https://gconn-api-node-js.vercel.app/AddCredentials`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({credentials,id})
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json.status === 200)
                if(json.status === 200){
                    setModalCredentials(false);
                    setLoading(true);
                    getTransaction();
                }
            }); 
        }
    }

    return(
        <div className="payment-container">
            <h1 className="header">Detail Transaction</h1>
            {(loading)?
                <div style={{ display: 'flex' , alignItems: 'center', height: 350 }}> 
                        <Loader style={{ margin: 'auto' }} active inline='centered' size="huge" />
                </div>
            :
            <>
                <Produk  src={account.photo[0]} game={account.game} header={account.header} price={account.price} id={account._id} footer={false}  />
                <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                    Transaction ID:
                    <h5>
                        {transaction.response_midtrans.order_id}
                    </h5>
                </p>
                <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                    Status:
                    <h5>
                        {transaction.status}
                    </h5>
                </p>
                <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                    Payment Type:
                    <h5>
                        {transaction.paymentMethod}
                    </h5>
                </p>
                <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                    Username:
                    <h5>
                        {transaction.credentials.username}
                    </h5>
                </p>
                <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                    Password: 
                    <h5>
                        {transaction.credentials.password}
                    </h5>
                </p>

                {(cookies.Cr787980 === transaction.idUser)&&
                <>
                {
                    (transaction.paymentMethod !== "Mandiri Bill Payment")?
                    <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                        Number Virtual Account:
                        <h5>
                            {transaction.response_midtrans.va_numbers.map((data)=> data.va_number)}
                        </h5>
                    </p>
                :
                    <>
                        <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                            Bill Key:
                            <h5>
                                {transaction.response_midtrans.bill_key}
                            </h5>
                        </p>
                        <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                            Bill Code:
                            <h5>
                                {transaction.response_midtrans.biller_code}
                            </h5>
                        </p>
                    </>
                }
                </>
                
                }
                <p style={{ margin: 0 , marginTop: 13, marginBottom: 5 , display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                    Total Payment:
                    <h5>
                        <FormatMoney money={transaction.totalTransaction} />
                    </h5>
                </p>
                {(cookies.Cr787980 === transaction.idUser)?
                <>
                {(transaction.status === 'Waiting For Payment')?
                <div className="button-container">
                    <Button onClick={()=>changeStatus('Transaction Failed')}>Cancel Transaction</Button>
                    <Button onClick={checkPayment}>Check Payment Status</Button>
                </div>
                :(transaction.status === 'Waiting for Seller to Respond')?
                <div className="button-container">
                    <Button onClick={goToChat}>Chat Seller</Button>
                    <Button onClick={()=>changeStatus('Waiting for the seller to accept the cancellation')}>Request Cancel Transaction</Button>
                </div>
                :(transaction.status === 'Waiting for Seller to Send Credentials')?
                <div className="button-container">
                    <Button onClick={goToChat}>Chat Seller</Button>
                    <Button onClick={()=>changeStatus('Done')}>Complete Transaction</Button>
                </div>
                :(transaction.status === 'Seller Already Sent Credentials')?
                <div className="button-container">
                    <Button onClick={goToChat}>Chat Seller</Button>
                    <Button onClick={()=>changeStatus('Done')}>Complete Transaction</Button>
                </div>
                :(transaction.status === 'Transaction Failed' || transaction.status === 'Waiting for the seller to accept the cancellation' || transaction.status === 'Done')&&
                <div className="button-container on-button">
                    <Button onClick={goToChat}>Chat Seller</Button>
                </div>
                }
                </>
                :
                <>
                {(transaction.status === 'Waiting For Payment')?
                <div className="button-container">
                    <Button onClick={goToChat}>Chat Customer</Button>
                    <Button onClick={()=>changeStatus('Transaction Failed')}>Cancel Transaction</Button>
                </div>
                :(transaction.status === 'Waiting for Seller to Respond')?
                <div className="button-container">
                    <Button onClick={()=>changeStatus('Transaction Failed')}>Cancel Transaction</Button>
                    <Button onClick={()=>changeStatus('Waiting for Seller to Send Credentials')}>Accept Transaction</Button>
                </div>
                :(transaction.status === 'Waiting for Seller to Send Credentials')?
                <div className="button-container">
                    <Button onClick={goToChat}>Chat Customer</Button>
                    <Button onClick={() => setModalCredentials(true)}>Send Credentials</Button>
                </div>
                :(transaction.status === 'Seller Already Sent Credentials')?
                <div className="button-container">
                    <Button onClick={goToChat}>Chat Customer</Button>
                    <Button onClick={() => setModalCredentials(true)}>Change Credentials</Button>
                </div>
                :(transaction.status === 'Waiting for the seller to accept the cancellation')?
                <div className="button-container on-button">
                    <Button onClick={goToChat}>Chat Customer</Button>
                    <Button onClick={()=>changeStatus('Transaction Failed')}>Cancel Transaction</Button>
                </div>
                :(transaction.status === 'Transaction Failed' || transaction.status === 'Done')&&
                <div className="button-container on-button">
                    <Button onClick={goToChat}>Chat Customer</Button>
                </div>
                }
                </>
                }
            </>
            }
                  <Modal
                    size="tiny"
                    open={modalCredentials}
                    onClose={() => setModalCredentials(false)}
                    id="modalEdit"
                >
                    <Modal.Header>Enter Account Credentials</Modal.Header>
                    <Modal.Content>
                        <div>
                            <label htmlFor="fullName">Username</label>
                            <Input type="text" id="usernameCredential" />
                        </div>
                        <div>
                            <label htmlFor="fullName">Password</label>
                            <Input type="text" id="passwordCredential" />
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button negative onClick={() => setModalCredentials(false)}>
                        No
                    </Button>
                    <Button positive onClick={submitCredentials}>
                        Yes
                    </Button>
                    </Modal.Actions>
                </Modal>
        </div>
    )
}

export default BillContainer;