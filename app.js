const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const AdmZip = require('adm-zip');
const path = require('path');
const fs = require('fs');


app.use(fileUpload());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


function isZipFile(file) {
    return file.mimetype === 'application/zip' || file.name.endsWith('.zip');
}


app.post('/upload', (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).send('No files were uploaded.');
        }

        let uploadedFile = req.files.file;

        if (!isZipFile(uploadedFile)) {
            return res.status(400).send('Uploaded file is not a zip file.');
        }

        let uploadPath = path.join(__dirname, 'uploads');

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }

        uploadedFile.mv(path.join(uploadPath, uploadedFile.name), (err) => {
            if (err) {
                return res.status(500).send(err);
            }

            let zip = new AdmZip(path.join(uploadPath, uploadedFile.name));
            let zipEntries = zip.getEntries();

            let uploadedFiles = [];

            zipEntries.forEach((zipEntry) => {
                let filePath = path.join(uploadPath, zipEntry.entryName);
                fs.writeFileSync(filePath, zipEntry.getData().toString('utf8'), 'utf8')
                uploadedFiles.push(filePath);

            });

            res.send(`Files uploaded and extracted to the upload folder: ${uploadedFiles.join(', ')}`);
        });
    }
    catch (error) {
        res.status(500).send(`An error occurred: ${error.message}`);
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
