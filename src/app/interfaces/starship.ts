export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    next: string | null;
    previous: string | null;
    url: string;
}
