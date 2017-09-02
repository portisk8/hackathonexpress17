var client  = mqtt.connect('ws://test.mosquitto.org:8080');
        client.on('connect', function () {
          client.subscribe('/hx/#');
        });
setInterval(function(){		
      	client.publish('/hx/pir', '');
},5000);