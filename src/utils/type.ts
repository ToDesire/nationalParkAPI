export type createEventParam = {
    event_start_date: Date;
    event_end_date: Date;
    event_description: string;
}

export type createActivityParam = {
    activity_name: string;
    activity_description: string;
}

export type createSpecieParam = { 
    specie_name: string;
    specie_description: string;
    specie_type: string;
}