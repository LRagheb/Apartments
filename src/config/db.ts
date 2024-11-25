import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/apartmentsApp';
  try {
    const conn = await mongoose.connect(dbUri, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
