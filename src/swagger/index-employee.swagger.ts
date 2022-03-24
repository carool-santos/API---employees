import { OmitType } from "@nestjs/swagger";
import { Employee } from "../schemas/employees.schema";


export class IndexEmployeeSwagger  extends OmitType(Employee,['__v']){

}