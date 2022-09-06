import { styled } from "@mui/system";
import Link from "next/link"

const CardEl = styled("div")(()=>`
display:flex;



`);

const ImageEl = styled("img")(()=>`
height:250px;
width:130px;
object-fit:cover;

`);
const ContentEl = styled("div")(()=>`
height:210px;
margin-top:20px;
margin-bottom:20px;
display:flex;
flex-direction:column;
background:#ffffff;

`);

const TitleEl = styled("h2")(()=>`
font-size:18px;
color:#3A3A3A;
font-weight:700;
margin: 10px;

`);


const SubTitleEl = styled("span")<{top:string}>(({top})=>`
font-size:15px;
color:#676767;
font-weight:300;
margin: 10px;
margin-top: ${top};

`);


const ButtonEl = styled("a")<{}>(({})=>`


color:#3A3A3A;
font-weight:600;
margin-top:20px;
margin-left:20px;


cursor:pointer;

`)

const BlogCard =  (props:{title:string,img:string,name:string,time:string,body:string})=>{
const {title,img,name,time,body} = props;
    return (
    <CardEl>
    <ImageEl src={img} />
    <ContentEl>
    <TitleEl >{title}</TitleEl>
    <SubTitleEl top="1px">{time}</SubTitleEl>
    <SubTitleEl top="1px">{body}</SubTitleEl>
    <Link href={"#"}>
                <ButtonEl href={"#"}>Read More</ButtonEl>
                </Link>
    </ContentEl>

   
    </CardEl>
    );
}
export default BlogCard;