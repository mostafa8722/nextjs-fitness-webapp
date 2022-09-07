import { styled } from "@mui/system";
import Link from "next/link"

const CardEl = styled("div")(()=>`
display:flex;
background:#fff;
height:200px;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
position:relative;

margin: 20px;
`);


const TitleEl = styled("h2")(()=>`
font-size:16px;
color:#3A3A3A;
font-weight:500;
margin: 10px;

`);


const SubTitleEl = styled("span")<{top:string}>(({top})=>`
font-size:15px;
color:#676767;
font-weight:300;
margin: 10px;
margin-top: ${top};

`);

const CircleEl = styled("span")<{top?:string}>(({top})=>`
font-size:30px;
color:#343434;
font-weight:300;
margin: 10px;

position:absolute;
top:-50px;
left:-50px;
height:70px;
width:70px;
border-radius:50%;
display:flex;
background:#fff;
font-weight:bold;
justify-content:center;
align-items:center;
flex-direction:column;
`);




const TestomonalCard =  (props:{title:string,img:string,name:string,time:string,body:string})=>{
const {name,body} = props;
    return (
    <CardEl>



    <SubTitleEl top="1px">{body}</SubTitleEl>
    <TitleEl >{name}</TitleEl>
 
    <CircleEl>&#8221;</CircleEl>


   
    </CardEl>
    );
}
export default TestomonalCard;