import { useEffect, useState } from "react";
import SolLaunchpadDetailMainContainer from "./components/main.container";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectDetailById } from "../../redux/services/project";
import { ProjectDetail } from "../../types";
import { APP_ROUTES } from "../../constants";
import { useBlockLatest } from "../../hooks/useState";

const SolLaunchpadDetailPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [projectSelected, setProjectSelected] = useState<ProjectDetail | undefined>(undefined);
    const blockNumber = useBlockLatest();
    console.log('block - Number', blockNumber);
    

    useEffect(() => {
        if(!params) return navigate(APP_ROUTES.HOMEPAGE.path, { replace: true });;
        const id = params.id;
        if(!id) return;
        //get project detail from api and pass it to the main container component
        getProjectDetailById(id).then((data) => {
            setProjectSelected(data)
        }).catch((error) => {
            console.log(error);
        })
    }, [params, blockNumber])
   


    return <SolLaunchpadDetailMainContainer projectSelected={projectSelected}/>
}
export default SolLaunchpadDetailPage