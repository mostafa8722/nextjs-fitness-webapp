import { styled } from "@mui/system";


const HeadingEl = styled("div")(()=>`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`);

const TitleEl = styled("h2")(()=>`
font-size:24px;
color:#3A3A3A;
font-weight:700;
line-height:30px;
`);

const ContainerEl = styled("div")(()=>`
display:flex;
align-items:center;

`);
const ContainerLineEl = styled("div")(()=>`
width:80px;
height:2px;
background:#3A3A3A;

`);
const ContainerDotEl = styled("div")(()=>`
width:10px;
height:10px;
border-radius:50%;
background:#1698DA;
margin:0px 5px;
`);
const Heading  = (props:{title:string})=>{
    const {title}  = props;

    return (
    <HeadingEl>
       <TitleEl>{title}</TitleEl>
       <ContainerEl>
        <ContainerLineEl></ContainerLineEl>
        <ContainerDotEl></ContainerDotEl>
        <ContainerLineEl></ContainerLineEl>
       </ContainerEl>

    </HeadingEl>
    )
}
export default Heading;