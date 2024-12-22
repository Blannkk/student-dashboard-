export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Announcement {
  id: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  topic: string;
  dueDate: string;
  type: 'quiz' | 'assignment';
}