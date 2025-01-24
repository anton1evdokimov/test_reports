import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { decrypt } from '../utils/encryption';
import { Card, Form, Input, Button, Typography, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    setError('');
    
    const storedPassword = localStorage.getItem(values.email);
    
    if (!storedPassword) {
      setError('User not found');
      setLoading(false);
      return;
    }

    const decryptedPassword = decrypt(storedPassword);
    
    if (values.password === decryptedPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userEmail', values.email);
      
      navigate('/reports', { 
        state: { 
          isAuthenticated: true,
          userEmail: values.email 
        }
      });
    } else {
      setError('Invalid password');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={2} style={styles.title}>Login</Title>
        
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: 24 }}
          />
        )}

        <Form
          name="login"
          onFinish={handleSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        <Button 
          type="link" 
          block
          onClick={() => navigate('/register')}
        >
          Don't have an account? Register now
        </Button>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    padding: '24px'
  },
  card: {
    width: '100%',
    maxWidth: 400,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center' as const,
    marginBottom: 32
  }
};

export default Login;