class CacheItem{
      constructor(key,value,live) {
          this.key = key
          this.value = value
         this.liveCount = live
      }

}
class Cache {

  constructor() {
    this.array = []
      }

    getValue(key){
        let index = this.findItem(key)
        let item = this.array[index]

      if (index!=-1 ) {

      if (item.liveCount==0) {
       this.array.splice(index)
      return null
      }

            item.liveCount-=1
          return item.value

          }
       return null
    }

    set(key,value,live){
     let index = this.findItem(key)
        let item = this.array[index]
         console.log(item)

        if (index==-1){

          if (live===undefined){
            this.array.push(new CacheItem(key, value, 1))
            } else {
            this.array.push(new CacheItem(key, value, live))
            }

        } else {

           if (live===undefined){
           array[index] = new CacheItem (key, value, 1)
            } else {
           array[index] = new CacheItem (key, value, live)
            }
        }

    }

    findItem(key){
        return this.array.findIndex(it=>it.key===key)
    }

    getLifeCount(key){
     let index = this.findItem(key)
        let item = this.array[index]
         console.log(item)

        if (index==-1) return undefined
       return item.liveCount
    }

    getStats(key){
             let index = this.findItem(key)
        let item = this.array[index]
        if (index==-1) return
        return  'Ключ: ' + item.key + ' значение: '+ item.value + ' число обращений: ' + item.liveCount

   }

   }

//   cache = new Cache()
//   cache.set("sdf1", "sfdssfd",3)
//      cache.set("sdf11", 2)
//       cache.get("sdf1")
//   cache.getStats()
export {Cache}