# Climapp

Aplicacion para consulta de clima y pronóstico desarrollada en React / Express.js

## Backend

Desarrollado con Express.js.

Para obtener la informacion tanto del tiempo actual como del pronostico se utilizó la API One Call de OpenWeatherMap por la conveniencia en la forma de devolver la información de clima. Esta API requiere los valores de latitud y longitud de la ciudad que se quiere consultar, por lo que estos datos son obtenidos y almacenados cada vez que se guarda una nueva ciudad.

Endpoints:

- /location
  Devuelve la ubicación actual del usuario. Utiliza ip-api.

- /current  
  Devuelve el estado actual del tiempo en la ubicacion actual del usuario, utilizando la API de OpenWeatherMap.

- /forecast  
  Igual que current pero para el pronostico de los próximos 8 dias.

- /current/:city  
  Devuelve el estado del tiempo en la ciudad city

- /forecast/:city
  Devuelve el pronostico del tiempo de los proximos 8 dias en la ciudad city

- /ciudad/:city  
  Devuelve la información sobre una ciudad, incluyendo país, latitud y longitud. Utiliza la API Geocoding de OpenWeatherMap

## Frontend

Desarrollado en React usando Hooks y Context para dispositivos móviles. Se utiliza antd como UI framework, weather-icons-react como pack de iconos y moment para formatear fechas.

### Funcionamiento

El container principal Main.js se encarga de llamar a CityList.js, o City.js, dependiendo si el usuario seleccionó una ciudad o no. En caso que el usuario seleccione una ciudad, se hace un fetch de los datos tanto del clima actual como el pronostico y se guardan en las variables globales weather y forecast.

CityList.js muestra todas las ciudades guardadas previamente por el usuario almacenadas en LocalStorage, asi como tambien la ubicacion Actual a través del componente CityCurrent.js

Una vez que se seleccionó una ciudad, y se obtuvieron los datos del clima, Main.js renderiza el componente City.js, el cual a su vez renderiza los componentes CityDetalles.js y CityForecast.js, los cuales muestran la informacion del clima en pantalla. IconTranslator.js se encarga de renderizar el icono adecuado del pack weather-icons-react dependiendo del clima recibido.