

import projects from '../../constants/project/project.json';
import { solaUtils } from "../../services/blockchain";
import { ProjectDetail } from "../../types";
type GetProjectType = {
    openingProjects: ProjectDetail[],
    closeProjects: ProjectDetail[],
    comingProject: ProjectDetail[]
}

export const getIdoProjects = async (): Promise<any> => {
    try {
        const res = projects.data;
        //@ts-ignore
        const contractAddresses = res.filter((project: ProjectDetail) => project.contract !== null && project.state !== "C").map((project: ProjectDetail) => project.contract);
 
        const info = await handleGetProjects(contractAddresses);

        //@ts-ignore
        const data = res.map((project: ProjectDetail): ProjectDetail => {
            if (project.contract !== null && project.state !== "C") {
                return {
                    ...project,
                    ...info[project.contract]
                }
            }
            return project;
        });
        return data;

    } catch (error) {
        console.log(error);
        return []

    }
}
export const getProjectDetailById = async (id: number | string): Promise<any | null> => {
    try {
        //@ts-ignore
        const res = projects.data.find((project: ProjectDetail) => String(project.id) === String(id));
        if (res === undefined) return null;
        const contract = res.contract;
        if (contract === null) return res;
        const info = await solaUtils.getProjectDetail(contract);
        console.log("getProjectDetail", info);

        return {
            ...res,
            ...info
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}


const handleGetProjects = async (contractAddresses: string[]): Promise<any> => {
    if (contractAddresses.length === 0) return [];

    let info = {}
    for (const contract of contractAddresses) {
        console.log("contract", contract);

        const idoInfo = await solaUtils.getProjectDetail(contract);
        //@ts-ignore
        info[contract] = idoInfo;
    }
    return info;
}

