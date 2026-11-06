export function createGarageStore(key, defaultsFactory){
  return {
    load(){
      try{
        const raw=JSON.parse(localStorage.getItem(key)||'null');
        return raw ? {...defaultsFactory(),...raw,profile:{...defaultsFactory().profile,...(raw.profile||{})}} : defaultsFactory();
      }catch{return defaultsFactory()}
    },
    save(value){
      try{localStorage.setItem(key,JSON.stringify(value));return {ok:true,status:'local'}}
      catch{return {ok:false,status:'offline'}}
    },
    clear(){try{localStorage.removeItem(key)}catch{}}
  };
}
