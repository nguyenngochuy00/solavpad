import { useEffect, useState } from "react";
import SolLaunchpadMainContainer from "./components/main.container";
import { ProjectDetail } from "../../types";
import { getIdoProjects } from "../../redux/services/project";
import { useBlockLatest } from "../../hooks/useState";

const SolLaunchpadPage = () => {
    //get project from api and pass it to the main container component
    const [projects, setProjects] = useState<ProjectDetail[]>([]);
	const blockNumber = useBlockLatest();
    useEffect(()=>{
        getIdoProjects().then((data) => {
            setProjects(data)
        }).catch((error) => {
            console.log(error);
        })
    },[blockNumber])

    
    return <SolLaunchpadMainContainer projects={projects}/>
}
export default SolLaunchpadPage