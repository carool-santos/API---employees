import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()

export class Employee extends Document{

   @Prop()
   contract_type: string

   @Prop()
   document: string

   @Prop()
   name: string

   @Prop()
   job_Title: string

   @Prop()
   email: string

   @Prop()
   telefone_1: string

   @Prop()
   telefone_2: string
    
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);