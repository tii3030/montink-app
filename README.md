# Montink - E-commerce Platform

![Montink Banner](https://via.placeholder.com/1920x1080/1e293b/ffffff?text=Montink+E-commerce)  

## 📌 Visão Geral

Montink é uma plataforma de e-commerce moderna construída com Next.js, oferecendo uma experiência de compra fluida com recursos avançados como:

- Visualização detalhada de produtos
- Integração com API de CEP
- Carrosséis de imagens responsivos
- Gerenciamento de acesso via Clerk
- UI/UX cuidadosamente projetada

## ✨ Demonstração

### Página de Produto
![Página de Produto](https://via.placeholder.com/800x600/1e293b/ffffff?text=Product+Page)  
*Visualização do produto com carrossel de imagens e seletor de opções*

### Integração CEP
![Busca por CEP](https://via.placeholder.com/800x400/1e293b/ffffff?text=CEP+Integration)  
*Funcionalidade de busca de endereço via CEP*

### Carrossel de Produtos
![Carrossel de Produtos](https://via.placeholder.com/800x400/1e293b/ffffff?text=Product+Carousel)  
*Carrossel responsivo de produtos relacionados*

## 🛠️ Tecnologias Principais

| Tecnologia | Descrição |
|------------|-----------|
| ![Next.js](https://img.shields.io/badge/Next.js-19-000000?logo=next.js) | Framework React para renderização híbrida |
| ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) | Biblioteca para construção de interfaces |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwind-css) | Framework CSS utilitário |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript) | Superset JavaScript tipado |
| ![Clerk](https://img.shields.io/badge/Clerk-6.19-000000?logo=clerk) | Autenticação e gerenciamento de usuários |
| ![Zustand](https://img.shields.io/badge/Zustand-5.0-000000) | Gerenciamento de estado |
| ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.56-EC5990?logo=react-hook-form) | Manipulação de formulários |

## 🚀 Funcionalidades

### Principais
- **Visualização de Produto Avançada**
  - Carrossel de imagens interativo
  - Zoom e troca de imagem principal
  - Detalhes completos do produto

- **Integração com ViaCEP**
  - Busca automática de endereço
  - Validação de CEP
  - Exibição de informações de entrega

- **UI Responsiva**
  - Layout adaptável para todos dispositivos
  - Transições suaves e animações
  - Design system consistente

### Em Desenvolvimento
- [ ] Painel administrativo
- [ ] Cadastro de produtos
- [ ] Catálogo completo
- [ ] Sistema de pedidos
- [ ] Integração com pagamentos

## 🏗️ Estrutura do Projeto

```bash
src/
├── app/                   # Rotas da aplicação
├── components/            # Componentes reutilizáveis
│   ├── ui/                # Componentes de UI primitivos
│   ├── product/           # Componentes específicos de produto
│   └── ...                # Outros componentes
├── constants/             # Dados estáticos e mockados
├── lib/                   # Utilitários e helpers
├── types/                 # Tipos TypeScript
└── styles/                # Estilos globais
```

## � Como Executar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/tii3030/montink.git
   cd montink
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` baseado no `.env.example` e adicione suas chaves de API.

4. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 🛠️ Scripts Úteis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento |
| `pnpm build` | Gera build para produção |
| `pnpm start` | Inicia servidor de produção |
| `pnpm lint` | Executa análise estática do código |
| `pnpm format` | Formata o código automaticamente |

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## ✉️ Contato

Tiago - [@tii3030](https://github.com/tii3030)  
Projeto: [https://github.com/tii3030/montink](https://github.com/tii3030/montink)

---

<div align="center">
  <sub>Feito com ❤️ por Tiago | Seja livre para usar e modificar</sub>
</div>