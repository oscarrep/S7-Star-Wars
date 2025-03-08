import { Starship } from "./starship";

export interface StarshipRes {
    count: number;
    next: string | null;
    previous: string | null;
    results: Starship[];
}
