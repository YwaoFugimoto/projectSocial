# Musify – Simulação de Rede Social para Postagem de Letras de Música

Este projeto é uma simulação de rede social voltada para o compartilhamento de letras de músicas. A aplicação permite que os usuários se cadastrem, façam login e publiquem postagens com letras de músicas. Além disso, os usuários podem atualizar suas informações de perfil, como a senha, e visualizar um feed com as postagens recentes.

## Funcionalidades

- **Cadastro de Usuário (Sign In):**  
  Permite o registro de novos usuários. As senhas são encriptadas para garantir a segurança dos dados ultilizando bcrypt.

- **Autenticação (Login):**  
  Usuários podem acessar a plataforma utilizando suas credenciais (user_login e senha) através de uma autenticação simples ultilizando jwt passport.

- **Feed de Postagens:**  
  Visualize um feed paginado com postagens de letras de músicas.

- **Atualização do Perfil:**  
  Os usuários podem alterar dados do perfil, como a senha, por meio de endpoints dedicados.

- **Interface Moderna e Responsiva:**  
  O front-end é desenvolvido com React (usando Vite e TypeScript) e estilizado com Bootstrap, garantindo uma experiência dinâmica e responsiva.

## Tecnologias Utilizadas

### Back-End

- **Node.js & Express:**  
  Criação da API REST que gerencia as operações CRUD.
- **MySQL & mysql2/promise:**  
  Banco de dados relacional para armazenar informações de usuários e postagens.
- **Middleware de Segurança:**  
  Encriptação de senhas e autenticação (usuário e senha).

### Front-End

- **React com TypeScript:**  
  Desenvolvimento da interface do usuário.
- **Vite:**  
  Ferramenta de desenvolvimento rápida e eficiente.
- **Bootstrap:**  
  Para estilização e componentes responsivos.

### Considerações

Este projeto é uma base para o desenvolvimento de uma rede social com foco em letras de músicas. Embora a autenticação seja simples (usuário/senha) e as senhas sejam encriptadas, o sistema pode ser expandido para incluir recursos mais robustos, como autenticação JWT, gerenciamento de sessões e funcionalidades adicionais.
