import { styled } from "@mui/system";
import Link from "next/link"

const CardEl = styled("div")(()=>`
display:flex;

flex-direction:column;
background:#f1f1f1;
justify-content:center;
border-radius:0.3rem;
padding-bottom:30px;
position:relative;
box-shadow: 0px 1px 2px 1px rgb(0 0 0 / 10%);
`);




const TitleEl = styled("h2")(()=>`
font-size:20px;
color:#3A3A3A;
font-weight:700;
margin: 10px;
text-align:center;
padding-top:10px;

`);

const PriceEl = styled("div")(()=>`

margin-top: 10px;
margin : 0.5rem 0.1rem 0rem 0.1rem;
background:#ffffff;
height:55px;
display:flex;

justify-content:center;
align-items:center;
`);
const PriceTagEl = styled("h2")(()=>`
font-size:20px;
color:#3A3A3A;
font-weight:700;
margin-right: 10px;

`);
const PriceTag2El = styled("h2")(()=>`
font-size:15px;
color:#3A3A3A;
font-weight:300;


`);
const PropTagEl = styled("h2")<{border?:boolean}>(({border})=>`
font-size:15px;
color:#3A3A3A;
font-weight:300;
border-top:${border?"0.05rem solid #aaa":"0rem"};
padding-top:10px;
text-align:center;

`);






const ButtonEl = styled("a")<{}>(({})=>`
border-radius:20px;

color:#3A3A3A;
font-weight:400;
background:transparent;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
margin-bottom:20px;
width:150px;
height:40px;
cursor:pointer;
position:absolute;
bottom:-35px;
background:#f1f1f1;
left:25%;
box-shadow: 0px 1px 2px 1px rgb(0 0 0 / 30%);

`)

const BlogCard =  (props:{title:string,price:string,prop:string[]})=>{
const {title,price,prop} = props;
    return (
    <CardEl>

   
    <TitleEl >{title}</TitleEl>
    <PriceEl>
        <PriceTagEl>${price}</PriceTagEl>
        <PriceTag2El>/Month</PriceTag2El>
    </PriceEl>
    {prop.map((item:string,index:number)=><PropTagEl border={index==0?false:true} key={item}>{item}</PropTagEl>)}
  
  <Link href={"#"}>
    <ButtonEl href="#">Get Started</ButtonEl>
  </Link>
   

   
    </CardEl>
    );
}
export default BlogCard;