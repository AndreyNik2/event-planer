
export interface IEvent {
  id: number;
  name: string;
  date: string;
  description: string;
  url: string;
  tag: string;
  city: string;
  priority: {name:string, number:number};
}