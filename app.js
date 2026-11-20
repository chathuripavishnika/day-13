// console.log("hi");

 
// localStorage.setItem("name","neha");

// let cname=localStorage.getItem("name");

// console.log("cname");

//localStorage.clear();

// const CustomerList=[]
//  let arCustomers=JSON.stringify(CustomerList);
//  localStorage.setItem("CustomerList" , arCustomers);
//  let listCustomer=localStorage.getItem("CustomerList");
//  console.log(JSON.parse(listCustomer));

function addCustomer(){

    
    let CustomerId = document.getElementById("customerId").value;
    let CustomerName = document.getElementById("customerName").value;
    let CustomerAge = document.getElementById("customerAge").value;
    let CustomerAddress = document.getElementById("customerAddress").value;

    const Customer = {
        custId: CustomerId,
        custName: CustomerName,
        custAge: CustomerAge,
        custAddress: CustomerAddress
    };

    saveCustomerLocalDb(Customer);

    
}
function saveCustomerLocalDb(Customer){

    if(localStorage.getItem('CustomerList')){
        console.log(true);
        let arofCustomers=JSON.parse(localStorage.getItem("CustomerList"));

        arofCustomers.push(Customer);

        localStorage.setItem("CustomerList",JSON.stringify(arofCustomers));

    }else{
        console.log(false);
        const CustomerList=[];

        CustomerList.push(Customer);

        let arCustomers=JSON.stringify(CustomerList);

        localStorage.setItem("CustomerList",arCustomers);

    }
}
localStorage.clear;