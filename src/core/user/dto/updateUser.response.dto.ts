import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserResponseDto {
  @AutoMap()
  @ApiProperty()
  firstName: string;

  @AutoMap()
  @ApiProperty()
  lastName: string;

  @AutoMap()
  @ApiProperty()
  userName: string;
}
