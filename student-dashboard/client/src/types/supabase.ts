export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      announcements: {
        Row: {
          id: string
          author_id: string
          title: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          author_id: string
          title: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          author_id?: string
          title?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      quizzes: {
        Row: {
          id: string
          title: string
          course: string
          topic: string
          due_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          course: string
          topic: string
          due_date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          course?: string
          topic?: string
          due_date?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}