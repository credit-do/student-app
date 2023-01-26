import { Timestamp } from "firebase/firestore";

export interface Lesson {
    id: string;
	title: string;
	lengthHours: number;
    dueDate: Date;
	completed: boolean;
    week: number

}

export interface WeeklyLessons {
    weekNumber: number
    lessons: Lesson[]
}

// gonna need to parse this
export interface Goal {
    type: string
    id: string
    title: string 
    location: string | null
    reason: string | null
    dueDate: Date
    completed: boolean
}

export interface LessonData {
    title: string,
    week: number,
    id: string,
    text: string
}

// Type revision on 1/15/2023

export interface User{
    id: string,
    type: string,
    profilePicture: string,
    firstName: string,
    username: string
}

export interface Teacher{
    id: string,
    firstName: string,
    lastName: string,
    prefix: string,
    email: string,
    school: string,
}

export interface Student{
    id: string,
    firstName: string,
    lastName: string,
    parentEmail: string,
    classId: string,
    personalGoals: PersonalGoal[],
    completedLessons: string[]
}

export interface PersonalGoal{
    id: string,
    description: string,
    type: string,
    completed: boolean,
    dueDate: Date,
}

export interface StudentMetaData{
    id: string,
    name: string,
    lessonProgress: number,
    hours: number,
    events:string[]
}
export interface Class{
    id: string,
    name: string,
    teacherId: string,
    students: StudentMetaData[],
    joinCode: string,
    events: string[]
    lessons: string[]
}

// export interface Lesson{
//     id: string,
//     title: string,
//     lengthHours: number,
//     subject: string,
//     dueDate: Date,
//     content: string,
// }

export interface Event{
    id: string,
    classes: string[],
    title: string,
    address: string,
    startDate: Date,
    endDate: Date,
    pictureUrl: string,
    teams: Team[],
}

export interface Team{
    id: string,
    classId: string,
    name: string,
    progress: number,
    students: string[],
    goals: EventGoal[],
}

export interface EventGoal{
    id: string,
    description: string,
    completed: boolean,
}