import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../utils/encryption';
import { Card, Form, Input, Button, Typography, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { email: string; password: string; confirmPassword: string }) => {
    setLoading(true);
    setError('');

    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (localStorage.getItem(values.email)) {
      setError('User already exists');
      setLoading(false);
      return;
    }
    
    const encryptedPassword = encrypt(values.password);
    localStorage.setItem(values.email, encryptedPassword);
    
    setLoading(false);
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={2} style={styles.title}>Register</Title>
        
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: 24 }}
          />
        )}

        <Form
          name="register"
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
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please confirm your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
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
              Register
            </Button>
          </Form.Item>
        </Form>

        <Button 
          type="link" 
          block
          onClick={() => navigate('/login')}
        >
          Already have an account? Login
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

export default Register;