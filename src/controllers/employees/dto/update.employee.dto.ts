import { ApiProperty } from '@nestjs/swagger'
import { Document} from 'mongoose'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateEmployeeDto extends Document{

    @ApiProperty({ description: 'Contract Type', example: 'CLT'})
    @IsString({ message: 'It has to be of type string' })
    contract_type = ''


    @ApiProperty({ description: 'Document', example: '53.854.350-X'})
    @IsString({ message: 'It has to be of type string' })
    document = ''


    @ApiProperty({ description: 'Name', example: 'Luke Skywalker'})
    @IsString({ message: 'It has to be of type string' })
    name = ''


    @ApiProperty({ description: 'Job Title', example: 'Jedi Master'})
    @IsString({ message: 'It has to be of type string' })
    job_title =''


    @ApiProperty({ description: 'email', example: 'luke.jedi@gmail.com'})
    @IsString({ message: 'It has to be of type string' })
    email =''

    @ApiProperty({ description: 'telephone', example: 306401850})
    @IsNumber()
    main_phone=''

    @ApiProperty({ description: 'telephone 2 optional', example: 33505072})
    @IsNumber()
    second_phone =''


}