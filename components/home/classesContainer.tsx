import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"
import Heading from "../heading";
import ClassCard from "../cards/classCard";

const CardEl = styled("section")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:grid;

 
grid-template-columns:${(isMobile || isTablet)?"1fr":"repeat(3,1fr)"};
 grid-gap :30px;
background:#F1F1F1;
width:${(isMobile || isTablet)?"100%":"80%"};

`)

const ClassContainerEl = styled("section")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:flex;
flex-direction:column;
align-items:center;
background:#F1F1F1;

`)
const SubTitleEl = styled("span")<{}>(({})=>`
font-size:18px;
color:#3A3A3A;
font-weight:200;
line-height:30px;
margin-top:20px;
margin-bottom:20px;
width:80%;
`)



const ButtonEl = styled("a")<{}>(({})=>`
border-radius:20px;
border:1px solid #1698DA;
color:#3A3A3A;
font-weight:400;
background:transparent;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
margin-bottom:20px;
width:200px;
height:40px;
cursor:pointer;

`)


const ClassContainer = ()=>{
    const list = [
        {title:"Yoga",name:"frank",img:"./images/c3.jpg",time:"8:00Am - 11:00 Am"},
        {title:"Karate",name:"john",img:"./images/c2.jpg",time:"6:00Pm - 8:00 Pm"},
        {title:"Exercise",name:"jenny",img:"./images/c1.jpg",time:"3:00Pm - 7:00 Pm"},
    ];

    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <ClassContainerEl isMobile={isMobile} isTablet={isTablet} >
               <Heading title="Our Classes" />
                 <SubTitleEl >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</SubTitleEl>
 
 <CardEl isMobile={isMobile} isTablet={isTablet}>
 {list.map((item:any,index:number)=>  <ClassCard  key={index} {...item}/>)}
              
      
 </CardEl>
           <Link href={"#"}>
                <ButtonEl href={"#"}>View All Classes</ButtonEl>
                </Link>
        </ClassContainerEl>
    )
}
export default  ClassContainer;