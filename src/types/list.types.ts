export interface ListTypes {
  id: number; // Unique identifier for each product
  name: string; // Product name
  category: 'Транскрибация' | 'Субтитрирование' | 'Перевод'; // Category of the product
  download: string;
  source: string;
  published: Date;
  update: Date;
  status: 'Delivered' | 'Pending' | 'Canceled'; // Status of the product
}
