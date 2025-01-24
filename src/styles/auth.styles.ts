export const authStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    margin: '0 auto'
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    position: 'relative' as const,
    textAlign: 'center' as const
  },
  title: {
    textAlign: 'center' as const,
    color: '#333',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: '600' as const
  },
  inputGroup: {
    marginBottom: '1.5rem',
    width: '100%',
    textAlign: 'left' as const
  },
  input: {
    width: '100%',
    padding: '1rem',
    marginBottom: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box' as const,
    transition: 'all 0.2s ease-in-out',
    '&:focus': {
      borderColor: '#007bff',
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(0,123,255,0.25)'
    }
  },
  button: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '500' as const,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    marginTop: '0.5rem',
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'translateY(-1px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
  secondaryButton: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#5a6268',
      transform: 'translateY(-1px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
  error: {
    color: '#dc3545',
    textAlign: 'center' as const,
    marginBottom: '1rem',
    fontSize: '0.9rem',
    padding: '0.5rem',
    backgroundColor: 'rgba(220,53,69,0.1)',
    borderRadius: '4px',
    width: '100%'
  },
  formWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1rem'
  }
}; 