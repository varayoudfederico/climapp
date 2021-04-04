# Climapp

Aplicacion para consulta de clima y pronóstico desarrollada en React / Express.js

#### Live Demo: https://climappv1.netlify.app

## Backend

Desarrollado con Express.js.

Para obtener la informacion tanto del tiempo actual como del pronostico se utilizó la API One Call de OpenWeatherMap por la conveniencia en la forma de devolver la información de clima. Esta API requiere los valores de latitud y longitud de la ciudad que se quiere consultar, por lo que estos datos son obtenidos y almacenados cada vez que se guarda una nueva ciudad.

### Endpoints

- /location
  Devuelve la ubicación actual del usuario. Utiliza ip-api.

- /current  
   Devuelve el estado actual del tiempo en la ubicacion actual del usuario, utilizando la API de OpenWeatherMap.

- /forecast  
   Igual que current pero para el pronostico de los próximos 8 dias.

- /current/:city  
   Devuelve el estado del tiempo en la ciudad city.

- /forecast/:city
  Devuelve el pronostico del tiempo de los proximos 8 dias en la ciudad city.

- /current/coordinates  
   Devuelve el estado del tiempo en las coordenadas geograficas lat y lon, que deben pasarse como parametro.

- /forecast/coordinates  
   Devuelve el pronostico en las coordenadas geograficas lat y lon, que deben pasarse como parametro.

- /ciudad/:city  
   Devuelve la información sobre una ciudad, incluyendo país, latitud y longitud. Utiliza la API Geocoding de OpenWeatherMap.

## Frontend

Desarrollado en React para dispositivos móviles usando Hooks y Context. Se utiliza antd como framework de UI.

### Funcionamiento

El container principal App.js se encarga de renderizar CityList.js, o City.js, dependiendo si el usuario seleccionó una ciudad o no. En caso que el usuario seleccione una ciudad, se hace un fetch de los datos tanto del tiempo actual como el pronostico y se guardan en las variables globales weather y forecast a través de Context.

Al iniciar, CityList.js muestra todas las ciudades guardadas previamente por el usuario almacenadas en LocalStorage, asi como tambien la ubicacion actual del usuario a través del componente CityCurrent.js

Una vez que se seleccionó una ciudad, y se obtuvieron los datos del clima, Main.js renderiza el componente City.js, el cual a su vez renderiza los componentes CityDetalles.js y CityForecast.js, los cuales muestran la informacion del tiempo y pronostico en pantalla.