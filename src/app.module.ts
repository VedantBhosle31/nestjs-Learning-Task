import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { StudentModule } from './modules/student/student.module';
import * as dotenv from "dotenv";

@Module({
  imports: [
    StudentModule,
    TodoModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'vedant',
      database: 'test2',
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      // entities: [Student, Todo],
    }),
  ],
})
export class AppModule { }
