import * as FileSystem from 'expo-file-system';

export async function createJSONFile(filename, data) {
  	try {
    	const directoryUri = FileSystem.documentDirectory;
    	const fileUri = directoryUri + filename;
    	const jsonContent = JSON.stringify(data);

    	await FileSystem.writeAsStringAsync(fileUri, jsonContent);
    	console.log('JSON file created successfully!');
  	} catch (error) {
    	console.error('Error occurred while creating JSON file:', error);
  	}
}

// export async function writeToJSONFile(file) {
//   try {
//     const directoryUri = FileSystem.documentDirectory;
//     const filename = 'example.json';
//     const fileUri = directoryUri + filename;
//     // Read the existing JSON file
//     const existingContent = await FileSystem.readAsStringAsync(fileUri);
//     const existingData = JSON.parse(existingContent);
//     // Modify the data
//     existingData.name = 'Jane Doe';
//     existingData.age = 35;
//     // Convert the modified data back to JSON string
//     const updatedContent = JSON.stringify(existingData);
//     // Write the updated JSON content to the file
//     await FileSystem.writeAsStringAsync(fileUri, updatedContent);
//     console.log('JSON file updated successfully!');
//   } catch (error) {
//     console.error('Error occurred while writing to JSON file:', error);
//   }
// }

export async function readJSONFile(filename, print = false) {
  	try {
    	const directoryUri = FileSystem.documentDirectory; // or any other directory where the file is located
    	const fileUri = directoryUri + filename;

    	// Read the JSON file
    	const fileContent = await FileSystem.readAsStringAsync(fileUri);

    	// Print the JSON data to the console if print = true
		if (print === true) {
			const jsonData = JSON.parse(fileContent);
			console.log(jsonData);
		}

    	return fileContent;
  	} catch (error) {
    	console.error('Error occurred while reading JSON file:', error);
  	}
}

export async function listFilesInDirectory(print_all = false) {
  	try {
    	const directoryUri = FileSystem.documentDirectory; // or any other directory you want to list files from
    	const fileArray = await FileSystem.readDirectoryAsync(directoryUri);
    	console.log(fileArray);
    	
		if (print_all === true) {
			fileArray.map(async (JSONFile) => {
	      		const parsedJSONFile = await readJSONFile(JSONFile);
    	  		console.log(parsedJSONFile);
    		})
		}
    	
  	} catch (error) {
    	console.error('Error occurred while listing files:', error);
  	}
}