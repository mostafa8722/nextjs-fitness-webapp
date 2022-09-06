import { styled } from "@mui/system";
import {FaUserTie} from "react-icons/fa"
import {IoMdClock} from "react-icons/io"

const CardEl = styled("div")(()=>`
display:flex;
flex-direction:column;
background:#ffffff;

`);

const ImageEl = styled("img")(()=>`
height:200px;
object-fit:cover;

`);

const TitleEl = styled("h2")(()=>`
font-size:18px;
color:#3A3A3A;
font-weight:700;
margin: 10px;

`);

const DivierEl = styled("div")(()=>`
height:1px;
background:#F1F1F1;

`);

const BottomEl = styled("div")(()=>`
display:flex;
justify-content:space-between;
margin: 10px;

`);
const BottomContentEl = styled("div")(()=>`
display:flex;
align-items:center;

`);
const FaUserTieEl = styled(FaUserTie)(()=>`
font-size:14px;
color:#3A3A3A;
font-weight:300;

`);

const IoMdClockEl = styled(IoMdClock)(()=>`
font-size:14px;
color:#3A3A3A;
font-weight:300;

`);

const BottomTextEl = styled("span")(()=>`
font-size:14px;
color:#3A3A3A;
font-weight:300;
margin-left:0.4rem;

`);
const ClassCard =  (props:{title:string,img:string,name:string,time:string})=>{
const {title,img,name,time} = props;
    return (
    <CardEl>
    <ImageEl src={img} />
   
 
    </CardEl>
    );
}
export default ClassCard;