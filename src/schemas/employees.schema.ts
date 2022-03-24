import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()

export class Employee extends Document{

   @ApiProperty()
   @Prop()
   contract_type: string

   @ApiProperty()
   @Prop()
   document: string

   @ApiProperty()
   @Prop()
   name: string
   
   @ApiProperty()
   @Prop()
   job_title: string

   @ApiProperty()
   @Prop()
   email: string

   @ApiProperty()
   @Prop()
   main_phone: string

   @ApiProperty()
   @Prop()
   second_phone: string
    
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);