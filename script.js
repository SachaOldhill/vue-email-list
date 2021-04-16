// function boxGenerator() {
//     $.ajax({
//         url: 'https://flynn.boolean.careers/exercises/api/random/boolean',
//         method: 'GET',
//         success: function(data) {
//             const res = data.response;
//             generateBox(res);
//         },
//         error: function() {
//             console.log('error');
//         }
//     });
function ajax(){
  for (var i = 0; i < 10; i++) {

  $.ajax({
     url: "https://flynn.boolean.careers/exercises/api/random/mail",
     method: "GET",
     success: function(data){
       const email = data.response;
         emails=[]
         if (!emails.includes(email)) {
           emails.push(email);
         }
         console.log(email);
         $("#append").append('<div>' + email + '</div>');
       }

     }
   );
  }
}

function init(){
  ajax();
}
$(init);
