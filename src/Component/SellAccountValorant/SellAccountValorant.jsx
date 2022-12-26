import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { useCookies } from 'react-cookie';
import { Button, Dropdown, Header, Icon, Image, Input, Label, Segment } from 'semantic-ui-react';
import DropdownAgentValorant from "../DropdownAgentValorant/DropdownAgentValorant";
import DropdownSkinValorant from "../DropdownSkinValorant/DropdownSkinValorant";
import './SellAccountValorant.css';

let data ={};
let checkUpdate = false;
let skin = [];
let agent = [];

let imageOut = [];
let imagePreviewOut = [];


function SellAccountValorant(props){

    const [countTextfield , setCountTextfield] = React.useState([1]);

    const [ emailStatusValue , setEmailStatusValue ] = React.useState('');
    const [ chooseRegionValue , setChooseRegionValue ] = React.useState('');
    const [ rankValue , setRankValue ] = React.useState('');
    const [ changeNameValue , setChangeNameValue ] = React.useState('');

    const dataUpdate = props.update;

    const [uploadImage , setUploadImage] = React.useState(false);
    const [contentImage , setContentImage] = React.useState(<div className="container-image-sell-account-no-image"><Icon name='image outline' />No image are listed for this customer.</div>);

    const deleteImagePreview = (i) => {
        const arrayToPushImage = [];
        const arrayToPushPreview = [];
        
        imageOut.forEach((data , index)=> {
            if(index !== i){
                arrayToPushImage.push(data);
                arrayToPushPreview.push(URL.createObjectURL(data));
            }
        });

        imageOut = arrayToPushImage;
        imagePreviewOut = arrayToPushPreview;

        setContentImage(
            (arrayToPushPreview.length === 0)?
                <div className="container-image-sell-account-no-image">
                <Icon name='image outline' />
                No image are listed for this customer.
              </div>
            :
            <div className="container-image-sell-account-valorant">
                {arrayToPushPreview.map((data , index)=> {
                        return(
                            <span key={index}>
                                <Image src={data} />
                                <CloseButton onClick={()=>deleteImagePreview(index)} />
                            </span>
                        )
                })}            
            </div>
        )
    }

    function validateImg(e){
        const file = e.target.files;
        const arrayToPushImage = imageOut;
        let arrayToPushPreview = imagePreviewOut;
        
        if(dataUpdate){
            arrayToPushPreview = dataUpdate.photo;
        }

        for(let i = 0; i < file.length; i++){
            if(file[i].size >= 1048576) {
                return alert("Max Size Image 1 Mb");
            } else {

                if(dataUpdate){
                    console.log('masuk');
                    
                    const data = new FormData();
                    data.append('file', file[i]);
                    data.append('upload_preset', 'kyegcmyk');
        
                    try {
                        fetch("https://api.cloudinary.com/v1_1/doahyhy5i/image/upload",{
                            method:'post',
                            body: data
                        })
                        .then((response) => response.json())
                        .then((json)=> {
                            const urlData = json;   
                            arrayToPushPreview.push(urlData.url);
                        })
                    } catch (error) {
                        console.log(error)
                    }
                }else{
                    arrayToPushImage.push(file[i]);
                    arrayToPushPreview.push(URL.createObjectURL(file[i]));
                }

            }
        }
        
        if(dataUpdate){
            data.photo = arrayToPushPreview;
        }else {
            imageOut = arrayToPushImage;
            imagePreviewOut = arrayToPushPreview;

        }

        setContentImage(
            (arrayToPushPreview.length === 0)?
                <div className="container-image-sell-account-no-image">
                    <Icon name='image outline' />
                    No image are listed for this customer.
                </div>
            :
            <div className="container-image-sell-account-valorant">
                {arrayToPushPreview.map((data , index)=> {
                    return(
                        <span key={index}>
                            <Image src={data} />
                            <CloseButton onClick={()=>deleteImagePreview(index)} />
                        </span>
                    )
                })}            
            </div>
        )
        sendData();
        // uploadingImage(file)

    }

    function deleteImagePreviewEdit(i){
        const arrayToPushPreview = [];
        
        data.photo.forEach((data , index)=> {
            if(index !== i){
                arrayToPushPreview.push(data);
            }
        });

        data.photo = arrayToPushPreview;

        setContentImage(
            (arrayToPushPreview.length === 0)?
                <div className="container-image-sell-account-no-image">
                <Icon name='image outline' />
                No image are listed for this customer.
              </div>
            :
            <div className="container-image-sell-account-valorant">
                {arrayToPushPreview.map((data , index)=> {
                        return(
                            <span key={index}>
                                <Image src={data} />
                                <CloseButton onClick={()=>deleteImagePreviewEdit(index)} />
                            </span>
                        )
                })}            
            </div>
        )
    }
    
    function showEditImage(e){
        setContentImage(
            (e.length === 0)?
                <div className="container-image-sell-account-no-image">
                    <Icon name='image outline' />
                    No image are listed for this customer.
                </div>
            :
            <div className="container-image-sell-account-valorant">
                {e.map((data , index)=> {
                    return(
                        <span key={index}>
                            <Image src={data} />
                            <CloseButton onClick={()=>deleteImagePreviewEdit(index)} />
                        </span>
                    )
                })}            
            </div>
        )
    }
    
    // function uploadingImage(image){
    //     console.log(imageOut);
    //     imageOut.forEach((dataImage)=> {
    //         const data = new FormData();
    //         data.append('file', dataImage);
    //         data.append('upload_preset', 'kyegcmyk');
    //         try {
    //             setUploadImage(true);
    //             let res = fetch("https://api.cloudinary.com/v1_1/doahyhy5i/image/upload",{
    //                 method:'post',
    //                 body: data
    //             })
    //             .then((response) => response.json())
    //             .then((json)=> {
    //                 const urlData = json;   
    //                 setUploadImage(false);
    //                 console.log(urlData.url);
    //             })
    //         } catch (error) {
    //             setUploadImage(false);
    //             console.log(error)
    //         }
    //     })
    // }

    React.useEffect(()=>{

        window.onbeforeunload = function() {
            return "When this page is reloaded, there may be an error with the skin and agent. Please return to the My Store page";
          };

        if(dataUpdate){
            if(document.getElementById('header').value === ''){
                document.getElementById('header').value = dataUpdate.header;
                document.getElementById('price').value = dataUpdate.price;
                document.getElementById('totalVP').value = dataUpdate.totalVP;
                document.getElementById('reason').value = dataUpdate.reason;
                document.getElementById('level').value = dataUpdate.level;
                document.getElementById('battlePass').value = dataUpdate.battlepass;
                data.photo = dataUpdate.photo
                agent = dataUpdate.agent;
                skin = dataUpdate.skin;
                checkUpdate = props.update;
                setEmailStatusValue(dataUpdate.emailStatus);
                setChooseRegionValue(dataUpdate.region);
                setRankValue(dataUpdate.rank);
                setChangeNameValue(dataUpdate.changeNameStatus);
                showEditImage(dataUpdate.photo);
                changeValue('e','name');
            }
        }
    })


    const emailStatus = [
        { key: "Available", text: 'Available', value: "Available" },
        { key: "Not AVailable", text: 'Not Available', value: "Not AVailable" },
      ]

      const chooseRegion = [
        { key: "ASIA", text: 'ASIA', value: "ASIA" },
        { key: "EROUPA", text: 'EROUPA', value: "EROUPA" },
        { key: "USA", text: 'USA', value: "USA" },
      ]

      const changeName = [
        { key: "Ready", text: 'Ready', value: "Ready" },
        { key: "Not Ready", text: 'Not Ready', value: "Not Ready" },
      ]

      const rank = [
          { key: "IRON 1", text: "IRON 1", value: "IRON 1"},
          { key: "IRON 2", text: "IRON 2", value: "IRON 2"},
          { key: "IRON 3", text: "IRON 3", value: "IRON 3"},
          { key: "BRONZE 1", text: "BRONZE 1", value: "BRONZE 1"},
          { key: "BRONZE 2", text: "BRONZE 2", value: "BRONZE 2"},
          { key: "BRONZE 3", text: "BRONZE 3", value: "BRONZE 3"},
          { key: "SILVER 1", text: "SILVER 1", value: "SILVER 1"},
          { key: "SILVER 2", text: "SILVER 2", value: "SILVER 2"},
          { key: "SILVER 3", text: "SILVER 3", value: "SILVER 3"},
          { key: "GOLD 1", text: "GOLD 1", value: "GOLD 1"},
          { key: "GOLD 2", text: "GOLD 2", value: "GOLD 2"},
          { key: "GOLD 3", text: "GOLD 3", value: "GOLD 3"},
          { key: "PLATINUM 1", text: "PLATINUM 1", value: "PLATINUM 1"},
          { key: "PLATINUM 2", text: "PLATINUM 2", value: "PLATINUM 2"},
          { key: "PLATINUM 3", text: "PLATINUM 3", value: "PLATINUM 3"},          
          { key: "DIAMOND 1", text: "DIAMOND 1", value: "DIAMOND 1"},
          { key: "DIAMOND 2", text: "DIAMOND 2", value: "DIAMOND 2"},
          { key: "DIAMOND 3", text: "DIAMOND 3", value: "DIAMOND 3"},
          { key: "IMMORTAL 1", text: "IMMORTAL 1", value: "IMMORTAL 1"},
          { key: "IMMORTAL 2", text: "IMMORTAL 2", value: "IMMORTAL 2"},
          { key: "IMMORTAL 3", text: "IMMORTAL 3", value: "IMMORTAL 3"},
          { key: "RADIANT", text: "RADIANT", value: "RADIANT"},
      ]

      const [cookies, setCookie, removeCookie] = useCookies();
  

      function changeValue(e, name){
        // let value = e.target.value;
        // let outerText = e.target.outerText

        // if(name === 'header'){
        //     data.header = value;
        // }else if(name === 'email-status'){
        //     data.emailStatus = outerText;
        // }else if(name === 'region'){
        //     data.region = outerText;
        // }else if(name === 'rank'){
        //     data.rank = outerText;
        // }else if(name === 'level'){
        //     data.level = value;
        // }else if(name === 'battlepass'){
        //     data.battlepass = value;
        // }else if(name === 'total-vp'){
        //     data.totalVP = value;
        // }else if(name === 'change-name-status'){
        //     data.changeNameStatus = outerText;
        // }else if(name === 'price'){
        //     data.price = value;
        // }else if(name === 'reason'){
        //     data.reason = value
        // }else if(name === 'photo'){
            // data ={
                data.idSeller= cookies.Cr787980
                data.game="Valorant"
                data.header= document.getElementById('header').value
                data.price=  document.getElementById('price').value
                // data.emailStatus= document.getElementById('emailStatus').outerText
                // region: document.getElementById('chooseRegion'),
                // data.changeNameStatus= document.getElementById('changeNameStatus').outerText
                data.totalVP=  document.getElementById('totalVP').value
                // data.rank=  document.getElementById('rank').outerText
                data.reason= document.getElementById('reason').value
                data.level= document.getElementById('level').value
                data.battlepass= document.getElementById('battlePass').value
                data.agent= agent
                data.skin= skin
                data.status= true
                // data.photo= []
            // }

            // let arrayPhoto = [];
            // countTextfield.forEach((element , index) => {
            //     const value = document.getElementById(`linkImage${element}`).value;
            //     arrayPhoto.push((value === "")? "https://react.semantic-ui.com/images/wireframe/image.png" : value);
            //     if(index === countTextfield.length-1){
            //         data.photo = arrayPhoto;
            //     }
            // });
            // data.photo = arrayPhoto;

        // }
        sendData();
      }
  

      function sendData(){
        if(dataUpdate){
            props.data(data , 'update' , 'Valorant');
        }else{
            props.data(data , imageOut , 'Valorant');
        }
    }

      function getData(datanya , from){
          if(from === 'skin'){
              skin = datanya
          }else if(from === 'agent'){
              agent = datanya
          }
        changeValue(datanya, from);
        // console.log(datanya)
        sendData();
      }

    //   async function uploadImage(e){
    //     let arrayData = []
    //     let files = e.target.files
    //     for(let i = 0; i < files.length; i++){
    //         arrayData.push(files[i])
    //     }

    //     let pushData = async()=>{
    //         arrayData.map((datanya , index)=>{
    //             let inputPhotoData = 'https://cdn.discordapp.com/attachments/830080342026092566/' + datanya.name.replace("=", "/");
    //             data.photo.push(inputPhotoData);
    //         })
    //     }
        
    //     pushData().then(()=>{
    //         renderImage();
    //         sendData();
    //     });
    //   }

    //   function renderImage(){
    //       setInputImage(
    //         <div className="container-image-sell-account-valorant">
    //             {data.photo.map((data , index)=>{
    //                 return(
    //                     <span key={index}>
    //                         <Image src={data} />
    //                         <CloseButton aria-label="Hide" />
    //                     </span>
    //                 )
    //             })}
    //     </div>
    //       )
    //   }
      
      let [inputImage , setInputImage] = React.useState(
        <>
          <Icon name='image outline' />
          No image are listed for this customer.
        </>
        );

    return(
        <div className="sell-account-valorant">
            <div className="left">
                <div>
                    <h6>Title</h6>
                    <Input placeholder='Title Product' id="header" autoComplete="off" onChange={(e)=>changeValue(e, 'header')}/>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Email Status</h6>
                        <Dropdown clearable id="emailStatus" value={emailStatusValue} options={emailStatus} selection placeholder="None" onChange={(e)=>{setEmailStatusValue(e.target.outerText);data.emailStatus = e.target.outerText;changeValue(e, 'email-status')}}/>
                    </div>
                    <div>
                        <h6>Region</h6>
                        <Dropdown clearable id="chooseRegion" value={chooseRegionValue} options={chooseRegion} selection placeholder="None" onChange={(e)=>{setChooseRegionValue(e.target.outerText);data.region = e.target.outerText;changeValue(e, 'region')}} />
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Rank</h6>
                        <Dropdown clearable id="rank" value={rankValue} options={rank} selection placeholder="None" onChange={(e)=>{setRankValue(e.target.outerText);data.rank = e.target.outerText;changeValue(e, 'rank')}} />
                    </div>
                    <div>
                        <h6>Level</h6>
                        <Input placeholder='Level Account' id="level" type="number" onChange={(e)=>changeValue(e, 'level')} />
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Battlepass</h6>
                        <Input placeholder='Battlepass' autoComplete="off" id="battlePass" onChange={(e)=>changeValue(e, 'battlepass')} />
                    </div>
                    <div className="format">
                        <h6>Total VP</h6>
                        <Input labelPosition='right' type='text' placeholder='Total VP'>
                            <input className="total-vp" id="totalVP" type="number" name="Total-VP" onChange={(e)=>changeValue(e, 'total-vp')} />
                            <Label>VP</Label>
                        </Input>
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Change Name Status</h6>
                        <Dropdown clearable options={changeName} value={changeNameValue} id="changeNameStatus" selection placeholder="None" onChange={(e)=>{setChangeNameValue(e.target.outerText);data.changeNameStatus = e.target.outerText;changeValue(e, 'change-name-status')}} />
                    </div>
                    <div className="format">
                        <h6>Price</h6>
                        <Input labelPosition='right' type='text' placeholder='Price'>
                            <Label basic>Rp.</Label>
                            <input className="price" type="number" id="price" name="price" onChange={(e)=>changeValue(e, 'price')} />
                            <Label>.00</Label>
                        </Input>
                    </div>
                </div>
                <div>
                    <h6>Reason to Sell</h6>
                    <Input placeholder='Reason to Sell Product' autoComplete="off" id="reason" onChange={(e)=>changeValue(e, 'reason')} />
                </div>
            </div>
            <div className="right">
                <div>
                    <h6>Add Image</h6>
                    <div>
                        <Segment>
                            <Header icon>
                                {/* {inputImage} */}
                                {/* <img src={imagePreview} alt="" /> */}
                                    {contentImage}
                                    {/* {imagePreview.length}
                                    {imagePreview.map((data , index)=> {
                                        return(
                                            <span key={index}>
                                                <Image src={data} />
                                                <CloseButton aria-label="Hide" />
                                            </span>
                                        )
                                    })} */}
                            </Header>
                            <Button primary onClick={function(){ document.getElementById("inputAddImage").click()}}>
                                {(dataUpdate)?
                                <input id="inputAddImage" className="input-add-image" type="file" accept="image/*" onChange={validateImg}/>
                                :
                                <input id="inputAddImage" className="input-add-image" type="file" accept="image/*" onChange={validateImg} multiple/>
                                }
                                add image
                            </Button>
                        </Segment>
                    </div>
                </div>
                {/* <div>
                    <h6>Link Image</h6>
                    {text}
                    <div className="button-add-image-container">
                        <Button className="button-add-image" primary onClick={minusCount}>
                            Remove Link Image
                        </Button>
                        <Button className="button-add-image" primary onClick={plusCount}>
                            Add Link Image
                        </Button>
                    </div>
                </div> */}
                <div>
                    <h6>Your Account Skin</h6>
                    <DropdownSkinValorant dataSelect={getData} checkUpdate={checkUpdate} />
                </div>
                <div>
                    <h6>Your Account Agent</h6>
                    <DropdownAgentValorant dataSelect={getData} checkUpdate={checkUpdate} />
                </div>
            </div>
        </div>
    );
}

export default SellAccountValorant;