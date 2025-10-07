import { showModal } from "./modal.js";
// https://api.openweathermap.org/data/2.5/weather?q=semnan&appid=22a9d242fce1edf5774cce498fdc3c74&units=metric
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "22a9d242fce1edf5774cce498fdc3c74";

const getWeatherData = async (type, data) => {
  let url = null;

  switch (type) {
    case "current":
      if (typeof data === "string") {
        url = `${BASE_URL}/weather?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
      break;
    case "forecast":
      if (typeof data === "string") {
        url = `${BASE_URL}/forecast?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
      break;

    default:
      url = `${BASE_URL}/weather?q=semnan&appid=${API_KEY}&units=metric`;
      break;
  }

  try {
    const response = await fetch(url);
    const json = await response.json();
    if (+json.cod === 200) {
      return json;
    } else {
      showModal(json.message);
    }
  } catch (error) {
    showModal("An error occured when fetching data");
  }
};

export default getWeatherData;


console.log({
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1757667600,
      "main": {
        "temp": 29.12,
        "feels_like": 27.47,
        "temp_min": 29.12,
        "temp_max": 32.68,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 867,
        "humidity": 16,
        "temp_kf": -3.56
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.59,
        "deg": 198,
        "gust": 4.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-12 09:00:00"
    },
    {
      "dt": 1757678400,
      "main": {
        "temp": 31.34,
        "feels_like": 29.21,
        "temp_min": 31.34,
        "temp_max": 33.34,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 866,
        "humidity": 11,
        "temp_kf": -2
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.23,
        "deg": 208,
        "gust": 5.94
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-12 12:00:00"
    },
    {
      "dt": 1757689200,
      "main": {
        "temp": 23.36,
        "feels_like": 22.93,
        "temp_min": 23.36,
        "temp_max": 23.36,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 868,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.78,
        "deg": 4,
        "gust": 9.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-12 15:00:00"
    },
    {
      "dt": 1757700000,
      "main": {
        "temp": 21.7,
        "feels_like": 21.15,
        "temp_min": 21.7,
        "temp_max": 21.7,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 870,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.4,
        "deg": 356,
        "gust": 7.87
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-12 18:00:00"
    },
    {
      "dt": 1757710800,
      "main": {
        "temp": 20.4,
        "feels_like": 19.8,
        "temp_min": 20.4,
        "temp_max": 20.4,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 870,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.82,
        "deg": 356,
        "gust": 4.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-12 21:00:00"
    },
    {
      "dt": 1757721600,
      "main": {
        "temp": 19.11,
        "feels_like": 18.49,
        "temp_min": 19.11,
        "temp_max": 19.11,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 871,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.37,
        "deg": 356,
        "gust": 3.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-13 00:00:00"
    },
    {
      "dt": 1757732400,
      "main": {
        "temp": 19.2,
        "feels_like": 18.46,
        "temp_min": 19.2,
        "temp_max": 19.2,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 873,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.49,
        "deg": 1,
        "gust": 2.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-13 03:00:00"
    },
    {
      "dt": 1757743200,
      "main": {
        "temp": 25.22,
        "feels_like": 24.5,
        "temp_min": 25.22,
        "temp_max": 25.22,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.25,
        "deg": 173,
        "gust": 1.05
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-13 06:00:00"
    },
    {
      "dt": 1757754000,
      "main": {
        "temp": 29.24,
        "feels_like": 27.6,
        "temp_min": 29.24,
        "temp_max": 29.24,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 872,
        "humidity": 18,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.11,
        "deg": 177,
        "gust": 2.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-13 09:00:00"
    },
    {
      "dt": 1757764800,
      "main": {
        "temp": 30.61,
        "feels_like": 28.64,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 870,
        "humidity": 16,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.44,
        "deg": 179,
        "gust": 2.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-13 12:00:00"
    },
    {
      "dt": 1757775600,
      "main": {
        "temp": 27.11,
        "feels_like": 26.24,
        "temp_min": 27.11,
        "temp_max": 27.11,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 871,
        "humidity": 23,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.93,
        "deg": 182,
        "gust": 1.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-13 15:00:00"
    },
    {
      "dt": 1757786400,
      "main": {
        "temp": 24,
        "feels_like": 23.53,
        "temp_min": 24,
        "temp_max": 24,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 872,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.59,
        "deg": 16,
        "gust": 4.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-13 18:00:00"
    },
    {
      "dt": 1757797200,
      "main": {
        "temp": 21.71,
        "feels_like": 21.19,
        "temp_min": 21.71,
        "temp_max": 21.71,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 872,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.19,
        "deg": 6,
        "gust": 4.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-13 21:00:00"
    },
    {
      "dt": 1757808000,
      "main": {
        "temp": 21.16,
        "feels_like": 20.51,
        "temp_min": 21.16,
        "temp_max": 21.16,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 872,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.93,
        "deg": 358,
        "gust": 3.95
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-14 00:00:00"
    },
    {
      "dt": 1757818800,
      "main": {
        "temp": 22.18,
        "feels_like": 21.45,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 872,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.58,
        "deg": 5,
        "gust": 2.85
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-14 03:00:00"
    },
    {
      "dt": 1757829600,
      "main": {
        "temp": 27.18,
        "feels_like": 26.42,
        "temp_min": 27.18,
        "temp_max": 27.18,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.46,
        "deg": 168,
        "gust": 2.35
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-14 06:00:00"
    },
    {
      "dt": 1757840400,
      "main": {
        "temp": 30.12,
        "feels_like": 28.34,
        "temp_min": 30.12,
        "temp_max": 30.12,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 872,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.94,
        "deg": 184,
        "gust": 2.13
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-14 09:00:00"
    },
    {
      "dt": 1757851200,
      "main": {
        "temp": 31.66,
        "feels_like": 29.52,
        "temp_min": 31.66,
        "temp_max": 31.66,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 870,
        "humidity": 16,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.54,
        "deg": 195,
        "gust": 2.57
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-14 12:00:00"
    },
    {
      "dt": 1757862000,
      "main": {
        "temp": 27.88,
        "feels_like": 26.85,
        "temp_min": 27.88,
        "temp_max": 27.88,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 871,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.34,
        "deg": 282,
        "gust": 1.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-14 15:00:00"
    },
    {
      "dt": 1757872800,
      "main": {
        "temp": 22.82,
        "feels_like": 22.41,
        "temp_min": 22.82,
        "temp_max": 22.82,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 872,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.13,
        "deg": 357,
        "gust": 5.48
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-14 18:00:00"
    },
    {
      "dt": 1757883600,
      "main": {
        "temp": 21.16,
        "feels_like": 20.69,
        "temp_min": 21.16,
        "temp_max": 21.16,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 872,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.51,
        "deg": 358,
        "gust": 5.7
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-14 21:00:00"
    },
    {
      "dt": 1757894400,
      "main": {
        "temp": 20.27,
        "feels_like": 19.71,
        "temp_min": 20.27,
        "temp_max": 20.27,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 872,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.49,
        "deg": 356,
        "gust": 5.29
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-15 00:00:00"
    },
    {
      "dt": 1757905200,
      "main": {
        "temp": 20.33,
        "feels_like": 19.75,
        "temp_min": 20.33,
        "temp_max": 20.33,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 873,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.01,
        "deg": 351,
        "gust": 3.44
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-15 03:00:00"
    },
    {
      "dt": 1757916000,
      "main": {
        "temp": 25.99,
        "feels_like": 25.99,
        "temp_min": 25.99,
        "temp_max": 25.99,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.42,
        "deg": 193,
        "gust": 0.95
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-15 06:00:00"
    },
    {
      "dt": 1757926800,
      "main": {
        "temp": 29.52,
        "feels_like": 28,
        "temp_min": 29.52,
        "temp_max": 29.52,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 872,
        "humidity": 24,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.03,
        "deg": 192,
        "gust": 3.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-15 09:00:00"
    },
    {
      "dt": 1757937600,
      "main": {
        "temp": 30.31,
        "feels_like": 28.57,
        "temp_min": 30.31,
        "temp_max": 30.31,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 870,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 2.24,
        "deg": 201,
        "gust": 2.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-15 12:00:00"
    },
    {
      "dt": 1757948400,
      "main": {
        "temp": 26.32,
        "feels_like": 26.32,
        "temp_min": 26.32,
        "temp_max": 26.32,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 871,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 6
      },
      "wind": {
        "speed": 3.26,
        "deg": 17,
        "gust": 3.53
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-15 15:00:00"
    },
    {
      "dt": 1757959200,
      "main": {
        "temp": 22.54,
        "feels_like": 22.13,
        "temp_min": 22.54,
        "temp_max": 22.54,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 872,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 3.73,
        "deg": 353,
        "gust": 4.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-15 18:00:00"
    },
    {
      "dt": 1757970000,
      "main": {
        "temp": 21.08,
        "feels_like": 20.6,
        "temp_min": 21.08,
        "temp_max": 21.08,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.63,
        "deg": 360,
        "gust": 4.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-15 21:00:00"
    },
    {
      "dt": 1757980800,
      "main": {
        "temp": 20.35,
        "feels_like": 19.82,
        "temp_min": 20.35,
        "temp_max": 20.35,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.3,
        "deg": 360,
        "gust": 3.44
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-16 00:00:00"
    },
    {
      "dt": 1757991600,
      "main": {
        "temp": 20.43,
        "feels_like": 19.89,
        "temp_min": 20.43,
        "temp_max": 20.43,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 874,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 1,
        "gust": 2.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-16 03:00:00"
    },
    {
      "dt": 1758002400,
      "main": {
        "temp": 25.07,
        "feels_like": 24.57,
        "temp_min": 25.07,
        "temp_max": 25.07,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 874,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.23,
        "deg": 183,
        "gust": 2.05
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-16 06:00:00"
    },
    {
      "dt": 1758013200,
      "main": {
        "temp": 28.13,
        "feels_like": 27.14,
        "temp_min": 28.13,
        "temp_max": 28.13,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 873,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.19,
        "deg": 185,
        "gust": 3.34
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-16 09:00:00"
    },
    {
      "dt": 1758024000,
      "main": {
        "temp": 28.97,
        "feels_like": 27.69,
        "temp_min": 28.97,
        "temp_max": 28.97,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 871,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 19
      },
      "wind": {
        "speed": 2.8,
        "deg": 194,
        "gust": 2.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-16 12:00:00"
    },
    {
      "dt": 1758034800,
      "main": {
        "temp": 26.37,
        "feels_like": 26.37,
        "temp_min": 26.37,
        "temp_max": 26.37,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 871,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 19
      },
      "wind": {
        "speed": 0.63,
        "deg": 31,
        "gust": 2.46
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-16 15:00:00"
    },
    {
      "dt": 1758045600,
      "main": {
        "temp": 23.43,
        "feels_like": 23.06,
        "temp_min": 23.43,
        "temp_max": 23.43,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.91,
        "deg": 12,
        "gust": 2.94
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-16 18:00:00"
    },
    {
      "dt": 1758056400,
      "main": {
        "temp": 21.83,
        "feels_like": 21.4,
        "temp_min": 21.83,
        "temp_max": 21.83,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 873,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 14
      },
      "wind": {
        "speed": 2.25,
        "deg": 15,
        "gust": 2.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-16 21:00:00"
    },
    {
      "dt": 1758067200,
      "main": {
        "temp": 21.02,
        "feels_like": 20.51,
        "temp_min": 21.02,
        "temp_max": 21.02,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 872,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 10
      },
      "wind": {
        "speed": 2.72,
        "deg": 6,
        "gust": 2.8
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-17 00:00:00"
    },
    {
      "dt": 1758078000,
      "main": {
        "temp": 20.94,
        "feels_like": 20.4,
        "temp_min": 20.94,
        "temp_max": 20.94,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 873,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.26,
        "deg": 20,
        "gust": 1.66
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-17 03:00:00"
    },
    {
      "dt": 1758088800,
      "main": {
        "temp": 24.6,
        "feels_like": 24.13,
        "temp_min": 24.6,
        "temp_max": 24.6,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 874,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.7,
        "deg": 186,
        "gust": 2.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-17 06:00:00"
    }
  ],
  "city": {
    "id": 116402,
    "name": "Semnan",
    "coord": {
      "lat": 35.5729,
      "lon": 53.3971
    },
    "country": "IR",
    "population": 124826,
    "timezone": 12600,
    "sunrise": 1757642810,
    "sunset": 1757687936
  }
});