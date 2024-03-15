# IMDB Movie Scraper

Welcome to the GitHub repository for the IMDB Movie Scraper project! This project is a Node.js script designed to scrape movie data from a specific IMDB list page and export the information into a CSV file.

## Project Overview

The script uses various Node.js modules, including `axios` for HTTP requests, `jsdom` for parsing and querying the DOM of the webpage, `json2csv` for converting JSON data to CSV format, and `fs` (File System module in Node.js) for writing the CSV file.

### Main Features

- **Web Scraping**: Extracts movie data from an IMDB list page.
- **Data Extraction**: Gathers details such as movie name, release date, genre, and rating.
- **CSV Generation**: Converts the scraped data into a CSV format for easy use and analysis.

### How It Works

1. **Fetch Page Content**: Uses `axios` to make a GET request to the specified IMDB list URL.
2. **Parse HTML**: Utilizes `jsdom` to parse the HTML content and extract relevant data.
3. **Extract Movie Information**: Extracts the name, release date, genre, and rating for each movie in the list.
4. **Convert to CSV**: Transforms the extracted data into CSV format using `json2csv`.
5. **Save to File**: Writes the CSV data to a file named `movies.csv`.

### Getting Started

To run this script, you will need Node.js installed on your system. After cloning the repository, run `npm install` to install the necessary dependencies. You can then execute the script using `node script.js`.

### Dependencies

- axios
- jsdom
- json2csv
- fs (built-in Node.js module)

### Usage

This script is especially useful for data enthusiasts and professionals who need to quickly extract and analyze movie data from IMDB. It can be modified to scrape other types of lists or pages on IMDB as required.

## Contributing

Contributions to enhance the script, such as adding more features, improving error handling, or extending it to scrape other websites, are welcome. Please feel free to fork the project and submit your pull requests.

