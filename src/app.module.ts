import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
//import { MongooseModule } from '@nestjs/mongoose';
import {GraphQLModule} from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';
import {Student} from './student/student.entity';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.URL_DB,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson,
        Student
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}