export interface CustomItemModel {
  title: string;
  description: string;
  imageLink: string;
  videoLink: string;
  date: string;
}

export class CustomItem implements CustomItemModel {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly imageLink: string,
    readonly videoLink: string,
    readonly date: string = new Date().toString(),
  ) {}
}
