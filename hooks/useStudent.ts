import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, query } from "firebase/firestore";

import {User, Student} from "./types";


export const useStudents = (id : string) => {
    const [students, loading, error] = useCollectionData<Student>(query(
        collection(db, "classes", id, "students") as CollectionReference<Student>
        ));

    return {
        students: students || [],
        loading,
    }
}

export const useStudent = (id: string) => {
    const [student, loading, error] = useCollectionData<Student>(query(
        collection(db, "students", id) as CollectionReference<Student>
    ));
    return{
        student: student || [],
        loading,
    }
}

