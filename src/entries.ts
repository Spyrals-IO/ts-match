export const entries = (obj: any): Array<any[]> => 
  Object.keys(obj).map(key => [key, obj[key]])
