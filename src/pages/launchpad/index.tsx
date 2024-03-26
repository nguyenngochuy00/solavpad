import { useEffect, useState } from "react";
import SolLaunchpadMainContainer from "./components/main.container";
import { ProjectDetail } from "../../types";
import { getIdoProjects } from "../../redux/services/project";

const SolLaunchpadPage = () => {
    //get project from api and pass it to the main container component
    const [projects, setProjects] = useState<ProjectDetail[]>([]);

    useEffect(()=>{
        getIdoProjects().then((data) => {
            setProjects(data)
        }).catch((error) => {
            console.log(error);
        })
    },[])

    
    return <SolLaunchpadMainContainer projects={projects}/>
}
export default SolLaunchpadPage