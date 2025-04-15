import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRequestDto {
  @AutoMap()
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  firstName: string;

  @AutoMap()
  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  lastName: string;

  @AutoMap()
  @ApiProperty({
    description: 'The username for the user',
    example: 'johndoe123',
  })
  userName: string;

  @AutoMap()
  @ApiProperty({
    description: 'The email for the user',
    example: 'johndoe123@gmail.com',
  })
  email: string;

  @AutoMap()
  @ApiProperty({
    description: 'The password for the user',
    example: 'Admin@123',
  })
  password: string;
}
