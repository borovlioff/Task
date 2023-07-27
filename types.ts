
export type TaskId = string;


export interface Task{
    id:TaskId,
    title:string,
    description:string
}

export interface newTask{
    title:string,
    description?:string
}


export interface GetTasksPayload{
    limit?:number
}

export interface GetTaskByIdPayload{
    id:TaskId
}

export interface CreateTaskPayload extends newTask{

}

export interface UpdateTaskPayload{
    id:TaskId,
    title?:string,
    description?:string
}

export interface DeleteTaskPayload{
    id:TaskId
}

export enum TaskActionTypes {
	getTasks = "getTasks",
	getTaskById = "getTaskById",
	createTask = "createTask",
	DELETE_TASK = "delete_task",
	updateTask = "updateTask",
}