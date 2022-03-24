import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()

export  class EmployeeSchema extends Document{

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