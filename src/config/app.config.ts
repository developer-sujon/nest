const appConfig = () => ({
  mongo_url: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017',
});

export { appConfig };
