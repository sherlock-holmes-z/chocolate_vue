export const myMixIn = {
    data() {
        return {
            name: 'name已存在,不会覆盖',
            x: 'x不存在，增加'
        }
    },
    methods: {
        showName() {
            console.log(this.name)
        }
    }
}

export const myMixIn2 = {
    data() {
        return {
            y: "y不存在，增加"
        };
    }
}