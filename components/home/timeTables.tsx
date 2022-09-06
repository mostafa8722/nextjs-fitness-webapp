import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"
import Heading from "../heading";




const TimeTableEl = styled("section")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:flex;
flex-direction:column;
align-items:center;
background:#ffffff;

margin-bottom:30px;

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

const TableEl = styled("div")<{
    isMobile:boolean,isTablet:boolean,
    height:string,borderTop?:string
}>(({isMobile,isTablet,height,borderTop})=>`
 display:grid;
 grid-template-columns : repeat(8,1fr);
  height:${height};
  border:1px solid #eeeeee;
  border-top:${borderTop?borderTop:"1px solid #eeeeee"};
 

width:${(isMobile || isTablet)?"80%":"80%"};

`)
const TableTitleEl = styled("span")
<{bg:string,color:string,weight:string}>(({bg,color,weight})=>`
color:${color};
font-size:0.8rem;
font-weight:${weight};
display:flex;
background:${bg};
align-items:center;
justify-content:center;
flex-direction:column;
`)





const TimeTable = ()=>{
    const title = [
     "Time",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
     "Sunday",
    ];

    const schecule1 = 
      
    [{title:"8:00 Am"},
{title:"Excercise",name:"jenny",time:"8:00 Am - 11:00 Am"},
{title:"",name:"",time:""},
{title:"Excercise",name:"jenny",time:"8:00 Am - 11:00 Am"},
{title:"",name:"",time:""},
{title:"Excercise",name:"jenny",time:"8:00 Am - 11:00 Am"},
{title:"",name:"",time:""},
{title:"Excercise",name:"jenny",time:"8:00 Am - 11:00 Am"},
];
    

const schecule2 = 
      
[{title:"12:00 Pm"},
{title:"",name:"",time:""},
{title:"Karate",name:"frank",time:"12:00 Pm - 03:00 Pm"},
{title:"",name:"",time:""},
{title:"Karate",name:"frank",time:"12:00 Pm - 03:00 Pm"},
{title:"",name:"",time:""},
{title:"Karate",name:"frank",time:"12:00 Pm - 03:00 Pm"},
{title:"",name:"",time:""},

];

const schecule3 = 
      
[{title:"4:00 Pm"},
{title:"Yoga",name:"jane",time:"4:00 Pm - 7:00 Pm"},
{title:"",name:"",time:""},
{title:"Yoga",name:"jane",time:"4:00 Pm - 7:00 Pm"},
{title:"",name:"",time:""},
{title:"Yoga",name:"jane",time:"4:00 Pm - 7:00 Pm"},
{title:"",name:"",time:""},
{title:"Yoga",name:"jane",time:"4:00 Pm - 7:00 Pm"},
];
    
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <TimeTableEl isMobile={isMobile} isTablet={isTablet} >
               <Heading title="Class Timetable" />
                 <SubTitleEl >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</SubTitleEl>
 
                <TableEl isMobile={isMobile} isTablet={isTablet} height="40px">
                    {
                        title.map((item:string)=><TableTitleEl
                        color="#454545"
                        weight="bold"
                        bg="#ffffff" key={item} >{item}</TableTitleEl>)
                    }
                </TableEl> 

                 <TableEl isMobile={isMobile} isTablet={isTablet} height="100px" borderTop="0px">
                    {
                        schecule1.map((item:any,index:number)=><TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#8C9EDB"} key={index} >
                            <TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#8C9EDB"} key={index} >
                               {item.title}
                        </TableTitleEl>
                        <TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#8C9EDB"} key={index} >
                             {item.name}
                        </TableTitleEl>
                           </TableTitleEl>)
                    }
                </TableEl>   

                <TableEl isMobile={isMobile} isTablet={isTablet} height="100px" borderTop="0px">
                    {
                        schecule2.map((item:any,index:number)=><TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#F76C73"} key={index} >
                            <TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#F76C73"} key={index} >
                               {item.title}
                        </TableTitleEl>
                        <TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#F76C73"} key={index} >
                             {item.name}
                        </TableTitleEl>
                           </TableTitleEl>)
                    }
                </TableEl> 

                <TableEl isMobile={isMobile} isTablet={isTablet} height="100px" borderTop="0px">
                    {
                        schecule3.map((item:any,index:number)=><TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#DBAADD"} key={index} >
                            <TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#DBAADD"} key={index} >
                               {item.title}
                        </TableTitleEl>
                        <TableTitleEl
                        color={index==0?"#454545":"#ffffff"}
                        weight="300"
                        bg={(item.title=="" ||  index==0)?"#ffffff":"#DBAADD"} key={index} >
                             {item.name}
                        </TableTitleEl>
                           </TableTitleEl>)
                    }
                </TableEl> 


        
        </TimeTableEl>
    )
}
export default  TimeTable;