export interface IQuiz {
    _id?: string;
    title: string;
    description: string;
    dueDate: Date;
    totalPoints: number;
    questions: IQuestion[];
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface IQuestion {
    questionText: string;
    options: string[];
    correctAnswer: number;
    points: number;
  }