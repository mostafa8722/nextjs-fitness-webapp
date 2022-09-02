import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"

const HeroEl = styled("section")<{img:string}>(({img})=>`
 height:500px;
 position:relative;
 
 background-image : url(${img}) ;
 background-size:cover;
 background-repeat : no-repeat ;
 background-position-x :70% ;
 background-position-y :70% ;

`)

const ContainerTextEl = styled("div")<{}>(()=>`
 display:flex;
     flex-direction:column;
     max-width: 620px;
    margin-top: 100px;
    margin-left: 100px;
`)
const TitleEl = styled("h2")<{}>(({})=>`
font-size:24px;
color:#3A3A3A;
font-weight:300;
line-height:30px;

`)

const SubTitleEl = styled("span")<{color:string}>(({color})=>`
font-size:40px;
color:${color};
font-weight:700;
line-height:50px;

`)
const SubTitleEl2 = styled("span")<{}>(({})=>`
font-size:24px;
color:#3A3A3A;
font-weight:400;
line-height:30px;

`)

const SubTitleContainerEl = styled("div")<{}>(({})=>`
 display:flex;
 margin-bottom:20px;

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
width:100px;
height:40px;
cursor:pointer;
`)



const Hero = ()=>{

    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));


    return (
        <HeroEl img="./images/bg_top.png">
              <ContainerTextEl>
                <TitleEl>Welcome to Workout Fitness</TitleEl>
                <SubTitleContainerEl>
                    <SubTitleEl color="#3A3A3A">Keep </SubTitleEl>
                    <SubTitleEl color="#1698DA">Fit & Stay </SubTitleEl>
                    <SubTitleEl color="#3A3A3A"> Strong All Time</SubTitleEl>
                </SubTitleContainerEl>
                <SubTitleEl2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </SubTitleEl2>
                <Link href={"#"}>
                <ButtonEl href={"#"}>Read More</ButtonEl>
                </Link>
              </ContainerTextEl>
        </HeroEl>
    )
}
export default  Hero;