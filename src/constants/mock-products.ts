// src/data/mock-products.ts

import { Product } from './data';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Camiseta Básica Masculina',
    description: 'Camiseta básica de algodão para o dia a dia.',
    created_at: '2023-11-12T08:30:00Z',
    updated_at: '2023-12-10T10:00:00Z',
    category: 'Roupas',
    price: 59.99,
    old_price: 79.99,
    query: 't-shirt',
    colors: ['bg-blue-500', 'bg-gray-800'],
    ratings: 4.5,
    sizes: [
      { value: 'P', label: 'P' },
      { value: 'M', label: 'M' },
      { value: 'G', label: 'G' }
    ]
  },
  {
    id: 2,
    name: 'Tênis Esportivo Feminino',
    description: 'Tênis confortável e moderno para atividades físicas.',
    created_at: '2023-09-01T08:30:00Z',
    updated_at: '2023-10-15T10:00:00Z',
    category: 'Calçados',
    price: 199.99,
    old_price: 229.99,
    query: 'sports-shoes',
    colors: ['bg-pink-500', 'bg-white'],
    ratings: 4.8,
    sizes: [
      { value: '35', label: '35' },
      { value: '36', label: '36' },
      { value: '37', label: '37' }
    ]
  },
  {
    id: 3,
    name: 'Jaqueta de Couro Masculina',
    description: 'Jaqueta de couro sintético com estilo urbano.',
    created_at: '2023-07-21T08:30:00Z',
    updated_at: '2023-09-05T10:00:00Z',
    category: 'Roupas',
    price: 349.99,
    old_price: 399.99,
    query: 'leather-jacket',
    colors: ['bg-black', 'bg-brown-700'],
    ratings: 4.7,
    sizes: [
      { value: 'M', label: 'M' },
      { value: 'G', label: 'G' },
      { value: 'GG', label: 'GG' }
    ]
  },
  {
    id: 4,
    name: 'Relógio Minimalista',
    description: 'Design limpo e moderno, pulseira de couro.',
    created_at: '2023-11-12T08:30:00Z',
    updated_at: '2024-01-02T10:00:00Z',
    category: 'Acessórios',
    price: 399.99,
    old_price: 419.99,
    query: 'watches',
    colors: ['bg-black', 'bg-brown-600'],
    ratings: 4.9,
    sizes: [
      { value: 'GRANDE', label: 'G' },
      { value: 'X-GRANDE', label: 'GG' }
    ]
  },
  {
    id: 5,
    name: 'Mochila de Viagem',
    description: 'Mochila grande para viagens e aventuras.',
    created_at: '2023-08-15T08:30:00Z',
    updated_at: '2023-09-12T10:00:00Z',
    category: 'Acessórios',
    price: 149.99,
    old_price: 169.99,
    query: 'backpack',
    colors: ['bg-gray-800', 'bg-green-700'],
    ratings: 4.3,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 6,
    name: 'Fone de Ouvido Sem Fio',
    description: 'Fone Bluetooth com cancelamento de ruído.',
    created_at: '2023-06-18T08:30:00Z',
    updated_at: '2023-08-22T10:00:00Z',
    category: 'Eletrônicos',
    price: 299.99,
    old_price: 349.99,
    query: 'headphones',
    colors: ['bg-black', 'bg-white'],
    ratings: 4.6,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 7,
    name: 'Cadeira Ergonômica',
    description: 'Cadeira confortável para home office.',
    created_at: '2023-09-03T08:30:00Z',
    updated_at: '2023-09-18T10:00:00Z',
    category: 'Móveis',
    price: 499.99,
    old_price: 549.99,
    query: 'office-chair',
    colors: ['bg-gray-900', 'bg-blue-600'],
    ratings: 4.8,
    sizes: [{ value: 'M', label: 'M' }]
  },
  {
    id: 8,
    name: 'Sofá Retrátil 3 Lugares',
    description: 'Sofá confortável e com tecido de alta qualidade.',
    created_at: '2023-05-23T08:30:00Z',
    updated_at: '2023-06-12T10:00:00Z',
    category: 'Móveis',
    price: 1899.99,
    old_price: 2199.99,
    query: 'sofa',
    colors: ['bg-beige-700', 'bg-gray-600'],
    ratings: 4.4,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 9,
    name: 'Mesa de Jantar de Madeira',
    description: 'Mesa de jantar de 6 lugares em madeira maciça.',
    created_at: '2023-04-10T08:30:00Z',
    updated_at: '2023-05-15T10:00:00Z',
    category: 'Móveis',
    price: 2499.99,
    old_price: 2799.99,
    query: 'dining-table',
    colors: ['bg-brown-800', 'bg-black'],
    ratings: 4.7,
    sizes: [{ value: '6L', label: '6 Lugares' }]
  },
  {
    id: 10,
    name: 'Camiseta Polo Masculina',
    description: 'Camiseta polo com tecido leve e confortável.',
    created_at: '2023-10-02T08:30:00Z',
    updated_at: '2023-10-15T10:00:00Z',
    category: 'Roupas',
    price: 99.99,
    old_price: 129.99,
    query: 'polo-t-shirt',
    colors: ['bg-blue-600', 'bg-gray-400'],
    ratings: 4.2,
    sizes: [
      { value: 'M', label: 'M' },
      { value: 'G', label: 'G' }
    ]
  },
  {
    id: 11,
    name: 'Boné New Era',
    description: 'Boné esportivo estilo New Era.',
    created_at: '2023-09-12T08:30:00Z',
    updated_at: '2023-09-20T10:00:00Z',
    category: 'Acessórios',
    price: 129.99,
    old_price: 149.99,
    query: 'cap',
    colors: ['bg-black', 'bg-red-600'],
    ratings: 4.4,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 12,
    name: 'Camisa Xadrez Masculina',
    description: 'Camisa de manga longa estilo xadrez para o inverno.',
    created_at: '2023-11-05T08:30:00Z',
    updated_at: '2023-12-01T10:00:00Z',
    category: 'Roupas',
    price: 159.99,
    old_price: 199.99,
    query: 'plaid-shirt',
    colors: ['bg-red-700', 'bg-blue-500'],
    ratings: 4.1,
    sizes: [
      { value: 'M', label: 'M' },
      { value: 'G', label: 'G' }
    ]
  },
  {
    id: 13,
    name: 'Relógio Digital Masculino',
    description: 'Relógio com design moderno e display digital.',
    created_at: '2023-07-25T08:30:00Z',
    updated_at: '2023-08-15T10:00:00Z',
    category: 'Acessórios',
    price: 249.99,
    old_price: 289.99,
    query: 'digital-watch',
    colors: ['bg-black', 'bg-silver-700'],
    ratings: 4.6,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 14,
    name: 'Bolsa Feminina de Couro',
    description: 'Bolsa de couro com alça ajustável e compartimentos internos.',
    created_at: '2023-09-15T08:30:00Z',
    updated_at: '2023-09-22T10:00:00Z',
    category: 'Acessórios',
    price: 299.99,
    old_price: 349.99,
    query: 'leather-bag',
    colors: ['bg-brown-500', 'bg-black'],
    ratings: 4.3,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 15,
    name: 'Tênis Casual Feminino',
    description: 'Tênis confortável para uso diário.',
    created_at: '2023-10-05T08:30:00Z',
    updated_at: '2023-10-12T10:00:00Z',
    category: 'Calçados',
    price: 179.99,
    old_price: 199.99,
    query: 'casual-shoes',
    colors: ['bg-white', 'bg-gray-600'],
    ratings: 4.7,
    sizes: [
      { value: '36', label: '36' },
      { value: '37', label: '37' }
    ]
  },
  {
    id: 16,
    name: 'Cadeira Gamer',
    description: 'Cadeira ergonômica para longas sessões de jogo.',
    created_at: '2023-06-20T08:30:00Z',
    updated_at: '2023-07-10T10:00:00Z',
    category: 'Móveis',
    price: 699.99,
    old_price: 799.99,
    query: 'gaming-chair',
    colors: ['bg-blue-800', 'bg-black'],
    ratings: 4.8,
    sizes: [{ value: 'UNICA', label: 'Única' }]
  },
  {
    id: 17,
    name: 'Camiseta Estampada Feminina',
    description: 'Camiseta com estampas modernas para o verão.',
    created_at: '2023-06-05T08:30:00Z',
    updated_at: '2023-06-25T10:00:00Z',
    category: 'Roupas',
    price: 79.99,
    old_price: 99.99,
    query: 'graphic-t-shirt',
    colors: ['bg-yellow-500', 'bg-pink-400'],
    ratings: 4.5,
    sizes: [
      { value: 'P', label: 'P' },
      { value: 'M', label: 'M' },
      { value: 'G', label: 'G' }
    ]
  },
  {
    id: 18,
    name: 'Sapatênis Masculino',
    description: 'Sapatênis casual para o dia a dia.',
    created_at: '2023-07-17T08:30:00Z',
    updated_at: '2023-08-07T10:00:00Z',
    category: 'Calçados',
    price: 179.99,
    old_price: 219.99,
    query: 'casual-shoes',
    colors: ['bg-brown-600', 'bg-white'],
    ratings: 4.6,
    sizes: [
      { value: '39', label: '39' },
      { value: '40', label: '40' },
      { value: '41', label: '41' }
    ]
  },
  {
    id: 19,
    name: 'Smartwatch Fitness Pro',
    description:
      'Monitoramento de saúde, resistência à água e conectividade completa.',
    created_at: '2023-09-21T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
    category: 'Eletrônicos',
    price: 899.99,
    old_price: 1099.99,
    query: 'smartwatch',
    colors: ['bg-gray-800', 'bg-blue-500'],
    ratings: 4.7,
    sizes: [
      { value: 'MEDIUM', label: 'M' },
      { value: 'LARGE', label: 'L' }
    ]
  },
  {
    id: 20,
    name: 'Tênis Esportivo Ultra Boost',
    description:
      'Ideal para corridas, com amortecimento superior e respirabilidade.',
    created_at: '2023-08-15T09:00:00Z',
    updated_at: '2024-02-02T12:00:00Z',
    category: 'Calçados',
    price: 499.9,
    old_price: 549.9,
    query: 'running shoes',
    colors: ['bg-white', 'bg-red-500'],
    ratings: 4.5,
    sizes: [
      { value: 'SMALL', label: 'P' },
      { value: 'MEDIUM', label: 'M' }
    ]
  },
  {
    id: 21,
    name: 'Jaqueta Corta-Vento Explorer',
    description:
      'Resistente à água, leve e perfeita para trilhas ou uso urbano.',
    created_at: '2023-11-01T11:00:00Z',
    updated_at: '2024-01-20T10:00:00Z',
    category: 'Roupas',
    price: 329.9,
    old_price: 399.9,
    query: 'windbreaker jacket',
    colors: ['bg-yellow-400', 'bg-black'],
    ratings: 4.2,
    sizes: [
      { value: 'LARGE', label: 'G' },
      { value: 'X-LARGE', label: 'GG' }
    ]
  },
  {
    id: 22,
    name: 'Relógio Minimalista Couro',
    description: 'Estilo elegante com pulseira de couro e mostrador clean.',
    created_at: '2023-11-12T08:30:00Z',
    updated_at: '2024-01-02T10:00:00Z',
    category: 'Acessórios',
    price: 399.99,
    old_price: 419.99,
    query: 'minimalist watch',
    colors: ['bg-black', 'bg-brown-600'],
    ratings: 4.9,
    sizes: [
      { value: 'LARGE', label: 'G' },
      { value: 'X-LARGE', label: 'GG' }
    ]
  },
  {
    id: 23,
    name: 'Bolsa de Couro Elegante',
    description:
      'Ideal para o dia a dia, com amplo espaço interno e alça ajustável.',
    created_at: '2023-12-01T14:00:00Z',
    updated_at: '2024-01-10T11:30:00Z',
    category: 'Acessórios',
    price: 799.9,
    old_price: 899.9,
    query: 'leather bag',
    colors: ['bg-brown-700', 'bg-gray-900'],
    ratings: 4.6,
    sizes: [
      { value: 'MEDIUM', label: 'M' },
      { value: 'LARGE', label: 'G' }
    ]
  }
];
