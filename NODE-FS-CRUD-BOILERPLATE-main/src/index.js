const fs = require('fs/promises')
// console.log(fs)

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 await fs.writeFile(fileName,fileContent)
	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
const data=	await fs.readFile(fileName)
console.log(data.toString())

}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

