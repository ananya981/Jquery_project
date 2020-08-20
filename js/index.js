$(document).ready(function(){
    var numberArray = [];
    for (i = 0; i < 10; i++) {
        var number = 0 + Math.floor(Math.random() * 992);
        numberArray.push(number);
    }
    console.log(numberArray, 'Random Number')
    getData(numberArray);
    owlCarousel();
})


function owlCarousel() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
}


function getData(numberArray) { 
    var arrayNew = [];
    path='https://picsum.photos/list'
    axios.get(path).then( 
        (response) => { 
            var result = response.data; 
            numberArray.map((val)=>{
                for (let i= 0; i<result.length; i++) {
                    if(val == i)
                    {
                        arrayNew.push(result[i])
                    }
                }             
            })
            console.log (arrayNew, 'arrayNew');
            getData1(arrayNew);
        }, 
        (error) => { 
            console.log(error); 
        } 
    ); 
    
} 


function getData1(arrayNew) {
    arrayNew.map((value)=>{
        var data = $('<div></div>').append(value.author)
        var imgData = $('<img>').attr("src", 'https://picsum.photos/200/300?image='+value.id)
        var finalData = $('<div class= "finaldata()"></div>').append(data, imgData)
        $('.owl-carousel').trigger('add.owl.carousel', [finalData]).trigger('refresh.owl.carousel');
    })
    
}

