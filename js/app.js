const loadPhones=async(searchText)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res= await fetch(url);
    const data =await res.json();
    displayPhones(data.data)
}
const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent='';
    // display only 20 phone
    phones=phones.slice(0,20)
    // display no phone found
    const noPhone=document.getElementById('no-found-phone');
    if(phones.length===0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }
    phones.forEach(phone =>{
        const phoneDiv=document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML =`<div class="card ">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title fw-bold text-center">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug} This is a longer card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.</p>
        </div>
      </div>`;
      phoneContainer.appendChild(phoneDiv);
    });
    // Stop Loader or Spinner
    toggleSpinner(false)
}
// Handle Search Button Click
document.getElementById('btn-search').addEventListener('click',function(){
    // Start Loader or Spinner
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
loadPhones(searchText);
});
const toggleSpinner =isLoading =>{
    const loaderSection =document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
// loadPhones();