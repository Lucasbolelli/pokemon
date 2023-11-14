// import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices'
// import { Injectable } from '@nestjs/common'
// import { ConfigService } from '@nestjs/config';

// const configService = new ConfigService()

// @Injectable()
// export class MyProxy {

//   constructor(
//     private configService: ConfigService
//   ) {}

//   getClientProxyUserInstance(): ClientProxy {        

//     return ClientProxyFactory.create({
//       transport: Transport.RMQ,
//       options: {
//         //urls: [`amqp://${configService.get<string>('RABBITMQ_USER')}:${configService.get<string>('RABBITMQ_PASSWORD')}@${configService.get<string>('RABBITMQ_URL')}`],    
//         urls: [`amqp://learning:learning123@learning.leafdev.com.br:49182/learning`],
//         queue: 'user',
//       }
//     })
//   }
// }