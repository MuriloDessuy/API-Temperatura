# 🚀 Projeto Laravel – Guia de Instalação e Execução

Este documento explica como configurar, instalar e executar o ambiente de desenvolvimento do projeto Laravel.

---

## 📦 Requisitos

Certifique-se de ter instalado:

- PHP 8.2+
- Composer
- MySQL ou PostgreSQL
- Node.js 18+ e NPM
- Extensões PHP necessárias (pdo, mbstring, openssl, tokenizer etc.)

---

## 🧱 1. Clonar o Projeto

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```
## ⚙️ 2. Instalar Dependências do Backend
bash
Copiar código
composer install
## 📝 3. Criar o Arquivo .env
```bash
Copiar código
cp .env.example .env
Edite o .env e configure:
```

Banco de dados (DB_DATABASE, DB_USERNAME, DB_PASSWORD)

Configurações gerais da aplicação

## 🔑 4. Gerar a Chave da Aplicação
```bash
Copiar código
php artisan key:generate
```

## 🧬 5. Rodar Migrations (e Seeders, se houver)
Apenas migrations:

```bash
Copiar código
php artisan migrate
Migrations + seeds:
```
```bash
Copiar código
php artisan migrate --seed
```
## 📦 6. Instalar Dependências do Front-end
```bash
Copiar código
npm install
```

## 🎨 7. Compilar os Assets
Ambiente de desenvolvimento:

```bash
Copiar código
npm run dev
Build de produção:
```

```bash
Copiar código
npm run build
```

## ▶️ 9. Rodar o Servidor Laravel
```bash
Copiar código
php artisan serve
Acesse:
```

cpp
Copiar código
http://127.0.0.1:8000

## 🔧 Comandos Úteis
Limpar cache:

```bash
Copiar código
php artisan optimize:clear
Criar link simbólico para o storage:
```

```bash
Copiar código
php artisan storage:link
Atualizar dependências:
```

```bash
Copiar código
composer update
npm update
```
