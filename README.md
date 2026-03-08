# Projeto-Angular, Manuel Esteves



## Descrição do Projeto:

Esta aplicação foi desenvolvida em Angular e tem como objetivo gerir uma coleção de álbuns musicais.
Permite adicionar, visualizar, editar e remover álbuns, bem como consultar estatísticas em tempo real através de um dashboard.

A aplicação utiliza LocalStorage para simular persistência de dados e Angular Material para a interface gráfica.

---

# Funcionalidades

##  Dashboard (Home)

A página inicial apresenta indicadores (KPIs) calculados em tempo real:

* **Total de álbuns**
* **Média das classificações**
* **Género mais presente na coleção**
* **Percentagem de vinys já possuidos**
* **Número de álbuns adicionados na última semana**

Também inclui um componente de destaque:

* **Último álbum adicionado**, mostrando título, banda e data de adição.

---

##  Gestão de Álbuns (CRUD)

A aplicação permite gerir a coleção através de uma página de listagem:

### Listagem

* Tabela com todos os álbuns registados
* Ordenação de colunas
* Indicador visual da posse em Vinyl **possui / não possui**
* Botões de ação para:

  * Ver detalhes
  * Editar
  * Apagar
---

### Criar Álbum

Formulário com **Reactive Forms** e validações:

Campos disponíveis:

* Título
* Banda
* Género
* Ano
* URL da capa
* Classificação
* Vinyl (possuo disco em vinyl ou não)
* Notas

---

## Instalação e Execução

1. Clonar o repositório:
   git clone <url-do-repositório>

2. Instalar dependências:
   npm install

3. Correr o projeto:
   ng serve

4. Abrir no browser:
   http://localhost:4200

