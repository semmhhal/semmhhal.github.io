export interface AnimalsResponse {
    animals: Animal[];
}
export interface Animal {
    id: number;
    organization_id: string;
    url: string;
    type: string;
    species: string;
    breeds: Breeds;
    colors: Colors;
    age: string;
    gender: string;
    size: string;
    coat: string;
    name: string;
    description: string;
    photos?: (PhotosEntity)[] | null;
    videos?: (VideosEntity)[] | null;
    status: string;
    attributes: Attributes;
    environment: Environment;
    tags?: (string)[] | null;
    contact: Contact;
    published_at: string;
    distance?: null;
    _links: Links;
}
export interface Breeds {
    primary: string;
    secondary?: null;
    mixed: boolean;
    unknown: boolean;
}
export interface Colors {
    primary: string;
    secondary?: null;
    tertiary?: null;
}
export interface PhotosEntity {
    small: string;
    medium: string;
    large: string;
    full: string;
}
export interface VideosEntity {
    embed: string;
}
export interface Attributes {
    spayed_neutered: boolean;
    house_trained: boolean;
    declawed: boolean;
    special_needs: boolean;
    shots_current: boolean;
}
export interface Environment {
    children: boolean;
    dogs: boolean;
    cats: boolean;
}
export interface Contact {
    email: string;
    phone: string;
    address: Address;
}
export interface Address {
    address1?: null;
    address2?: null;
    city: string;
    state: string;
    postcode: string;
    country: string;
}
export interface Links {
    self: SelfOrTypeOrOrganization;
    type: SelfOrTypeOrOrganization;
    organization: SelfOrTypeOrOrganization;
}
export interface SelfOrTypeOrOrganization {
    href: string;
}

export type Pet = {
    id: string;
    name: string;
}
export interface AnimalChoice { title: string, value: number };

export interface Pets {
    name: string;
    breeds: {
        primary: string;
        secondary: string | null;
        mixed: boolean;
        unknown: boolean;
    };
    size: string;
    age: string;
    colors: {
        primary: string | null;
        secondary: string | null;
        tertiary: string | null;
    };
    status: string;
}
