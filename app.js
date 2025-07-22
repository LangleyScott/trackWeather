const tracks = [
    {
        Name: 'Default',
        shortName: '--Pick a track!--',
        location: 'Charlotte, North Carolina',
        point: '35.222,-80.843',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NASCAR_logo_2017.svg/550px-NASCAR_logo_2017.svg.png'
    },
    {
        Name: 'EchoPark Speedway',
        shortName: 'EchoPark',
        location: 'Hampton, Georgia',
        point: '33.383,-84.317',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/EchoPark_Speedway_Atlanta_2025.png/500px-EchoPark_Speedway_Atlanta_2025.png'
    },
    {
        Name: 'Bowman Gray Stadium',
        shortName: 'Bowman Gray',
        location: 'Winston-Salem, North Carolina',
        point: '36.082, -80.222',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Bowman_Gray_Stadium_logo.png'
    },
    {
        Name: 'Bristol Motor Speedway',
        shortName: 'Bristol',
        location: 'Bristol, Tennessee',
        point: '36.515, -82.256',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bristol_Motor_Speedway.svg/500px-Bristol_Motor_Speedway.svg.png'
    },
    {
        Name: 'Charlotte Motor Speedway',
        shortName: 'Charlotte',
        location: 'Concord, North Carolina',
        point: '35.352, -80.682',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Charlotte_Motor_Speedway_logo.svg/960px-Charlotte_Motor_Speedway_logo.svg.png'
    },
    {
        Name: 'Chicagoland Speedway',
        shortName: 'Chicagoland',
        location: 'Joliet, Illinois',
        point: '41.474, -88.057',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Chicagoland_Speedway_logo.png/500px-Chicagoland_Speedway_logo.png'
    },
    {
        Name: 'Circuit of the Americas',
        shortName: 'COTA',
        location: 'Austin, Texas',
        point: '30.132, -97.641',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Circuit_of_the_Americas_logo.svg/500px-Circuit_of_the_Americas_logo.svg.png'
    },
    {
        Name: 'Darlington Raceway',
        shortName: 'Darlington',
        location: 'Darlington, South Carolina',
        point: '34.295, -79.905',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Darlington_Raceway.png'
    },
    {
        Name: 'Daytona International Speedway',
        shortName: 'Daytona',
        location: 'Daytona Beach, Florida',
        point: '29.185, -81.069',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Daytona_International_Speedway_logo.png'
    },
    {
        Name: 'Dover Motor Speedway',
        shortName: 'Dover',
        location: 'Dover, Delaware',
        point: '39.189, -75.530',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Dover_Motor_Speedway_logo.png/500px-Dover_Motor_Speedway_logo.png'
    },
    {
        Name: 'Homestea-Miami Speedway',
        shortName: 'Homestead',
        location: 'Homestead, Florida',
        point: '25.451, -80.408',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Homestead%E2%80%93Miami_Speedway_logo.svg/500px-Homestead%E2%80%93Miami_Speedway_logo.svg.png'
    },
    {
        Name: 'Indianapolis Motor Speedway',
        shortName: 'Indianapolis',
        location: 'Speedway, Indiana',
        point: '39.798, -86.232',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Indianapolis_Motor_Speedway_logo.svg/500px-Indianapolis_Motor_Speedway_logo.svg.png'
    },
    {
        Name: 'Iowa Speedway',
        shortName: 'Iowa',
        location: 'Newton, Iowa',
        point: '41.677, -93.014',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/78_Black_Outline.svg/500px-78_Black_Outline.svg.png'
    },
    {
        Name: 'Kansas Speedway',
        shortName: 'Kansas',
        location: 'Kansas City, Kansas',
        point: '39.115, -94.831',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Kansas_speedway_new_logo.svg/600px-Kansas_speedway_new_logo.svg.png'
    },
    {
        Name: 'Kentucky Speedway',
        shortName: 'Kentucky',
        location: 'Sparta, Kentucky',
        point: '38.709, -84.916',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Kentucky_Speedway.png/500px-Kentucky_Speedway.png'
    },
    {
        Name: 'Langley Speedway',
        shortName: 'Langley',
        location: 'Hampton, Virginia',
        point: '37.086, -76.386',
        imgURL: 'https://www.simracing.wiki/mediawiki-1.39.1/images/e/e0/Langley_logo.png'
    },
    {
        Name: 'Las Vegas Motor Speedway',
        shortName: 'Las Vegas',
        location: 'Las Vegas, Nevada',
        point: '36.271, -115.011',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Las_Vegas_Motor_Speedway.png/500px-Las_Vegas_Motor_Speedway.png'
    },
    {
        Name: 'Lime Rock Park',
        shortName: 'Lime Rock',
        location: 'Lakeville, Connecticut',
        point: '41.927, -73.383',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Lime_Rock_Park_%28logo%29.png'
    },
    {
        Name: 'Lucas Oil Indianapolis Raceway Park',
        shortName: 'Lucas Oil IRP',
        location: 'Brownsburg, Indiana',
        point: '39.812, -86.340',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/1/10/Lucas_Oil_Indianapolis_Raceway_Park_Logo.png'
    },
    {
        Name: 'Martinsville Speedway',
        shortName: 'Martinsville',
        location: 'Ridgeway, Virginia',
        point: '36.633, -79.851',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Martinsville_Speedway_logo.png/500px-Martinsville_Speedway_logo.png'
    },
    {
        Name: 'Michigan International Speedway',
        shortName: 'Michigan',
        location: 'Brooklyn, Michigan',
        point: '42.066, -84.241',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/8/85/Michigan_International_Speedway_logo.png'
    },
    {
        Name: 'Milwaukee Mile',
        shortName: 'Milwaukee',
        location: 'West Allis, Wisconsin',
        point: '43.02, -88.01',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Milwaukee_Mile_logo.jpg'
    },
    {
        Name: 'Nashville Superspeedway',
        shortName: 'Nashville',
        location: 'Lebanon, Tennessee',
        point: '36.044, -86.412',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/57/Nashville_SuperSpeedway_Logo_SMI.png'
    },
    {
        Name: 'New Hampshire Motor Speedway',
        shortName: 'New Hampshire',
        location: 'Loudon, New Hampshire',
        point: '43.362, -71.461',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/2016_New_Hampshire_Motor_Speedway_logo.png/500px-2016_New_Hampshire_Motor_Speedway_logo.png'
    },
    {
        Name: 'North Wilkesboro Speedway',
        shortName: 'North Wilkesboro',
        location: 'North Wilkesboro, North Carolina',
        point: '36.142, -81.072',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/61/North_Wilkesboro_Speedway.png'
    },
    {
        Name: 'Phoenix Raceway',
        shortName: 'Phoenix',
        location: 'Avondale, Arizona',
        point: '33.374, -112.311',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Phoenix_Raceway_logo.svg/500px-Phoenix_Raceway_logo.svg.png'
    },
    {
        Name: 'Pocono Raceway',
        shortName: 'Pocono',
        location: 'Long Pond, Pennsylvania',
        point: '41.061, -75.508',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Pocono_Raceway_marketing_logo.png/500px-Pocono_Raceway_marketing_logo.png'
    },
    {
        Name: 'Portland International Raceway',
        shortName: 'Portland',
        location: 'Portland, Oregon',
        point: '45.596, -122.695',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Portland_International_Raceway_logo.svg/500px-Portland_International_Raceway_logo.svg.png'
    },
    {
        Name: 'Richmond Raceway',
        shortName: 'Richmond',
        location: 'Richmond, Virginia',
        point: '37.591, -77.420',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Richmond_Raceway_Logo_%282024%29.jpg/500px-Richmond_Raceway_Logo_%282024%29.jpg'
    },
    {
        Name: 'Rockingham Speedway',
        shortName: 'Rockingham',
        location: 'Rockingham, North Carolina',
        point: '34.974, -79.610',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Rockingham_Speedway_2024_logo.svg/330px-Rockingham_Speedway_2024_logo.svg.png'
    },
    {
        Name: 'Sonoma Raceway',
        shortName: 'Sonoma',
        location: 'Sonoma, California',
        point: '38.160, -122.455',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Sonoma_Raceway_logo.png/500px-Sonoma_Raceway_logo.png'
    },
    {
        Name: 'Talladega Superspeedway',
        shortName: 'Talladega',
        location: 'Lincoln, Alabama',
        point: '33.566, -86.066',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Talladega_new_logo.webp/330px-Talladega_new_logo.webp.png'
    },
    {
        Name: 'Texas Motor Speedway',
        shortName: 'Texas',
        location: 'Fort Worth, Texas',
        point: '33.037, -97.284',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Texas_Motor_Speedway_logo.svg/500px-Texas_Motor_Speedway_logo.svg.png'
    },
    {
        Name: 'Watkins Glen International',
        shortName: 'Watkins Glen',
        location: 'Watkins Glen, New York',
        point: '42.337, -76.927',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Watkins_Glen_International_logo.svg/500px-Watkins_Glen_International_logo.svg.png'
    },
    {
        Name: 'World Wide Technology Raceway',
        shortName: 'WWT Raceway',
        location: 'Madison, Illinois',
        point: '38.650, -90.135',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/World_Wide_Technology_Raceway_logo%2C_2024_update.png/500px-World_Wide_Technology_Raceway_logo%2C_2024_update.png'
    }
]

