function handleSearch() {
    const searchInputElement = document.getElementById('search-input-field');
    const searchInputValue = searchInputElement.value;
    loadPhone(searchInputValue);
}

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const searverData= await res.json();
    displayPhones(searverData.data);
};
const displayPhones = (data) => {
console.log("Inside displayPhones function:", data);
}