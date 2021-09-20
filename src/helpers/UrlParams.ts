export class UrlParams{
    private params
    constructor(link:string){
        this.params = this.getAllUrlParams(link);
    }
    get(paramName:string):string|null{
        return this.params[paramName] || null
    }
    get getAll(){
        return this.params
    }
    set set({name,value}:{name:string,value:string}){
        this.params[name] = value
    }
    resetAll(){
        this.params={}
    }
    private getAllUrlParams(url:string) {
        let queryString = url.split('?')[1]
        const obj:any = {};
    
        if (!queryString) return obj
          queryString = queryString.split('#')[0];
    
          const arr = queryString.split('&');
      
          for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
            if (paramName.match(/\[(\d+)?\]$/)) {
              var key = paramName.replace(/\[(\d+)?\]/, '');
              if (!obj[key]) obj[key] = [];
              if (paramName.match(/\[\d+\]$/)) {
                  //@ts-ignore
                var index = /\[(\d+)\]/.exec(paramName)[1];
                obj[key][index] = paramValue;
              } else {
                // otherwise add the value to the end of the array
                obj[key].push(paramValue);
              }
            } else {
              // we're dealing with a string
              if (!obj[paramName]) {
                // if it doesn't exist, create property
                obj[paramName] = paramValue;
              } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                // if property does exist and it's a string, convert it to an array
                obj[paramName] = [obj[paramName]];
                obj[paramName].push(paramValue);
              } else {
                // otherwise add the property
                obj[paramName].push(paramValue);
              }
            }
            return obj
          }
        return obj;
      }
}