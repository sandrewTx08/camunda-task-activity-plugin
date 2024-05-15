import { Injectable } from "@angular/core";
import { UserRepository } from "./user.repository";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private userRepository: UserRepository) {}

  findOneUser(id: string) {
    return this.userRepository.findOneUserById(id);
  }
}
