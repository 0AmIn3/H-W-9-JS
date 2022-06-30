let people = [
    {
        id: Math.random(),
        name: 'Alisher',
        carSpends: 10,
        budget: 400,
        expenses: [
            {
                title: 'food',
                total: 150
            },
            {
                title: 'friends',
                total: 30
            },
            {
                title: 'girlfriend',
                total: 120
            },
        ]
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        carSpends: 100,
        budget: 1000,
        expenses: [
            {
                title: 'food',
                total: 300
            },
            {
                title: 'friends',
                total: 500
            },
            {
                title: 'girlfriend',
                total: 10
            },
        ]
    },
    {
        id: Math.random(),
        name: 'Daler aka',
        carSpends: 10,
        budget: 900,
        expenses: [
            {
                title: 'food',
                total: 300
            },
            {
                title: 'friends',
                total: 300
            }, {
                title: 'girlfriend',
                total: 300
            },
        ]
    },
    {
        id: Math.random(),
        name: 'Shoxrux',
        carSpends: 10,
        budget: 500,
        expenses: [
            {
                title: 'food',
                total: 200
            },
            {
                title: 'friends',
                total: 150
            },
            {
                title: 'girlfriend',
                total: 215
            },
        ]
    },
    {
        id: Math.random(),
        name: 'Amir',
        carSpends: 10,
        budget: 100,
        expenses: [
            {
                title: 'food',
                total: 40
            },
            {
                title: 'friends',
                total: 50
            },
            {
                title: 'girlfriend',
                total: 0
            },
        ]
    },
    {
        id: Math.random(),
        name: 'Amina',
        carSpends: 5,
        budget: 1000,
        expenses: [
            {
                title: 'food',
                total: 200
            },
            {
                title: 'friends',
                total: 250
            },
            {
                title: 'girlfriend',
                total: 0
            }
        ]
    },
    {
        id: Math.random(),
        name: 'Amin',
        carSpends: 10,
        budget: 300,
        expenses: [
            {
                title: 'food',
                total: 150
            },
            {
                title: 'friends',
                total: 100
            },
            {
                title: 'girlfriend',
                total: 50
            },
        ]
    },
    {
        id: Math.random(),
        name: 'Zarina',
        carSpends: 10,
        budget: 400,
        expenses: [
            {
                title: 'food',
                total: 200
            },
            {
                title: 'friends',
                total: 80
            },
            {
                title: 'shopping',
                total: 120
            },
        ]
    }
]


for (let item of people) {
    let x = item.carSpends * item.budget / 100

    let totalExp = item.expenses.reduce((a,b) => {
        return a + b.total
    } , 0)
    totalExp = item.budget - (totalExp + x)

    let val = [totalExp]
    let plus = val.filter(item => item >= 0)
    let minus = val.filter(item => item < 0)
    console.log(plus , minus , item.name)
}






let delet = prompt("Which person do u want to delete?").trim().toLowerCase()

let index = people.indexOf(...people.filter(item => item.name === delet.slice(0,1).toUpperCase() + delet.slice(1)))

people.filter(item => {

    let names = item.name
    if (delet.slice(0,1).toUpperCase() + delet.slice(1)  === names) {
        let yes_no = confirm(`Вы действительно хотите удалить ${names}?`)
        if (yes_no === true) {
            people.splice(index , 1)
        } else {
            alert('Отмена')
        }
    }
})


console.log(people)







