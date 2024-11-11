# Node.js CSV File Processing Project

This project demonstrates how to use Node.js for reading and processing CSV files. The goal is to filter data from a CSV file (`input_countries.csv`) and create separate text files (`canada.txt` and `usa.txt`) containing only the data for Canada and the United States, respectively.

## 📂 Overview

The main functionality is implemented in the `index.js` file, which uses the `fs` and `csv-parser` Node.js modules. The script reads data from an input CSV file, filters rows based on the country, and writes the filtered data into separate text files.

## 🗃️ Files

### 1. `index.js`

This file contains the Node.js script to:

- **Check for existing output files** (`canada.txt`, `usa.txt`), and delete them if they exist.
- **Read data from** `input_countries.csv` using a readable stream.
- **Filter the data**:
  - Rows where the `country` field is "Canada" are written to `canada.txt`.
  - Rows where the `country` field is "United States" are written to `usa.txt`.
- **Write headers** for both output files and format the data as `country, population, year`.

**Key Features**:
- Uses `fs` module for file operations.
- Uses `csv-parser` module to handle CSV parsing.
- Implements streams for efficient file reading and writing.

### 2. `input_countries.csv`

A sample CSV file containing population data for various countries across different years. It includes the following columns:
- `country`: Name of the country.
- `year`: The year of the recorded population.
- `population`: The population count for that year.

**Sample Data**:
country,year,population
 Afghanistan,1952,8425333
 Canada,1997,31147000
 United States,2007,301231207


## 🚀 How to Run

1. **Install Dependencies**:
   ```bash
   npm install csv-parser

📂 Output Files
canada.txt: Contains filtered data for Canada.
usa.txt: Contains filtered data for the United States.
📄 Example Output
canada.txt
country, population, year 
Canada, 31147000, 1997
Canada, 32805000, 2002
Canada, 33390141, 2007
usa.txt
country, population, year 
United States, 250894781, 1992
United States, 272690813, 1997
United States, 301231207, 2007

🛠️ Technologies Used
Node.js for server-side scripting.
csv-parser package for parsing CSV data.
fs module for file system operations.
⚠️ Notes
Ensure input_countries.csv is in the same directory as index.js before running the script.
The script will automatically delete existing canada.txt and usa.txt files if they are present.
