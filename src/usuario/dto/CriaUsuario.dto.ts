import { IsEmail, IsNotEmpty, isNotEmpty, IsString, MinLength } from "class-validator";


export class CriaUsuarioDTO{


    @IsNotEmpty({message: 'O nome não pode ser vazio.'})
    nome: string;

    @IsEmail(undefined, {message: 'O email informado não é válido.'})
    @IsNotEmpty()
    email: string;

    @MinLength(6, {message: 'A senha deve ter 6 ou mais caracteres'})
    @IsNotEmpty()
    senha: string;
}