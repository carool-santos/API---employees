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
   job_title: string

   @Prop()
   email: string

   @Prop()
   main_phone: string

   @Prop()
   second_phone: string
    
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);