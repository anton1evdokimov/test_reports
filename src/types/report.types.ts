export interface ReportItem {
  id: number;
  date: string;
  amount: number;
  category: string;
  status: 'completed' | 'pending' | 'cancelled';
  description: string;
}

export const sampleReportData: ReportItem[] = [
  {
    id: 1,
    date: '2024-01-15',
    amount: 150.50,
    category: 'Electronics',
    status: 'completed',
    description: 'Wireless Headphones'
  },
  {
    id: 2,
    date: '2024-01-20',
    amount: 89.99,
    category: 'Books',
    status: 'pending',
    description: 'Programming Books'
  },
  {
    id: 3,
    date: '2024-02-01',
    amount: 299.99,
    category: 'Electronics',
    status: 'completed',
    description: 'Smart Watch'
  },
  {
    id: 4,
    date: '2024-02-05',
    amount: 45.00,
    category: 'Office Supplies',
    status: 'cancelled',
    description: 'Desk Organizer'
  },
  {
    id: 5,
    date: '2024-02-10',
    amount: 199.99,
    category: 'Software',
    status: 'completed',
    description: 'Annual Subscription'
  },
  {
    id: 6,
    date: '2024-02-15',
    amount: 75.50,
    category: 'Books',
    status: 'pending',
    description: 'Design Patterns Book'
  },
  {
    id: 7,
    date: '2024-02-20',
    amount: 499.99,
    category: 'Electronics',
    status: 'completed',
    description: 'Monitor'
  },
  {
    id: 8,
    date: '2024-03-01',
    amount: 29.99,
    category: 'Office Supplies',
    status: 'completed',
    description: 'Notebook Set'
  },
  {
    id: 9,
    date: '2024-03-05',
    amount: 159.99,
    category: 'Software',
    status: 'pending',
    description: 'Development Tools'
  },
  {
    id: 10,
    date: '2024-03-10',
    amount: 399.99,
    category: 'Electronics',
    status: 'completed',
    description: 'Mechanical Keyboard'
  },
  {
    id: 11,
    date: '2024-03-15',
    amount: 55.00,
    category: 'Books',
    status: 'cancelled',
    description: 'UX Design Guide'
  },
  {
    id: 12,
    date: '2024-03-20',
    amount: 129.99,
    category: 'Software',
    status: 'pending',
    description: 'Cloud Storage Plan'
  }
]; 