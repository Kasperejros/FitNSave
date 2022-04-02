import RNLocation from 'react-native-location';


export default class Travel {
    constructor() {
    }
    async startTravel() {
        RNLocation.configure({
            distanceFilter: null
        })
        const permissionHandle = async () => {
            return await RNLocation.checkPermission({
                ios: 'whenInUse', // or 'always'
                android: {
                    detail: 'fine' // or 'fine'
                }
            });
        }
        const hasPermissions = await permissionHandle();
        if (hasPermissions) {
            this.lastLocation = await RNLocation.getLatestLocation({timeout: 100})

            this.traveledDistance = 0;
            this.travelTime = 0;
            this.locationSubscription = RNLocation.subscribeToLocationUpdates(newLocation => {
                this.traveledDistance += distanceBetweenLocations(lastLocation, newLocation);
                this.travelTime =+ timeBetweenLocations(lastLocation, newLocation);
                this.lastLocation = newLocation;
            });
        }
    }
}

const distanceBetweenLocations = (loc1, loc2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = toRad(loc1.latitude-loc2.latitude);
    var dLon = toRad(loc2.longitude-lon2.longitude);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c; // Distance in km
}
const timeBetweenLocations = (loc1, loc2) => {
    return Math.abs(loc1.timestamp-loc2.timestamp)
}