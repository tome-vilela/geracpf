# Gerador de CPF

Este repositório contém a estrutura básica do site http://geracpf.com, um micro site que desenvolvi.

## Como funciona?

O site [Gerador de CPF](http://geracpf.com) é voltado para auxiliar desenvolvedores que precisam implementar ou testar em seus sistemas a funcionalidade de validação de números de CPF (cadastro de pessoas físicas), de acordo com a regra dos dígitos verificadores.

Para gerar um número de CPF válido (segundo essa regra) basta acessar o site e clicar no botão "Gerar Novo CPF". O resultado será exibido no caixa de texto e poderá ser facilmente copiado para uso.

Os dígitos verificadores são calculados através de um algoritmo que soma o produto de cada dígito que compõe o CPF por um peso e calcula o resto da divisão dessa soma por 11. O código fonte deste algoritmo escrito em JavaScript pode ser obtido [aqui](https://github.com/tome-vilela/geracpf/blob/master/jss/all.js).

Neste código fonte são definidas duas funções, uma para gerar um número de CPF e outra para validá-lo:

```javascript
var n = new CPF().generate();

if (new CPF().validate(n)) {
  alert('sucesso!');
}
```

O site [Gerador de CPF](http://geracpf.com/) utiliza material design em seu layout, conforme figura abaixo:

![http://imgur.com/ysMRmlB](http://i.imgur.com/ysMRmlB.png)

Apesar de ser compatível com dispositivos mobile, este site é voltado principalmente para acesso por desktops e notebooks, dado que dificilmente um desenvolvedor irá codificar através de um smartphone.

Esperamos que nosso site seja útil a vocês!

### Contato

Fique à vontade para entrar em contato através do e-mail tome.vilela@gmail.com
