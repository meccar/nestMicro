import { UpdateUserRequestDto } from "src/core/user/dto/updateUser.request.dto";
import { UpdateUserResponseDto } from "src/core/user/dto/updateUser.response.dto";
import { IUsecase } from "src/shared/interface/usecase";

export abstract class IUpdateUserAdapter implements IUsecase {
  abstract execute(input: UpdateUserRequestDto): Promise<UpdateUserResponseDto>;
}
