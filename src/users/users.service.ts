import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
import { NotiDTO } from './noti.dto';
import * as bcrypt from 'bcrypt';
    @Injectable()
    export class UsersService {
      constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
      ) {}

      async Pushnoti(data: NotiDTO) {
        const PushNotifications = require('@pusher/push-notifications-server');
          let beamsClient = new PushNotifications({
            instanceId: '6a682eeb-8cd5-4f39-b3dc-b0cf5857881f',
            secretKey: '72850F07C0DFC7CA741A2F720AA44139610DC45D52EFFE12F6E47E407D551792'
          });    
         return beamsClient
            .publishToInterests([`idUser_${data.idUser}`], {
              // web: {
              //   notification: {
              //     title: "Test Noti Popup",
              //     body: "Xin lỗi vì sự bất tiện này. Đây là tin nhắn test. Vui lòng bỏ qua.",
              //     deep_link: "https://www.tazagroup.vn",
              //   },
              web: {
                notification: {
                  title: data.title,
                  body: data.body,
                  icon:"https://tazagroup.vn/templates/tazagroup/images/logo-white.png",
                  deep_link: data.link,
                },
              },
            })
            .then((publishResponse) => {
              console.log("Just published:", publishResponse.publishId);
            })
            .catch((error) => {
              console.log("Error:", error);
            });
      }
      
      async showAll() {
        return await this.usersRepository.find();
      }

      async setPassword(password: string) {
          const salt = await bcrypt.genSalt();
          return await bcrypt.hash(password, salt);
        }
      async create(data: UsersDTO) {
       const check = await this.validateSDT(data.SDT);
       if (check) {
         return 1
       }
       const check1 = await this.validateEmail(data.email);
       if (check1) {
         return 2
       }    
       data.password = await this.setPassword(data.password);
       this.usersRepository.create(data);
       return await this.usersRepository.save(data);

      }

      async findByEmail(email: string): Promise<UsersDTO> {
         return await this.usersRepository.findOne({
          where: {
            email: email,
          },
        });
      }
      async findBySDT(SDT: string): Promise<UsersDTO> {
         return await this.usersRepository.findOne({
          where: {
            SDT: SDT,
          },
        });
      }

      async read(id: string) {
        return await this.usersRepository.findOne({ where: { id: id } });
      }

      async update(id: string, data: Partial<UsersDTO>) {
        await this.usersRepository.update({ id }, data);
        return await this.usersRepository.findOne({ id });
      }
      async destroy(id: string) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
      }


      async validateSDT(SDT: string) {
        try {
          const user = await this.findBySDT(SDT);
          return user;
        } catch (e) {
          return false;
        }
      }  
      async validateEmail(email: string) {
        try {
         const user = await this.findByEmail(email);
          return user;
        } catch (e) {
          return false;
        }
      }

    }