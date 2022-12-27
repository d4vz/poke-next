export interface iPokemonList {
  name: string;
  url: string;
  image: string;
}

interface Form {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}
export interface IPokemon {
  base_experience: number;
  forms: Form[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: any[];
  sprites: Sprites;
  weight: number;
}
