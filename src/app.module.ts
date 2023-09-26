import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TodoModule } from './modules/todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './modules/user/user.entity';
import { Todo } from './modules/todo/todo.entity';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as dotenv from "dotenv";


@Module({
  imports: [
    UserModule,
    TodoModule,
    GraphQLModule.forRoot<ApolloDriverConfig>(
      {
        autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
        driver: ApolloDriver,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }
    ),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'vedant',
        database: 'db2',
        autoLoadEntities: true,
        // entities: [Student, Todo],
      }
    ),
  ],


})
export class AppModule { }
