export class customClass {
  #name: string;

  constructor(name = "World") {
    this.#name = name;
  }

  greet(): string {
    return `Hello, ${this.#name}!`;
  }
}

export default customClass;

