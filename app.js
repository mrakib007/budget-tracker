const totalIncome = document.getElementById('total-income');
const totalBalance = document.getElementById('total-balance');
const totalExpense = document.getElementById('total-expense');
const textItem = document.getElementById('text-item');
const numberValue = document.getElementById('number-value');
const selectItem = document.getElementById('select-item');
const inputBtn = document.getElementById('input-btn');
const tableInc = document.getElementById('table-inc');
const tableExp = document.getElementById('table-exp');

inputBtn.addEventListener('click',function(){
    let textValue = textItem.value;
    let value = numberValue.value;
    let select = selectItem.value;

    if(textValue!='' && value!=''){
        if(select=='inc'){
            let totalInc = parseFloat(totalIncome.innerText);
            totalInc += parseFloat(value);
            totalIncome.innerHTML = totalInc;
            tableInc.innerHTML += `
                <tr>
                    <td scope="row">${textValue}</td>
                    <td class="text-success inc-val">${value}</td>
                    <td><span class="text-danger del-btn">Delete</span></td>
                </tr>
            `;
        }
    if(select=='exp'){
        let totalExp = parseFloat(totalExpense.innerText);
        totalExp += parseFloat(value);
        totalExpense.innerHTML = totalExp;
        tableExp.innerHTML += `
        <tr>
            <td scope="row">${textValue}</td>
            <td class="text-success inc-val" id="inc-val">${value}</td>
            <td><span class="text-danger del-btn">Delete</span></td>
        </tr>
    `;
    }
    textItem.value = '';
    numberValue.value = '';

    const totalInc = document.getElementById('total-income');
    const totalExp = document.getElementById('total-expense');
    const totalBal = document.getElementById('total-balance');

    const income = parseFloat(totalInc.innerText);
    const expense = parseFloat(totalExp.innerText);
    const balance = income-expense;
    totalBal.innerText = balance;

    }
});

 tableInc.addEventListener('click',e=>{
     if(e.target.innerText == 'Delete'){
         const child = e.target.parentNode.parentNode;
         const childValue = parseFloat(e.target.parentNode.parentNode.childNodes[3].innerText);
         tableInc.removeChild(child);
         let totalInc = parseFloat(totalIncome.innerText);
         let totalBal = parseFloat(totalBalance.innerText);
         totalBalance.innerText = totalBal-childValue;
         totalInc = totalInc - childValue;
         totalIncome.innerText = totalInc;
     }
 });
 tableExp.addEventListener('click',e=>{
    if(e.target.innerText == 'Delete'){
        const child = e.target.parentNode.parentNode;
        const childValue = parseFloat(e.target.parentNode.parentNode.childNodes[3].innerText);
        tableExp.removeChild(child);
        let totalExp = parseFloat(totalExpense.innerText);
        let totalBal = parseFloat(totalBalance.innerText);
        totalBalance.innerText = totalBal+childValue;
        totalExp = totalExp - childValue;
        totalExpense.innerText = totalExp;
    }
});
