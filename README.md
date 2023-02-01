# Colorado Fourteeners API

This is a REST API to serve data about the mountain peaks with an elevation above 14,000 feet (also known as "14ers" or "fourteeners") in the U.S. state of Colorado.

The data included with each peak is:

* id (an integer between 1 and 58)
* name 
* elevation (in feet)
* difficulty rating (class)
* mountain range the peak is located in
* distance (round trip distance via the standard route in miles)
* elevation gain (in feet)
* latitude
* longitude
* a thumbnail image

## Usage

Please visit [(coming soon)](https://github.com/mbasagoitia/colorado-fourteeners-api) to access the resource.

- To get a list of all peaks: **/api/peaks**
- To get a single peak: **/api/peaks/[id]**
- To get a list of all the ranges represented by the 14ers: **/api/ranges**
- Optional query parameters: **range** and **difficulty** (can be used separately or together)

For example: **/api/peaks?difficulty=4** will return all of the class 4 peaks, and **/api/peaks?range=sawatch** will return all peaks in the Sawatch range. Using **/api/peaks?difficulty=3&range=san%20juan** will return all of the class 3 peaks located in the San Juan range.

- If you would like to expand this list and add a new peak, send a POST request to **/api/peaks**
- To update an existing peak, send a PUT request to **/api/peaks/[id]**
- To delete a peak, send a DELETE request to **/api/peaks/[id]**
- Sending a GET request to **/api/requestlog** will prompt you to download a log of all requests to the server

## Contributing

Pull requests are welcome. For any changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://github.com/mbasagoitia/colorado-fourteeners-api/blob/main/LICENSE.md)
