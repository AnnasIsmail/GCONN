import React, { Fragment } from "react";
import { useCookies } from 'react-cookie';
import Moment from 'react-moment';
import { Form, Icon, Image, Input, Label } from 'semantic-ui-react';
import { SocketIO } from '../../App';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import ProductChat from "../ProdukChat.jsx/ProdukChat";
import TransactionChat from "../TransactionChat/TransactionChat";
import './DetailChat.css';

function DetailChat(props){
    const [cookies, setCookie, removeCookie] = useCookies();

    const data = props.DetailChatData;
    const profile = props.DetailChatDataProfile;

    const [dataChat , setDataChat] = React.useState(data)
    const scrollRef = React.useRef();
    const socket = React.useRef(React.useContext(SocketIO));
    const [ online , setOnline ] = React.useState(false);

    React.useEffect(()=> {
        // socket.current = io("ws://localhost:8900");
        // socket.current.emit('submitChat' , 'ceritanya submit')

        

        socket.current.on("getMessage", (dataRead) => {
                getDetailChat();
          });

          socket.current.on("getUsers", (data) => {
            const checkOnline = data.filter((dataFind) => dataFind.idUser === profile._id);
            if(checkOnline.length > 0){
                setOnline(true);
            }
        });

      },[])

      function getDetailChat(){
        socket.current.emit("getUsers");

        fetch('https://gconn-api-node-js.vercel.app/detailChat', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idChat: data._id }),
                }) 
            .then((response) => response.json())
            .then((json) => {
                setDataChat(json.data);
            })
    }


    React.useEffect(() => {
        read();
        scrollRef.current?.scrollIntoView();
      }, [dataChat]);

    function handleSubmit(e){
        e.preventDefault();

        const currentdate = new Date(); 
        const dateTime = "" + (currentdate.getMonth()+1) + "/"
                + currentdate.getDate()  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        const message = document.getElementById('inputChat').value;

        let content = dataChat.content;
        content.push({
            from: cookies.Cr787980,
            to: profile._id,
            message,
            read: false,
            dateTime
        })
        const dataSend = {
            _id: data._id,
            user: data.user,
            content,
            dateTime
        }

        let getUserOnline = [];

        socket.current.emit("getUsers");
        socket.current.on("getUsers", (data) => {
            getUserOnline = data;
        });

        fetch('https://gconn-api-node-js.vercel.app/updateChat', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSend),
            }) 
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 200){
                document.getElementById('inputChat').value = "";
                setDataChat(dataSend);
                const getIdUser = getUserOnline.filter((data) => data.idUser === profile._id);
                socket.current.emit("sendMessage", getIdUser);
            }
        })

        // console.log(data);
        // console.log(dataSend);
        
    }  

    function read(){
        let dataSend = dataChat;
        let getUserOnline = [];

        socket.current.emit("getUsers");
        socket.current.on("getUsers", (data) => {
            getUserOnline = data;
        });

        const readFalse = dataChat.content.filter(dataFilter => dataFilter.from !==cookies.Cr787980 && dataFilter.read === false);
        if(readFalse.length > 0){
            const newContent = [];
            const waitPromise = new Promise(function(myResolve,myReject){
                dataChat.content.forEach(data => {
                    data.read = true;
                    newContent.push(data);
                }) 
                dataSend.content = newContent;
                myResolve();
                myReject();
            })
            
            waitPromise.then(()=>{

                fetch('https://gconn-api-node-js.vercel.app/updateChat', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataSend),
                    }) 
                .then((response) => response.json())
                .then((json) => {
                    if(json.status === 200){
                        const getIdUser = getUserOnline.filter((data) => data.idUser === profile._id);
                        socket.current.emit("read", getIdUser);
                    }
                });
            });
        }
    }

    function displayEnter(index){
        document.getElementById(`ago${index}`).classList.add('disNone')
        document.getElementById(`detail${index}`).classList.remove('disNone')
    }

    function displayLeave(index){
        document.getElementById(`ago${index}`).classList.remove('disNone')
        document.getElementById(`detail${index}`).classList.add('disNone')
    }
    // console.log(profile)
    return(
        <div className="detail-chat">
            <div className="header-detail-chat">
                <img onClick={()=>props.back()} id='buttonClosedChat' className='ButtonChatClosed' src={ArrowDown} alt="" />
                <div className="avatar">
                    <Image src={(profile.photo !== "")? profile.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} className="image-avatar" circular />
                    <span>
                        <h1>{profile.fullName}</h1>
                        <div className='status'>
                            {(online)?
                                <>
                                    <Icon name="circle" color='green' size='small' />
                                    Online
                                </>
                            :
                                <>
                                    <Moment className='RightChat' style={{ textAlign: 'end', paddingLeft: 10 }} toNow>
                                        {profile.lastOnline}
                                    </Moment>
                                </>
                            }
                        </div>
                    </span>
                </div>
            </div>
            <div className="container-content-chat">
                <div className="content-chat" id="content">
                    {dataChat.content.map((dataContent , index)=>
                        <div key={index} className="container-Chat-P">
                            {(dataContent.from === cookies.Cr787980)?
                                <Fragment key={index} >
                                    <span className="content-chat-right" key={index} ><p onMouseLeave={()=> displayLeave(index)}  onMouseEnter={() => displayEnter(index)}> {(dataContent.read === true)?<Icon name="check" size="small" color="blue" style={{ paddingRight: 20 }} />:<Icon name="check" size="small" style={{ paddingRight: 20 }} />} {dataContent.message}</p></span>
                                    <Moment id={`ago${index}`} className='RightChat' style={{ textAlign: 'end' }} toNow>{dataContent.dateTime}</Moment>
                                    <Moment id={`detail${index}`} className='disNone' style={{ textAlign: 'end'}} parse="MM/DD/YYYY HH:mm">{dataContent.dateTime}</Moment>
                                </Fragment>                                   
                                :(dataContent.from !== cookies.Cr787980 && dataContent.from !== undefined)?
                                <Fragment key={index}>
                                    <span className="content-chat-left" key={index} ><p onMouseLeave={()=> displayLeave(index)}  onMouseEnter={() => displayEnter(index)}>{dataContent.message}<small>{dataContent.time}</small></p></span>
                                    <Moment id={`ago${index}`} toNow>{dataContent.dateTime}</Moment>
                                    <Moment id={`detail${index}`} className='disNone' parse="MM/DD/YYYY HH:mm">{dataContent.dateTime}</Moment>
                                </Fragment>
                                :(dataContent.accountID !== undefined)?
                                <ProductChat id={dataContent.accountID}/>
                                :(dataContent.transactionID !== undefined)&&
                                <TransactionChat id={dataContent.transactionID}/>
                            }
                        </div>
                    )}
                    <div  ref={scrollRef} />
                </div>
                <Form onSubmit={handleSubmit} className="container-bottom-chat" >
                    <Input labelPosition='right' type='text' placeholder='Type a message'>
                        {/* <Label basic><Icon name="plus" link /></Label> */}
                        {/* <textarea id="inputChat" resize></textarea> */}
                        <input id="inputChat" autoComplete="off" placeholder='Aa' />
                        <button type="submit">
                            <Label as='a' ><Icon name="send" /></Label>
                        </button>
                    </Input>
                </Form>
            </div>
        </div>
    );
}

export default DetailChat;