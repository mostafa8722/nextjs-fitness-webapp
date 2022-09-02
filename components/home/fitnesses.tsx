import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"

const FitnessEl = styled("section")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:grid;
 grid-template-columns:${(isMobile || isTablet)?"1fr":"repeat(2,1fr)"}


`)

const ContainerTextEl = styled("div")<{}>(()=>`
 display:flex;
     flex-direction:column;
    justify-content:center;
 align-items:center;
 padding-top:50px;
 padding-bottom:50px;
 
`)

const ContainerImageEl = styled("div")<{}>(()=>`
 display:flex;
     flex-direction:column;
    justify-content:center;
 align-items:center;
 padding-top:50px;
 padding-bottom:50px;
`)

const ImageDivEl = styled("div")<{}>(()=>`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
`)
const ImageEl = styled("img")<{}>(()=>`
height:300px;
margin:5px;
`)
const TitleEl = styled("h2")<{}>(({})=>`
font-size:24px;
color:#3A3A3A;
font-weight:700;
line-height:30px;

`)


const SubTitleEl2 = styled("span")<{}>(({})=>`
font-size:18px;
color:#3A3A3A;
font-weight:200;
line-height:30px;
text-align: left;
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
width:120px;
height:40px;
cursor:pointer;
`)



const Fitness = ()=>{

    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <FitnessEl isMobile={isMobile} isTablet={isTablet} >
              <ContainerTextEl>
                <TitleEl>About Workout Fitness</TitleEl>
             
                <SubTitleEl2>
               
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip

                </SubTitleEl2>
                <Link href={"#"}>
                <ButtonEl href={"#"}>Read More</ButtonEl>
                </Link>
              </ContainerTextEl>
              <ContainerImageEl>
                <ImageDivEl>
                    <ImageEl src="./images/fitness.png" />
                </ImageDivEl>
              </ContainerImageEl>
        </FitnessEl>
    )
}
export default  Fitness;