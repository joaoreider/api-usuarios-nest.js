import { IsEmail, IsNotEmpty, isNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email.-unico.validator";


export class AtualizaUsuarioDTO{


    @IsNotEmpty({message: 'O nome não pode ser vazio.'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message: 'O email informado não é válido.'})   
    @EmailEhUnico({message: 'Email já cadastrado'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'A senha deve ter 6 ou mais caracteres'})
    @IsOptional()
    senha: string;
}