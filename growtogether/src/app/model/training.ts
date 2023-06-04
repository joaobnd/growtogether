import { Exercise } from "./exercise";

export interface Training {
  name: string;
  muscleGroup: string;
  exercises: Exercise[];
  restTimeSeconds: number;
}
