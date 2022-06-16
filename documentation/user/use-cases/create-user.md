# Create User Use Case

> ## Dados
* **Name**: `John Doe`
* **Email**: `john@doe.com`
* **Password**: `123456`

> ## Fluxo primário
1. Criar usuário com dados informados

> ## Fluxo alternativo: `User already exists`
1. Verificar se o usuário já existe
2. Se existir, retornar erro

> ## Regras
**Name**
1. Não pode ser vazio
2. Deve conter apenas letras
3. Deve conter no mínimo 3 letras

**Email**
1. Não permitir criação de usuário com email já cadastrado
2. Email precisa ser válido

**Password**
1. Não permitir criação de usuário com senha menor que 6 caracteres
2. Não permitir criação de usuário com senha com menos de uma letra maiúscula
3. Não permitir criação de usuário com senha com menos de uma letra minúscula
4. Não permitir criação de usuário com senha com menos de um número
5. Não permitir criação de usuário com senha com menos de um caractere especial