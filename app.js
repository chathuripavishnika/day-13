// console.log("hi");

 
// localStorage.setItem("name","neha");

// let cname=localStorage.getItem("name");

// console.log("cname");

// localStorage.clear;

const CustomerList=[
    {
        Name:"chathu",
        age:21,
        Adress:"Hambantota"
    },

    {
        Name:"Hiru",
        age:20,
        Adress:"Rathnapura"
    },

    {
        Name:"hiruni",
        age:21,
        Adress:"Monaragala"
    },

    {
        Name:"Nethra",
        age:21,
        Adress:"Ambilipitiya"
    }
]
 let arCustomers=JSON.stringify(CustomerList);
 localStorage.setItem("CustomerList" , arCustomers);
 let listCustomer=localStorage.getItem("CustomerList");
 console.log(JSON.parse(listCustomer));