const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal =document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.close-modal');
console.log(btnOpenModal);
for (let i=0; i <btnsOpenModal.clientHeight; i++)
    console.log(btnsOpenModal[i].textContent);

const openModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for (let i=0; i< btnsOpenModal.clientHeight; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEvenetListener('keydown', function() {
    console.log(e.key);
});
if (e.key === 'Escape'){
    if(!modal.classList.contains('hidden')){
        closeModal();
    }
}
