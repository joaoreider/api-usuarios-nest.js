import { IsEmail, IsNotEmpty, isNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email.-unico.validator";


export class CriaUsuarioDTO{


    @IsNotEmpty({message: 'O nome não pode ser vazio.'})
    nome: string;

    @IsEmail(undefined, {message: 'O email informado não é válido.'})
    @IsNotEmpty()
    @EmailEhUnico({message: 'Email já cadastrado'})
    email: string;

    @MinLength(6, {message: 'A senha deve ter 6 ou mais caracteres'})
    @IsNotEmpty()
    senha: string;
}