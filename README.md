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
```bash
composer install
```
## 📝 3. Criar o Arquivo .env
```bash
cp .env.example .env
```

Edite o .env e configure:
Configurações gerais da aplicação

## 🔑 4. Gerar a Chave da Aplicação
```bash
php artisan key:generate
```

## 🧬 5. Rodar Migrations

Migrations:
```bash
php artisan migrate
```

## 📦 6. Instalar Dependências do Front-end
```bash
npm install
```

## 🎨 7. Compilar os Assets

Ambiente de desenvolvimento:
```bash
npm run dev
```

Build de produção:
```bash
npm run build
```

## ▶️ 9. Rodar o Servidor Laravel
```bash
php artisan serve
```

Acesse:
```cpp
http://127.0.0.1:8000
```

## 🔧 Comandos Úteis
Limpar cache:
```bash
php artisan optimize:clear
```

Criar link simbólico para o storage:
```bash
php artisan storage:link
```

Atualizar dependências:
```bash
composer update
npm update
```
