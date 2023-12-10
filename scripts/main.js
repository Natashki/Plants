//Выбор города в контактах
document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
    const dropDownBtn = dropDownWrapper.querySelector('.city_contacts_btn');
    const dropDownList = dropDownWrapper.querySelector('.dropdown_cities');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown_item'); 
    const input = dropDownWrapper.querySelector('.dropdown_input_hidd');
    const city = document.querySelector('.city');
    const phone = document.querySelector('.phone');
    const adress= document.querySelector('.adress');
    const infoContact = document.querySelector('.info_contact')
     


    dropDownBtn.addEventListener('click',function(){
        dropDownList.classList.toggle('dropdown_cities--visible');
        this.classList.add('city_contacts_btn--active')
        document.getElementById("arrow_acc").src="/image/drop_btn.svg";
    });
    
    dropDownListItems.forEach(function(listItem){
        listItem.addEventListener('click', function(e){
            e.stopPropagation();
            document.querySelector('.choose_city').innerText = this.innerText;
            dropDownBtn.focus();
            input.value = this.dataset.value;
            dropDownList.classList.remove('dropdown_cities--visible');
            document.querySelector('.city_contacts_btn').classList.toggle('city_contacts_btn--it');
            city.innerText = this.innerText;
            document.getElementById("arrow_acc").src="/image/accordion_btn_city.svg";
            switch (input.value) {
                case 'canandaigua':
                    phone.innerText = '+1	585	393 0001';
                    adress.innerText = '151 Charlotte Street';
                    break;
                case "new_york": 
                    phone.innerText = '+1	212	456 0002';
                    adress.innerText = '9 East 91st Street';
                    break;
                case "yonkers": 
                    phone.innerText = '+1	914	678 0003';
                    adress.innerText = '511 Warburton Ave';
                    break; 
                case "sherrill":
                    phone.innerText = '+1	315	908 0004';
                    adress.innerText = '14 WEST Noyes BLVD';
                    break;
                default:
                    console.log('default');
            }
            infoContact.classList.add('info_contact--visible')
        });
    });
    
    document.addEventListener('click', function(e){
        if(e.target !== dropDownBtn ){
            dropDownBtn.classList.remove('city_contacts_btn--active');
            dropDownList.classList.remove('dropdown_cities--visible');
            document.getElementById("arrow_acc").src="/image/accordion_btn_city.svg";
        }
        
    });
    
    document.addEventListener('keydown', function(e){
        if(e.key === 'Tab' || e.key === 'Escape'){
            dropDownBtn.classList.remove('city_contacts_btn--active');
            dropDownList.classList.remove('dropdown_cities--visible');
            document.getElementById("arrow_acc").src="/image/accordion_btn_city.svg";
        }
    });


});


//Размытие блоков

const gardenBtn = document.querySelector('.garden_btn');
const lawnBtn = document.querySelector('.lawn_btn');
const plantingBtn = document.querySelector('.planting_btn');
const listGardenItem = document.querySelectorAll('.garden');
const listLawnItem = document.querySelectorAll('.lawn');
const listPlantingItem = document.querySelectorAll('.planting');
const listItemService = document.querySelectorAll('.item_service');
const listBtnService = document.querySelectorAll('.btn_service_item');
var timesClickG = 0;
var timesClickL = 0;
var timesClickP = 0;

gardenBtn.addEventListener('click', function(){
    if(timesClickG === 0){
        console.log(timesClickG);
        listBtnService.forEach(function(listItem){
            listItem.classList.remove('btn_service_item--active');
        });
        listItemService.forEach(function(listItem){
            listItem.classList.add('blur_item');
        });
        this.classList.add('btn_service_item--active');
        listGardenItem.forEach(function(listItem){
            listItem.classList.remove('blur_item');
        });
        timesClickG ++;
    }else if(timesClickG === 1 ){
        console.log(timesClickG);
        
        listItemService.forEach(function(listItem){
            listItem.classList.remove('blur_item');
        });
        this.classList.remove('btn_service_item--active')
        timesClickG --;
    } 
});

lawnBtn.addEventListener('click', function(){
    if(timesClickL === 0){
        listBtnService.forEach(function(listItem){
            listItem.classList.remove('btn_service_item--active');
        });
        listItemService.forEach(function(listItem){
            listItem.classList.add('blur_item');
        });
        this.classList.add('btn_service_item--active');
        listLawnItem.forEach(function(listItem){
            listItem.classList.remove('blur_item');
        }); 
        timesClickL ++;
    }else if(timesClickL === 1 ){
        console.log(timesClickG);
        
        listItemService.forEach(function(listItem){
            listItem.classList.remove('blur_item');
        });
        this.classList.remove('btn_service_item--active')
        timesClickL --;
    }        
});

plantingBtn.addEventListener('click', function(){
    if(timesClickP === 0){
        listBtnService.forEach(function(listItem){
            listItem.classList.remove('btn_service_item--active');
        });
        listItemService.forEach(function(listItem){
            listItem.classList.add('blur_item');
        });
        this.classList.toggle('btn_service_item--active');
        listPlantingItem.forEach(function(listItem){
            listItem.classList.remove('blur_item');
       });
        timesClickP ++;
    }else if(timesClickP  === 1 ){
        console.log(timesClickG);
        
        listItemService.forEach(function(listItem){
            listItem.classList.remove('blur_item');
        });
        this.classList.remove('btn_service_item--active')
        timesClickP --;
    }    
});

//Открытие блоков с ценой тарифов
document.querySelectorAll('.price_wrap').forEach(function(dropDownWrapper){

    const itemsBtnPrice =  dropDownWrapper.querySelectorAll('.btn_price');
    const input = dropDownWrapper.querySelector('.inv_value');
    const itemsPriceDrop = dropDownWrapper.querySelectorAll('.price_drop');
    const basicDrop = dropDownWrapper.querySelector('.price_basic--active');
    const standartDrop = dropDownWrapper.querySelector('.price_standart--active');
    const proDrop = dropDownWrapper.querySelector('.price_pro--active');

    itemsBtnPrice.forEach(function(listItem){
        
        listItem.addEventListener('click', function(e){
          
            this.classList.toggle('btn_price--active');
            console.log(input.value);
            
            input.value = this.dataset.value;

            switch (input.value) {
                case 'basics':
                    
                    basicDrop.classList.toggle('price_basic--active--visible');
                    // dropDownWrapper.getElementById("arrow_basics").src="/image/accordion_btn_2.svg";
                    break;
                case "standart":
                    
                    standartDrop.classList.toggle('price_standart--active--visible');
                    // dropDownWrapper.getElementById("arrow_standart").src="/image/accordion_btn_2.svg";
                    break;
                case "pro": 
                    
                    proDrop.classList.toggle('price_pro--active--visible');
                    // dropDownWrapper.getElementById("arrow_pro").src="/image/accordion_btn_2.svg";
                    break; 
                
            }
            
        });
    });

});