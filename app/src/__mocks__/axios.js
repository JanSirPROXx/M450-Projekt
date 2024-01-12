export default {
    get: jest.fn(() => Promise.resolve({
      data: ['1234', '1222', '2323'],
    })),
    post: jest.fn(() => Promise.resolve({ data: { success: true } })),
    // Fügen Sie andere Methoden nach Bedarf hinzu
  };