create table entry (
    id uuid primary key default gen_random_uuid(),
    text text not null,
    date date default now()
);
