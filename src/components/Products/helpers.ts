type Record<K extends string, T> = {
    [P in K]: T;
}

export class Filter{
    item: Record<string,any>
    filter:string
    constructor({item,filter }:{item:object,filter:string}){
        this.item = item
        this.filter = filter.toLocaleLowerCase()
    }
    _checkString(value:string){
        return value.toLocaleLowerCase().includes(this.filter)
    }
    check(){
        const item = this.item
        for (const [key, value] of Object.entries(item)) {
            if(typeof value === 'string'&& this._checkString(value)) return true
      
          }
    }
    checkArrBy(fieldName:string,cb:(x:any)=>string){
        const item = this.item
        if(item.hasOwnProperty(fieldName) && Array.isArray(item[fieldName])){
            try{
                let isExist = false
                item[fieldName].map(cb).forEach((a:string)=>{
                    if( a.includes(this.filter)) isExist = true
                })
                return isExist
            }catch{
                console.log('something go wrong class Filter, checkArrBt ')
                return false
            }
        }
        return false
    }
}