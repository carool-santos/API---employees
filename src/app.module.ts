import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.qhklb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [EmployeesController],
  providers: [AppService],
})
export class AppModule {}
