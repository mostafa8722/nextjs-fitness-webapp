import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"



const FooterEl = styled("div")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:grid;

 
 margin-bottom:10px;
 padding-bottom:20px;
grid-template-columns:${(isMobile || isTablet)?"1fr":"repeat(5,1fr)"};
 grid-gap :20px;
background:#ffffff;
width:${(isMobile || isTablet)?"100%":"100%"};

`)

const FooterContainerEl = styled("footer")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:flex;
flex-direction:column;
align-items:center;
background:#F1F1F1;

`)


const CopyRightEl = styled("span")(()=>`
 display:flex;
flex-direction:column;
align-items:center;
color:#454545;
font-weight:bold;
font-size:1rem;

`)


const LinkEl = styled("a")<{color?:string,hover:string,top?:string}>(({hover,top,color})=>`
  font-size:0.8rem;
  width:100%;
  color:${color?color:"blue"};
  margin-top:${top?top:"0px"};
  font-weight:600;
  &:hover{
    color:${hover};
  }
`)

const DesignerEl=styled("div")(()=>`
 display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin:10px;
`)

const DesignerTextEl = styled("span")(()=>`



color:#454545;
width:290px;
font-size:0.8rem;

`)


const TitleEl = styled("h3")(()=>`



color:#454545;

font-size:0.9rem;
margin-bottom:10px;

`)

const LinkBoxEl = styled("div")(()=>`
display:flex;
flex-direction:column;
text-align:center;
`)



const Footer = ()=>{
  

    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <FooterContainerEl isMobile={isMobile} isTablet={isTablet} >
          <FooterEl isMobile={isMobile} isTablet={isTablet}  >
           
           <LinkBoxEl>
           <TitleEl>About Us</TitleEl>
           <Link href={"#"}>
              <LinkEl href="#" top="10px" color="#565656" hover="#ff2200">Our history</LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Our Team </LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Achievments</LinkEl>
           </Link>
           </LinkBoxEl>

           <LinkBoxEl>
           <TitleEl>About Us</TitleEl>
           <Link href={"#"}>
              <LinkEl href="#" top="10px" color="#565656" hover="#ff2200">Our history</LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Our Team </LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Achievments</LinkEl>
           </Link>
           </LinkBoxEl>
           <LinkBoxEl>
           <TitleEl>About Us</TitleEl>
           <Link href={"#"}>
              <LinkEl href="#" top="10px" color="#565656" hover="#ff2200">Our history</LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Our Team </LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Achievments</LinkEl>
           </Link>
           </LinkBoxEl>
           <LinkBoxEl>
           <TitleEl>About Us</TitleEl>
           <Link href={"#"}>
              <LinkEl href="#" top="10px" color="#565656" hover="#ff2200">Our history</LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Our Team </LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Achievments</LinkEl>
           </Link>
           </LinkBoxEl>
           <LinkBoxEl>
           <TitleEl>About Us</TitleEl>
           <Link href={"#"}>
              <LinkEl href="#" top="10px" color="#565656" hover="#ff2200">Our history</LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Our Team </LinkEl>
           </Link>
           <Link href={"#"}>
              <LinkEl href="#"  top="10px"   color="#565656" hover="#ff2200">Achievments</LinkEl>
           </Link>
           </LinkBoxEl>


          </FooterEl>
            <CopyRightEl>CopyRight @ {new Date().getFullYear()} .All Right reserved</CopyRightEl>
             <DesignerEl>
                <DesignerTextEl>Designed and Developed by </DesignerTextEl>
                <LinkEl hover="#ff2200" href="https://mostafanazarband.vercel.app">Mostafa Nazarband</LinkEl>
             </DesignerEl>
        </FooterContainerEl>
    )
}
export default  Footer;