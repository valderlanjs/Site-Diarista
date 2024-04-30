import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { join } from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      database: 'ediaristas',
      username: 'root',
      password: 'ValderlanDev20#',
      host: 'localhost',
      port: 3306,
      synchronize: false,
      type: 'mysql',
      entities: [join(__dirname, '..', '**type/*entity.{ts, js}')],
      migrations: [join(__dirname, '..', './database/migrations/*.{ts, js}')],
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
