class List {
    constructor() {
        this.memory = []
        this.length = 0
    }

    get = (address) => {
        return this.memory[address]
    }

    push = (value) => {
        this.memory[this.length] = value
        this.length++
    }

    pop = () => {
        if (this.memory[this.length] === 0) return undefined
        
        let deletedValue = this.memory.splice([this.length-1], 1)
        this.length--
        return deletedValue
    }

    unshift = (value) => {
        let previous = value

        for (let address=0; address<this.length; address++) {
            let current = this.memory[address]
            this.memory[address] = previous
            previous = current
        }

        this.memory[this.length] = previous
        this.length++
    }

    shift = () => {
        if (this.length === 0) return undefined

        let value = this.memory[0]  // --> Сохраняем значение в value

        for (let address=0; address<this.length-1; address++) {
            this.memory[address] = this.memory[address+1]
        }

        this.memory.splice(this.length-1, 1) // --> Сохраненое value поместилось в конец array, после цикла???
        this.length--
        return value
    }
}

const someArray = (arr) => {
    let listOne = new List()

    for (let i=0; i<arr.length; i++) {
        listOne.push(arr[i])
    }

    listOne.unshift(55)
    listOne.shift()

    console.log(listOne.memory)
}

someArray([1,2,3,4,5,6])