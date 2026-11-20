// console.log("hi");

 
// localStorage.setItem("name","neha");

// let cname=localStorage.getItem("name");

// console.log("cname");

// localStorage.clear;

// const CustomerList=[
//     {
//         Name:"chathu",
//         age:21,
//         Adress:"Hambantota"
//     },

//     {
//         Name:"Hiru",
//         age:20,
//         Adress:"Rathnapura"
//     },

//     {
//         Name:"hiruni",
//         age:21,
//         Adress:"Monaragala"
//     },

//     {
//         Name:"Nethra",
//         age:21,
//         Adress:"Ambilipitiya"
//     }
// ]
//  let arCustomers=JSON.stringify(CustomerList);
//  localStorage.setItem("CustomerList" , arCustomers);
//  let listCustomer=localStorage.getItem("CustomerList");
//  console.log(JSON.parse(listCustomer));

function addCustomer(){

    let CustomerId=document.getElementById("customerId").value;
    let CustomerName=document.getElementById("customerName").value;
    let CustomerAge=document.getElementById("customerAge").value;
    let CustomerAddress=document.getElementById("customerAddress").value;

    const Customer={
        custId:CustomerId,
        custName:CustomerName,
        custAge:CustomerAge,
        custAddress:CustomerAddress
    }

    saveCustomerLocalDb(Customer);
}
function saveCustomerLocalDb(Customer){

    if(localStorage.getItem('CustomerList')){

        let arofCustomers=JSON.parse(localStorage.getItem("CustomerList"));

        arofCustomers.push(Customer);

        localStorage.setItem("CustomerList",JSON.stringify(arofCustomers));

    }else{

        const CustomerList=[];

        CustomerList.push(Customer);

        let arCustomers=JSON.stringify(CustomerList);

        localStorage.setItem("CustomerList",arCustomers);

    }
}