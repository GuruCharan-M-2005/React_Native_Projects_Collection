import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Weather = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <View style={styles.image}>
        <Image source={{ uri: icon }} style={{ width: 100, height: 100 }} />
      </View>
      <Text style={styles.temp}>{temp}°C</Text>
      <Text style={styles.location}>{city}</Text>
      <Text style={styles.country}>{country}</Text>
      <View style={styles.cord}>
        <View style={styles.coordItem}>
          <Text style={styles.coordText}>Latitude</Text>
          <Text>{lat}</Text>
        </View>
        <View style={styles.coordItem}>
          <Text style={styles.coordText}>Longitude</Text>
          <Text>{log}</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.element}>
          <View style={styles.data}>
            <Text style={styles.humidityPercent}>{humidity}%</Text>
            <Text style={styles.text}>Humidity</Text>
          </View>
        </View>
        <View style={styles.element}>
          <View style={styles.data}>
            <Text style={styles.windPercent}>{wind} km/h</Text>
            <Text style={styles.text}>Wind Speed</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const WeatherAPI = () => {
  let api_key = "bcdeb89f221cf57449df2bf273a4a006";
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [text, setText] = useState("Chennai");
  const [error, setError] = useState(null);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        setCityNotFound(true);
        setLoading(false);
        console.error("city not found");
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setCityNotFound(false);
      setError(null);
    } catch (e) {
      setError("An error occurred while fetching weather data.");
      console.log("An error occurred:", e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.cityInput}
          placeholder="Search City"
          onChangeText={setText}
          value={text}
          onSubmitEditing={search}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={search}>
          <Text style={{ color: '#fff' }}>Find</Text>
        </TouchableOpacity>
      </View>
      {loading && <Text style={styles.loadingMsg}>Loading...</Text>}
      {error && <Text style={styles.errorMsg}>{error}</Text>}
      {cityNotFound && <Text style={styles.cityNotFound}>City not found</Text>}
      {!loading && !cityNotFound && (
        <Weather
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          log={log}
          humidity={humidity}
          wind={wind}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f3640',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#70e6f3',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cityInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    padding: 10,
    color: '#333',
  },
  searchIcon: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  image: {
    alignItems: 'center',
  },
  temp: {
    marginTop: 5,
    fontSize: 35,
    color: '#333',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  location: {
    color: '#ffbc00',
    fontSize: 40,
  },
  country: {
    fontSize: 18,
    color: '#888',
  },
  cord: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  coordItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  coordText: {
    fontSize: 14,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  element: {
    textAlign: 'center',
  },
  data: {
    alignItems: 'center',
  },
  humidityPercent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    paddingTop: 5,
  },
  windPercent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    paddingTop: 5,
  },
  text: {
    fontSize: 12,
    color: '#888',
  },
  cityNotFound: {
    marginTop: 10,
    color: '#888',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMsg: {
    marginTop: 10,
    color: '#888',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
  loadingMsg: {
    marginTop: 10,
    color: '#888',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default WeatherAPI;
