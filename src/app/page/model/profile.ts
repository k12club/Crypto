import { Pool } from "./pool";

export interface Profile{
    key?:string;
    email:string;
    wallet:string;
    username:string;
    poolname:Pool;
}