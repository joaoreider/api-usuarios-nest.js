import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
})
export class AppModule {}