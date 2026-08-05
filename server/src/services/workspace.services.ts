import {createWorkspaceRecord
    ,deleteWorkspaceRecord,
    updateWorkspaceRecord,
    findWorkspaceByIdAndUserId,
    findWorkspacesByUserId,
    type WorkspaceRecord,
} from "../repository/workspace.repository.js"
import { NotFoundError } from "../types/app-error.js";
import { CreateWorkspaceInput, UpdateWorkspaceInput } from "../validators/workspace.validator.js";

export function listWorkspaceByUserId(userId : string){
    return findWorkspacesByUserId(userId);
}


export async function getWorkspaceByIdForUser(
    userId : string,
    workspaceId : string
):Promise<WorkspaceRecord>{
    const workspace = await findWorkspaceByIdAndUserId(userId , workspaceId);

    if(!workspace){
        throw new NotFoundError("WorkSpace Not found")
    }

    return workspace;
}


export function createWorkspaceForUser(
    userId : string , 
    input : CreateWorkspaceInput,
){
    return createWorkspaceRecord(userId , input);
}

export async function updateWorkspaceForUser(workspaceId:string,
    userId : string,
    input : UpdateWorkspaceInput ,
) {
    await getWorkspaceByIdForUser(workspaceId , userId);
    return updateWorkspaceRecord(workspaceId , input);
}

export async function deleteWorkspaceForUser(
  workspaceId: string,
  userId: string,
) {
  await getWorkspaceByIdForUser(workspaceId, userId);
  await deleteWorkspaceRecord(workspaceId);
}

