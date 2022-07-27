import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
const fs = require('fs')
import {
  google,   
  drive_v3, 
  Auth,     
  Common, 
} from 'googleapis';
const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
    keyFile: './src/keydriveapi.json',
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
const drive: drive_v3.Drive = google.drive({
  version: 'v3',
  auth,
});
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
 const filename = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = new Date().getTime();
  callback(null, `${filename}_${randomName}${fileExtName}`);
};

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upfiles',
        filename: editFileName,
      }),
      //fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    console.error(file);
    
   // console.error(file);
   // const response = {originalname:file.originalname,filename: file.filename,Exten : extname(file.originalname)};
    return file;
  }
  @Get('path/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './upfiles' });
  }
  @Delete('path/:imgpath')
  DeleteFile(@Param('imgpath') image, @Res() res) {
        const path = `./upfiles/${image}`;
        if (fs.existsSync(path)) {
          fs.unlinkSync(path)
          return true
       }
       else 
       {
        console.error(false)
         return false
       }
  }
  @Get()
  findAll() {
    return this.uploadService.findAll();
  }
  @Get('/listfile')
  async listfile() {
    // const listParams: drive_v3.Params$Resource$Files$List = {};
    // const res = await drive.files.list(listParams);
    // const listResults: drive_v3.Schema$FileList = res.data;
    // const folder = await drive.files.create({
    //   requestBody: {
    //     name: 'Test',
    //     mimeType: 'application/vnd.google-apps.folder',
    //     parents:['1g3EsghYdu31gA5FnsholvHVpZkG9UG0r']
    //   },
    // });
    // const res = await drive.files.create({
    //   requestBody: {
    //     name: 'Test',
    //     mimeType: 'text/plain',
    //     parents:['1g3EsghYdu31gA5FnsholvHVpZkG9UG0r']
    //   },
    //   media: {
    //     mimeType: 'text/plain',
    //     body: 'Hello World'
    //   }
    // });

    // return res.data.id
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(id);
  }
  @Post()
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadService.create(createUploadDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(id, updateUploadDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(id);
  }

  // @Post('file')
  // @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  // uploadSingle(@UploadedFile() file) {
  //   console.log(file);
  // }
  // @Post('files')
  // @UseInterceptors(FilesInterceptor('files[]', 10, { dest: './uploads' }))
  // uploadMultiple(@UploadedFiles() files) {
  //   console.log(files);
  // }

  // @Post()
  // create(@Body() createUploadDto: CreateUploadDto) {
  //   return this.uploadService.create(createUploadDto);
  // }

  // @Get()
  // findAll() {
  //   return this.uploadService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.uploadService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
  //   return this.uploadService.update(+id, updateUploadDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.uploadService.remove(+id);
  // }
}
