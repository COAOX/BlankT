export class Type {
}

export class Structs {
    name: string
    base: string
    fields: []
    constructor(name: string, base: string, fields: []) {
        this.name = name;
        this.base = base;
        this.fields = fields;
    }
}

export class Actions {
    name: string
    type: string
    payable: boolean
    constructor(name: string, type: string, payable: boolean) {
        this.name = name;
        this.type = type;
        this.payable = payable;
    }
}

export class Tables {
}