import * as FileSystem from 'expo-file-system';

// Create a .json file called filename.
export async function createJSONFile(filename, data) {
  	try {
		// console.log('createJSONFile: start');
    	const directoryUri = FileSystem.documentDirectory;
    	const fileUri = directoryUri + filename;
    	const jsonContent = JSON.stringify(data);

    	await FileSystem.writeAsStringAsync(fileUri, jsonContent);
    	console.log('createJSONFile: success.');
  	} catch (error) {
    	console.error('createJSONFile: Error occurred while creating JSON file:', error);
  	}
}

// Read the data in filename.
export async function readJSONFile(filename, print = false) {
  	try {
		// console.log('readJSONFile: start');
    	const directoryUri = FileSystem.documentDirectory;
    	const fileUri = directoryUri + filename;

    	// Read the JSON file
    	const fileContent = await FileSystem.readAsStringAsync(fileUri);

    	// Print the JSON data to the console if print = true
		if (print === true) {
			const jsonData = JSON.parse(fileContent);
			console.log('Data =', jsonData);
		}

		console.log('readJSONFile: success');
    	return fileContent;
  	} catch (error) {
    	console.error('readJSONFile: Error occurred while reading JSON file:', error);
  	}
}

// List all files in the device's virtual storage.
export async function listFilesInDirectory(print_all = false) {
  	try {
		// console.log('listFilesInDirectory: start');
    	const directoryUri = FileSystem.documentDirectory; // or any other directory you want to list files from
    	const fileArray = await FileSystem.readDirectoryAsync(directoryUri);
    	console.log(fileArray);
    	
		if (print_all === true) {
			fileArray.map(async (JSONFile) => {
	      		const parsedJSONFile = await readJSONFile(JSONFile);
    	  		console.log(parsedJSONFile);
    		})
		}
    	console.log('listFilesInDirectory: success');
  	} catch (error) {
    	console.error('listFilesInDirectory: Error occurred while listing files:', error);
  	}
}