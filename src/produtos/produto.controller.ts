import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private readonly produtoRepository: ProdutoRepository){}

    @Post()
    async criaProduto(@Body() dadosdoProduto){

       const produtoCadastrado =  this.produtoRepository.salvar(dadosdoProduto)
       return produtoCadastrado;

    }

    @Get()
    listaProdutos() {
      return this.produtoRepository.listar();
    }
    
}