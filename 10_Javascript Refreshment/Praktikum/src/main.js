// Mengambil nilai input dari form
const form = document.querySelector('.needs-validation');
const productName = document.getElementById('productname');
const productCategory = document.querySelector('.form-select');
const productFreshness = document.querySelectorAll('input[name="flexRadioDefault"]');
const productImage = document.getElementById('productimage');
const productDescription = document.getElementById('Description');
const productPrice = document.getElementById('productprice');
const submitButton = document.getElementById('submit');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Validasi Product Name
    if (productName.value.trim() === '') {
        productName.classList.add('is-invalid');
        alert('Please enter a valid Product Name.');
    } else if (/[#@{}]/.test(productName.value)) {
        productName.classList.add('is-invalid');
        alert('Product Name must not contain symbols.');
    } else if (productName.value.length > 25) {
        productName.classList.add('is-invalid');
        alert('Product Name must not exceed 25 characters.');
    }
    // Validasi Product Category
    else if (productCategory.value === 'Choose...'){
        productCategory.classList.add('is-invalid');
        alert('Please select a valid Product Category.');
    }
    // Validasi Product Freshness
    else if (!productFreshness[0].checked && !productFreshness[1].checked && !productFreshness[2].checked){
        productFreshness[0].classList.add('is-invalid');
        productFreshness[1].classList.add('is-invalid');
        productFreshness[2].classList.add('is-invalid');
        alert('Please select Product Freshness.');
    }
    // Validasi Product Image
    else if (productImage.value === '') {
        productImage.classList.add('is-invalid');
        alert('Please upload an Image of the Product.');
    }
    // Validasi Product Description
    else if (productDescription.value.trim() === '') {
        productDescription.classList.add('is-invalid');
        alert('The Additional Description field must be filled in.');
    }
    // Validasi Product Price
    else if (productPrice.value.trim() === '') {
        productPrice.classList.add('is-invalid');
        alert('Please enter a valid Product Price.');
    }
    else if (submitButton) {
        // Menampilkan pesan alert dengan nilai yang diambil dari form
        const message = `<h1 style="font-size: 24px; text-align: center; font-weight: bold;">Submit Success!</h1><br> Product Name: ${productName.value} <br> Product Category: ${productCategory.value} <br> Product Freshness: ${productFreshness[0].value} <br> Product Image: ${productImage.value} <br> Product Description: ${productDescription.value} <br> Product Price: ${productPrice.value}`;

        // Menampilkan alert
        const alertElement = document.getElementById("alert");
        alertElement.innerHTML = message;
        alertElement.removeAttribute("hidden"); 
    }
});
