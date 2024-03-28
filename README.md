# 🚀 Backend challenge

# 🧠 Contexto

O desafio será implementar uma **API** de e-commerce para venda de camisetas, canecas e adesivos que deverá ter as seguintes funcionalidades:
- [ ] Gerenciamento de produtos (criação, deleção, atualização)
- [ ] Busca de produtos com paginação e com a possibilidade de utilização de filtros
- [ ] Busca por de produto por id
- [ ] Busca de produtos por categoria

Também seria muito legal se você também implementasse:
- [ ] Gerenciamento de usuários (criação, deleção, atualização, leitura)
- [ ] Geração de pedido de compras com produtos selecionados
- [ ] Histórico de pedidos
- [ ] Permitir filtrar pedidos gerados 

## 📋 Instruções

Chegou a hora de colocar a mão na massa!

- Faça a modelagem dos dados baseando-se nas [entidades](./entidades.md)
- Utilize Typescript
- Utilize um ORM ou Query builder de sua escolha - TypeORM, Sequelize, Knex, etc
- Por favor, inclua no README as instruções de instalação do projeto (caso necessário)
- Sinta-se livre para incluir quaisquer observações

## 📋 Instruções de autorização e segurança:

###### Livre acesso
- [ ] Listagem de produtos 
- [ ] Listagem de produto pelo ID
- [ ] Criação de usuário 

###### Usuário logado
- [ ] Gerar ordem de compra && Leitura de suas ordens de compras
- [ ] Atualizar | Deletar seu próprio usuario usuario

###### Somente Administrador
- [ ] Listagem de usuarios 
- [ ] Criação | Deleção | Atualização do Produto
- [ ] Deleção | Atualização de qualquer Usuário
- [ ] Leitura (Todas) | Deleção | Atualização de ordem de compras


## ✔️ Critérios de Avaliação

Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

- Arquitetura
- Preocupação com segurança
- Padrões de código - GOF, Clean code
- Padrão de commits [Conventional](https://www.conventionalcommits.org/en/v1.0.0/)

## ❌ Não é necessário fazer tudo
O protótipo contém uma funcionalidade inteira. Não precisa fazer tudo se não conseguir, apenas o que for feito será avaliado. Foque principalmente 
em deixar as funcionalidades funcionando e o código bem bacana! 😋

## 😎 Seria legal
- Utilizar clean architecture
- Utilizar docker
- Implementar o projeto utilizando SAP CAP
- Testes unitários
- Testes de integração
- Testes de stress
- Testes e2e

---

_O desafio acima foi cuidadosamente construído para propósitos de avaliação apenas._

DOC: https://docs.oasis-open.org/odata/odata/v4.0/os/part2-url-conventions/odata-v4.0-os-part2-url-conventions.html 

# Notas do Programa:

O que não consegui concluir nas autorizaçoens:
-> Users: Edição e deleção, quando voce não é um admin, só podem ser realizados em voce mesmo.
-> Purchase-orders :  Se o user não for admin ele deve receber apenas as suas ordens de comrpas. 

-> erro no PATCH de PurchaseOrderItem

```json
{
	"error": {
		"code": "400",
		"message": "Expected uri token 'ODataIdentifier' could not be found in 'PurchaseOrderItems(74119131-6f92-49a3-acdf-96f69adc6a1b)' at position 20"
	}
}
```
