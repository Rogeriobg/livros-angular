import { Injectable } from '@angular/core';
import { Livro } from './livro';  // Importe a classe Livro aqui

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Use a cabeça:Java', resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO)e java", autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java como programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', autores: ['Paul Deitel', 'Harvery Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core java for the Impatient', resumo: 'Readers familiar with Horstmann’s original, two-volume “Core Java” books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries. Instead of the meticulous detail that the much larger two-volume set provides, this condensed treatment focuses on practical examples and is presented in bite-sized chunks.', autores: ['Cay Horstmann'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

