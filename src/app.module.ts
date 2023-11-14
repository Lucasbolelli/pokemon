import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TesteModule } from './teste/teste.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductModule } from './product/product.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { AttackModule } from './attack/attack.module';
import { AbilitieModule } from './abilitie/abilitie.module';
import { PokeAtkModule } from './poke_atk/poke_atk.module';
import { PokeAblModule } from './poke_abl/poke_abl.module';
import { CompetitiveModule } from './competitive/competitive.module';


@Module({
  imports: [ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        autoLoadEntities: true,
        //============================================================================
        synchronize: true // Não esquecer de colocar como FALSE antes de dar commit!!
        //============================================================================
    }),
    AbilitieModule,
    AttackModule,
    CompetitiveModule,
    PokeAblModule,
    PokeAtkModule,
    PokemonModule,
    ProductModule,
    TesteModule,
    UserModule
    
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

