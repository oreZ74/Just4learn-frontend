export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string
    email: string;
    password: string;
    permissionLevel: number;
    lastLearningSession: Date,
    __v: number;
  }
