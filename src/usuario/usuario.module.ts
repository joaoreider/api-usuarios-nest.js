import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import emailEhUnicoValidator from "./validacao/email.-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, emailEhUnicoValidator]
})
export class UsuarioModule {}