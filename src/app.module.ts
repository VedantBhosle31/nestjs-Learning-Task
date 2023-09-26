import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './modules/todo/todo.entity';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as dotenv from 'dotenv';
import { StudentModule } from './modules/student/student.module';

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
      password: 'siddarth',
      database: 'db',
      autoLoadEntities: true,
      // entities: [Student, Todo],
    }),
  ],
})
export class AppModule {}
