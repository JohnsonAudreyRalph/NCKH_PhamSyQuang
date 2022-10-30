$(document).ready(function(){
    $('.BUTTON_ON').click(function () {
      console.log("On Click");
      // let NAME = $('#id_NAME').val();
      let id = $(this).attr("data-id");
      console.log(id);
      let csrf = $("input[name=csrfmiddlewaretoken]").val();
      mydata = {sid:id, csrfmiddlewaretoken:csrf};
      $.ajax({
        url: "On_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
            if(data.status == 'On_Click')
            {
              GetJSON()
            }
            if(data.status == 'Err')
            {
              console.log('ERROR')
            }
        },
      });
    });

    $('.BUTTON_OFF').click(function () {
      console.log("Off Click");
      // let NAME = $('#id_NAME').val();
      let id = $(this).attr("data-id");
      console.log(id);
      let csrf = $("input[name=csrfmiddlewaretoken]").val();
      mydata = {sid:id, csrfmiddlewaretoken:csrf};
      $.ajax({
        url: "Off_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
          if(data.status == 'Off_Click')
          {
            GetJSON()
          }
          if(data.status == 'Err')
          {
            console.log('ERROR')
          }
        },
      });
    });
});
const IP = "http://127.0.0.1:8000/"
function GetJSON(){
  URL_JSON = IP + "WEB_SERVER/";
  fetch(URL_JSON)
    .then(response => response.json())
    .then(Device =>{
      // console.log(Device);
      Area_1__Device_1 = Device.ID_1.STATUS;
      Area_1__Device_2 = Device.ID_2.STATUS;
      Area_1__Device_3 = Device.ID_3.STATUS;
      Area_1__Device_4 = Device.ID_4.STATUS;
      Area_1__Device_5 = Device.ID_5.STATUS;
      Area_1__Device_6 = Device.ID_6.STATUS;
      Area_1__Device_7 = Device.ID_7.STATUS;
      Area_2__Device_1 = Device.ID_8.STATUS;
      Area_2__Device_2 = Device.ID_9.STATUS;
      Area_2__Device_3 = Device.ID_10.STATUS;
      Area_2__Device_4 = Device.ID_11.STATUS;
      Area_2__Device_5 = Device.ID_12.STATUS;
      Area_2__Device_6 = Device.ID_13.STATUS;
      Area_2__Device_7 = Device.ID_14.STATUS;
      Area_3__Device_1 = Device.ID_15.STATUS;
      Area_3__Device_2 = Device.ID_16.STATUS;
      Area_3__Device_3 = Device.ID_17.STATUS;
      Area_3__Device_4 = Device.ID_18.STATUS;
      Area_3__Device_5 = Device.ID_19.STATUS;
      Area_3__Device_6 = Device.ID_20.STATUS;
      Area_3__Device_7 = Device.ID_21.STATUS;
      // console.log("Trạng thái thiết bị 1: " + Area_1__Device_1)
      // console.log("Trạng thái thiết bị 2: " + Area_1__Device_2)
      // console.log("Trạng thái thiết bị 3: " + Area_1__Device_3)
      // console.log("Trạng thái thiết bị 4: " + Area_1__Device_4)
      // console.log("Trạng thái thiết bị 5: " + Area_1__Device_5)
      // console.log("Trạng thái thiết bị 6: " + Area_1__Device_6)
      // console.log("Trạng thái thiết bị 7: " + Area_1__Device_7)
      // console.log("Trạng thái thiết bị 8: " + Area_2__Device_1)
      // console.log("Trạng thái thiết bị 9: " + Area_2__Device_2)
      // console.log("Trạng thái thiết bị 10: " + Area_2__Device_3)
      // console.log("Trạng thái thiết bị 11: " + Area_2__Device_4)
      // console.log("Trạng thái thiết bị 12: " + Area_2__Device_5)
      // console.log("Trạng thái thiết bị 13: " + Area_2__Device_6)
      // console.log("Trạng thái thiết bị 14: " + Area_2__Device_7)
      // console.log("Trạng thái thiết bị 15: " + Area_3__Device_1)
      // console.log("Trạng thái thiết bị 16: " + Area_3__Device_2)
      // console.log("Trạng thái thiết bị 17: " + Area_3__Device_3)
      // console.log("Trạng thái thiết bị 18: " + Area_3__Device_4)
      // console.log("Trạng thái thiết bị 19: " + Area_3__Device_5)
      // console.log("Trạng thái thiết bị 20: " + Area_3__Device_6)
      // console.log("Trạng thái thiết bị 21: " + Area_3__Device_7)



      if(Area_1__Device_1 == 1){
        var element = document.getElementById("IMG__1");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_1 == 0){
        var element = document.getElementById("IMG__1");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_1__Device_2 == 1){
        var element = document.getElementById("IMG__2");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_2 == 0){
        var element = document.getElementById("IMG__2");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_1__Device_3 == 1){
        var element = document.getElementById("IMG__3");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_3 == 0){
        var element = document.getElementById("IMG__3");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_1__Device_4 == 1){
        var element = document.getElementById("IMG__4");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_4 == 0){
        var element = document.getElementById("IMG__4");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_1__Device_5 == 1){
        var element = document.getElementById("IMG__5");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_5 == 0){
        var element = document.getElementById("IMG__5");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_1__Device_6 == 1){
        var element = document.getElementById("IMG__6");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_6 == 0){
        var element = document.getElementById("IMG__6");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_1__Device_7 == 1){
        var element = document.getElementById("IMG__7");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_1__Device_7 == 0){
        var element = document.getElementById("IMG__7");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_2__Device_1 == 1){
        var element = document.getElementById("IMG__8");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_1 == 0){
        var element = document.getElementById("IMG__8");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_2__Device_2 == 1){
        var element = document.getElementById("IMG__9");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_2 == 0){
        var element = document.getElementById("IMG__9");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_2__Device_3 == 1){
        var element = document.getElementById("IMG__10");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_3 == 0){
        var element = document.getElementById("IMG__10");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_2__Device_4 == 1){
        var element = document.getElementById("IMG__11");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_4 == 0){
        var element = document.getElementById("IMG__11");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_2__Device_5 == 1){
        var element = document.getElementById("IMG__12");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_5 == 0){
        var element = document.getElementById("IMG__12");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_2__Device_6 == 1){
        var element = document.getElementById("IMG__13");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_6 == 0){
        var element = document.getElementById("IMG__13");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_2__Device_7 == 1){
        var element = document.getElementById("IMG__14");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_2__Device_7 == 0){
        var element = document.getElementById("IMG__14");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_3__Device_1 == 1){
        var element = document.getElementById("IMG__15");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_1 == 0){
        var element = document.getElementById("IMG__15");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_3__Device_2 == 1){
        var element = document.getElementById("IMG__16");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_2 == 0){
        var element = document.getElementById("IMG__16");
        element.classList.add("off");
        element.classList.remove("on");
      }

      if(Area_3__Device_3 == 1){
        var element = document.getElementById("IMG__17");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_3 == 0){
        var element = document.getElementById("IMG__17");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_3__Device_4 == 1){
        var element = document.getElementById("IMG__18");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_4 == 0){
        var element = document.getElementById("IMG__18");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_3__Device_5 == 1){
        var element = document.getElementById("IMG__19");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_5 == 0){
        var element = document.getElementById("IMG__19");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_3__Device_6 == 1){
        var element = document.getElementById("IMG__20");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_6 == 0){
        var element = document.getElementById("IMG__20");
        element.classList.add("off");
        element.classList.remove("on");
      }
      if(Area_3__Device_7 == 1){
        var element = document.getElementById("IMG__21");
        element.classList.add("on");
        element.classList.remove("off");
      }
      if(Area_3__Device_7 == 0){
        var element = document.getElementById("IMG__21");
        element.classList.add("off");
        element.classList.remove("on");
      }
    })
}