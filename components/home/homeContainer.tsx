import { styled } from "@mui/system";
import Heros from "./heros"
import Fitnesses from "./fitnesses"
import ClassesContainer from "./classesContainer"
import TimeTables from "./timeTables"
import Trainers from "./trainers"
import Galleries from "./galleries"
import Blogs from "./blogs"
import Prices from "./prices"
import Testimonies from "./testimonies"



const HemeEl = styled("section")(()=>`
   display:flex;
   flex-direction:column;
`)
const HomeContainer = ()=>{
return (<>
<HemeEl>

   <Heros />
    <Fitnesses />
    <ClassesContainer />
    <TimeTables />
    <Trainers />
    <Galleries />
    <Blogs />
    <Prices />
    <Testimonies />

</HemeEl>
</>)
}
export default HomeContainer;