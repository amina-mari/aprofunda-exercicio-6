import { User } from "../../domain/user";
import { IdGenerator } from "../repositories/id-generator-interface";
import { UserRepository } from "../repositories/user-repository";

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository,
        private idGenerator: IdGenerator
    ){}

    execute(userParams: User): User {
        const user: User = {
            id: this.generateId(),
            name: userParams.name
        }

        this.userRepository.save(user);
        return user;
    }

    private generateId() {
        return this.idGenerator.generate()
    }

}