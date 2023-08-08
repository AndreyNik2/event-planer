
export interface IEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  url: string;
  tag: string;
  city: string;
  priority: {name:string, number:number};
}