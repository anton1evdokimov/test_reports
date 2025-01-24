import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReportItem, sampleReportData } from '../types/report.types';
import { 
  Table, 
  DatePicker, 
  Input, 
  Select, 
  Button, 
  Card, 
  Space, 
  Tag, 
  Typography 
} from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Title } = Typography;

interface FilterParams {
  dateRange: [string, string];
  category: string;
  status: string;
}

const Reports: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = location.state || {};

  const [filters, setFilters] = useState<FilterParams>({
    dateRange: [dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD')],
    category: '',
    status: ''
  });

  const [filteredData, setFilteredData] = useState<ReportItem[]>(sampleReportData);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  const handleDateRangeChange = (dates: any, dateStrings: [string, string]) => {
    setFilters(prev => ({
      ...prev,
      dateRange: dateStrings
    }));
  };

  const handleFilterChange = (value: string, name: string) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    let filtered = sampleReportData;

    if (filters.dateRange && filters.dateRange[0] && filters.dateRange[1]) {
      filtered = filtered.filter(item => 
        item.date >= filters.dateRange![0] && 
        item.date <= filters.dateRange![1]
      );
    }

    if (filters.category) {
      filtered = filtered.filter(item => 
        item.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(item => 
        item.status === filters.status
      );
    }

    setFilteredData(filtered);
  };

  const columns: ColumnsType<ReportItem> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('MM/DD/YYYY'),
      sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => a.category.localeCompare(b.category)
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toFixed(2)}`,
      sorter: (a, b) => a.amount - b.amount
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={
          status === 'completed' ? 'success' :
          status === 'pending' ? 'warning' : 'error'
        }>
          {status.toUpperCase()}
        </Tag>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: ReportItem) => (
        <Button type="link" onClick={() => console.log('View:', record)}>
          View
        </Button>
      )
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Title level={2}>Reports</Title>
        
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small" title="Filters">
            <Space wrap>
              <RangePicker
                onChange={handleDateRangeChange}
                style={{ width: 280 }}
              />
              
              <Input
                placeholder="Category"
                value={filters.category}
                onChange={(e) => handleFilterChange(e.target.value, 'category')}
                prefix={<SearchOutlined />}
                style={{ width: 200 }}
              />
              
              <Select
                style={{ width: 120 }}
                placeholder="Status"
                value={filters.status}
                onChange={(value) => handleFilterChange(value, 'status')}
                allowClear
              >
                <Select.Option value="completed">Completed</Select.Option>
                <Select.Option value="pending">Pending</Select.Option>
                <Select.Option value="cancelled">Cancelled</Select.Option>
              </Select>

              <Button 
                type="primary" 
                icon={<FilterOutlined />}
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </Space>
          </Card>

          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} items`
            }}
          />
        </Space>
      </Card>
    </div>
  );
};

export default Reports; 