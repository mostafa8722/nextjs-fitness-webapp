import { Stack, styled } from "@mui/system";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"
import {nav} from "../../data/data"
import {AiOutlineMenu} from "react-icons/ai"


const HeaderEl = styled("header")(()=>`
background:#ffffff;
height:10hv;
box-shadow : 0 5px 30px rgb(0 22 84 / 10%);
position:sticky;
top:0px;
z-index:999;


`);
const LogoEl = styled("div")(()=>``);
const RightEl = styled("div")(()=>``);
const MenuEl = styled("div")(()=>`
  
`);

const NavEl = styled("div")(()=>`
display:flex;
align-items:center;

`);

const NavUlEl = styled("ul")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
display:flex;
align-items:center;
flex-direction:${(isMobile||isTablet)?"column":"row"};
position:${(isMobile||isTablet)?"absolute":"relative"};
top:${(isMobile||isTablet)?"40px":"0px"};
left:0px;
background:${(isMobile||isTablet)?"#ccc":"unset"};
width:${(isMobile||isTablet)?"100%":"auto"};
padding:10px;
margin:0px;

`);
const NavItemEl = styled("li")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
padding:5px 10px;
width:${(isMobile||isTablet)?"100%":"auto"};

display:flex;

`);

const LinkEl = styled("a")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
  font-size:1.35rem;
  width:100%;
  &:hover{
    color:${isMobile ||  isTablet?'#ffffff':'#17a335'};
  }
`)
const AiOutlineMenuEl =styled(AiOutlineMenu)(()=>`
display:flex;
height:40px;
color:#454545;
margin-right:20px;
cursor:pointer;
`)
const Header = ()=>{
    const [navList ,setNavList] = useState(false);
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    useEffect(()=>{

       
        if(isMobile || isTablet)
        setNavList(false);
    },[isTablet,isMobile])
    return (<>
    <HeaderEl>
     <Stack direction={(isMobile || isTablet)?"row-reverse":"row"} justifyContent="space-between" alignItems="center" >
     {(isMobile || isTablet)?<AiOutlineMenuEl onClick={()=>setNavList(!navList)} />:<></>}
     
        <LogoEl></LogoEl>
        <MenuEl></MenuEl>
    
        {
            !navList && (isMobile || isTablet) ?<></> :
            <NavEl>
            <NavUlEl isMobile={isMobile} isTablet={isTablet}>
               {
                  nav.map((item:any,index:number)=>
                  
                  <NavItemEl isMobile={isMobile} isTablet={isTablet}>
                  <Link href={item.link}>
                    <LinkEl isMobile={isMobile} isTablet={isTablet} href={item.link} >{item.title}</LinkEl>
                  </Link>
                </NavItemEl>
                  )
               }
            </NavUlEl>
          </NavEl>
           }
        <RightEl></RightEl>
     </Stack>
    </HeaderEl>
  
    </>);
}
export default Header;
