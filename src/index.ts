import {create_slug} from "./slug";

declare const window:any;




window.slugify = (title:string):string => {
  return create_slug(title);
}

export {};