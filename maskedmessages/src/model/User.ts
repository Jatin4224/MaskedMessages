import mongoose, { schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  message: Message[];
}

const UserSchema: Schema<Message> = new schema({
  username: {
    type: string,
    required: ["true, u"],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
