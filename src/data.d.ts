export interface CoreConcept {
  image: string;
  title: string;
  description: string;
}

export const CORE_CONCEPTS: CoreConcept[];

export interface Example {
  title: string;
  description: string;
  code: string;
}

export const EXAMPLES: {
  [key: string]: Example;
};