const selectedTracks = document.querySelector('.selectedTracks');
const addTrackBtn = document.querySelector('#addTrackBtn');

const addTrack = () => {
    const newTrackDisplay = document.createElement('div');
    newTrackDisplay.classList.add('container-fluid', 'trackDisplay', 'mt-3', 'pt-2', 'row', 'justify-content-center', 'mx-auto');
    const newInfoDisplay = document.createElement('div');
    newInfoDisplay.classList.add('infoDisplay', 'col-lg-3');
    const newListSelect = document.createElement('select');
    newListSelect.classList.add('listSelect');
    tracks.forEach(track => {
        const option = document.createElement('option');
        option.value = track.shortName;
        option.textContent = track.shortName;
        newListSelect.appendChild(option);
    });
    const newImageDisplay = document.createElement('img');
    newImageDisplay.classList.add('imageDisplay', 'img-fluid');
    newImageDisplay.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NASCAR_logo_2017.svg/2880px-NASCAR_logo_2017.svg.png';
    const newLocationDisplay = document.createElement('h6');
    newLocationDisplay.classList.add('locationDisplay');
    newLocationDisplay.innerText = 'Charlotte, North Carolina';
    const newForecastDisplay = document.createElement('div');
    newForecastDisplay.classList.add('forecastDisplay', 'mt-3', 'mt-lg-0', 'col-lg-8', 'align-items-lg-center');
    const newForecastHeader = document.createElement('div');
    newForecastHeader.classList.add('row', 'align-items-center', 'justify-content-center');
    const newForecastH2 = document.createElement('h2');
    newForecastH2.classList.add('justify-content-center', 'my-auto');
    newForecastH2.innerText = 'Forecast for';
    const newDaySelect = document.createElement('select');
    newDaySelect.classList.add('daySelect', 'ml-2');
    const newForecastInfo = document.createElement('div');
    newForecastInfo.classList.add('forecastInfo', 'row', 'mt-3', 'mb-2', 'align-items-center');
    const newForecastCard = document.createElement('div');
    newForecastCard.classList.add('forecastCard', 'col-4', 'justify-content-start');
    const newForecastIcon = document.createElement('img');
    newForecastIcon.classList.add('forecastIcon', 'rounded')
    newForecastIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/US-NationalWeatherService-Logo.svg/2048px-US-NationalWeatherService-Logo.svg.png';
    const newForecastTemp = document.createElement('span');
    newForecastTemp.innerHTML = '80&#176F';
    newForecastTemp.classList.add('forecastTemp');
    const newForecastSummary = document.createElement('div');
    newForecastSummary.classList.add('forecastSummary', 'col-8', 'd-block');
    newForecastSummary.innerText = 'The forecast, sourced from the weather.gov API, will show here. It is important for race teams to know the forecast, as weather can govern strategy decisions.'

    selectedTracks.appendChild(newTrackDisplay);
    newTrackDisplay.append(newInfoDisplay, newForecastDisplay);
    newInfoDisplay.append(newListSelect, newImageDisplay, newLocationDisplay)
    newForecastDisplay.append(newForecastHeader, newForecastInfo)
    newForecastHeader.append(newForecastH2, newDaySelect);
    newForecastInfo.append(newForecastCard, newForecastSummary);
    newForecastCard.append(newForecastIcon, newForecastTemp);
    const newLoader = document.createElement('div');
    newLoader.classList.add('loader');
    newLoader.innerHTML = '`<div class="spinner"></div>`';
    newLoader.style.display = 'none';
    newForecastDisplay.appendChild(newLoader);

    const updateForecastDisplay = (period) => {
        newForecastIcon.src = period.icon;
        newForecastTemp.innerHTML = `${period.temperature}&#176F`;
        newForecastSummary.innerText = period.detailedForecast;
    }
    const getForecast = async (track) => {
        try {
            newLoader.style.display = 'block';
            newForecastInfo.style.display = 'none';
            const res = await axios.get(`https://api.weather.gov/points/${track.point}`)
            const forecast = await axios.get(`${res.data.properties.forecast}`);
            const periods = forecast.data.properties.periods;
            newDaySelect.innerHTML = '<option value="">--Pick a day!--</option>';
            periods.forEach(period => {
                const option = document.createElement('option');
                option.value = period.name;
                option.textContent = period.name;
                newDaySelect.appendChild(option);
            })
            if (periods.length > 0) {
                updateForecastDisplay(periods[0]);
                newDaySelect.value = periods[0].name;
            }
            newDaySelect.onchange = () => {
                const selectedPeriod = periods.find(
                    p => p.name === newDaySelect.value
                );
                if (selectedPeriod) updateForecastDisplay(selectedPeriod);
                newForecastIcon.src = selectedPeriod.icon;
                newForecastTemp.innerHTML = `${selectedPeriod.temperature}&#176F`;
                newForecastSummary.innerText = selectedPeriod.detailedForecast;
            };
        }
        catch (e) {
            console.log(e)
        }
        finally {
            newLoader.style.display = 'none';
            newForecastInfo.style.display = 'flex';
        }
    }
    const updateTrack = function () {
        const selectedShortName = this.value;
        const selectedTrack = tracks.find(track => track.shortName === selectedShortName);
        if (!selectedTrack) return;
        newImageDisplay.src = selectedTrack.imgURL;
        newLocationDisplay.innerText = selectedTrack.location;
        getForecast(selectedTrack);
    }
    newListSelect.addEventListener('change', updateTrack);
}

addTrack();
addTrackBtn.addEventListener('click', addTrack);





