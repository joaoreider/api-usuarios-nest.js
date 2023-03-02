import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";

@Injectable()
@ValidatorConstraint({ async: true})
export default class emailEhUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioExiste = await this.usuarioRepository.existeComEmail(value)
        return !usuarioExiste;
    }
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (obj: Object, propriedade: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: emailEhUnicoValidator
        })
    }

}